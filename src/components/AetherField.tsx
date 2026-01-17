import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export interface AetherFieldProps {
  particleCount?: number;
  particleSize?: number;
  color?: string;
  speed?: number;
  className?: string;
}

export const AetherField: React.FC<AetherFieldProps> = ({
  particleCount = 1500, // Balanced for performance
  particleSize = 1.5,
  color = '#4A5568', // Slate-600 ish, neutral tech
  speed = 0.5,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Particles Geometry ---
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 150; 
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 50;
      
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      originalPositions[i] = x;
      originalPositions[i + 1] = y;
      originalPositions[i + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size: particleSize,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // --- Animation Loop ---
    let frameId: number;
    let time = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      time += 0.02 * speed; // Explicit speed factor

      if (particlesRef.current && particlesRef.current.geometry.attributes.position) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        
        // Optimize: Only update every frame if needed, but for smooth sine waves we need every frame
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const x = originalPositions[i3];
            const y = originalPositions[i3 + 1];

            // Aggressive wave for visibility check
            const waveY = Math.sin(x * 0.2 + time) * 5; 
            const waveZ = Math.cos(y * 0.2 + time) * 5;

            // Parallax
            const mouseXEffect = (mouseRef.current.x * 10); 
            const mouseYEffect = (mouseRef.current.y * 10);

            // Update positions
            positions[i3] = x + (Math.sin(time * 2 + i) * 0.5); 
            positions[i3 + 1] = y + waveY + mouseYEffect;
            positions[i3 + 2] = originalPositions[i3 + 2] + waveZ + mouseXEffect; 
        }
        
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
        
        // Continuous rotation
        particlesRef.current.rotation.y = time * 0.2;
        particlesRef.current.rotation.z = time * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Observer (More robust than window resize) ---
    const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
            if (entry.contentRect && cameraRef.current && rendererRef.current) {
                const width = entry.contentRect.width;
                const height = entry.contentRect.height;
                cameraRef.current.aspect = width / height;
                cameraRef.current.updateProjectionMatrix();
                rendererRef.current.setSize(width, height);
            }
        }
    });
    resizeObserver.observe(containerRef.current);

    const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current = {
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1
        };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(frameId);
      
      const currentContainer = containerRef.current;
      if (rendererRef.current && currentContainer) {
         currentContainer.removeChild(rendererRef.current.domElement);
         rendererRef.current.dispose();
      }
      geometry.dispose();
      material.dispose();
    };
  }, [particleCount, particleSize, color, speed]);

  return <div ref={containerRef} className={`absolute inset-0 pointer-events-none z-0 ${className}`} />;
};
