import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Icon } from '@iconify/react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // --- THREE.JS HERO ANIMATION ---
    const canvas = canvasRef.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030304, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles - Structured field
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 600;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 160; 
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x666666,
        transparent: true,
        opacity: 0.5,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Check if window exists (SSR safety, though unnecessary in SPA)
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animate
    // const clock = new THREE.Clock(); // kept for potential delta usage
    let animationId: number;

    const tick = () => {
        targetX = mouseX * 0.0005; 
        targetY = mouseY * 0.0005;

        particlesMesh.rotation.y += 0.02 * (targetX - particlesMesh.rotation.y);
        particlesMesh.rotation.x += 0.02 * (targetY - particlesMesh.rotation.x);
        
        // Very Slow rotation
        particlesMesh.rotation.z += 0.0002;

        renderer.render(scene, camera);
        animationId = window.requestAnimationFrame(tick);
    }

    tick();

    // Resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', handleMouseMove);
        window.cancelAnimationFrame(animationId);
        // Basic Three.js cleanup
        material.dispose();
        renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-32 overflow-hidden">
        {/* Background Canvas */}
        <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none"></canvas>
        
        <div className="fixed inset-0 bg-signal-map z-[-15] opacity-40 pointer-events-none"></div>
        {/* Static Grid Overlay */}
        <div className="fixed inset-0 bg-grid-pattern -z-20 pointer-events-none mask-gradient"></div>
        
        <div className="max-w-5xl w-full text-center z-10 space-y-8 relative">
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-zinc-100 tracking-tighter leading-[1.05] opacity-0 animate-fade-up mix-blend-difference [animation-delay:0.2s] [animation-fill-mode:forwards]">
                    Engineering systems <br />
                    that <span className="text-zinc-500">endure.</span>
                </h1>
                
                <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-fade-up [animation-delay:0.4s] [animation-fill-mode:forwards]">
                    We design and build intelligent systems, secure platforms, and advanced software infrastructure for complex, real-world environments.
                </p>

                <div className="pt-6 opacity-0 animate-fade-up flex flex-col sm:flex-row gap-4 justify-center items-center [animation-delay:0.6s] [animation-fill-mode:forwards]">
                    <a href="/#work" className="group relative inline-flex items-center gap-2 px-8 py-3 bg-zinc-100 text-zinc-950 text-sm font-medium rounded hover:bg-white transition-all overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        <span>View Architecture</span>
                        <Icon icon="lucide:arrow-right" width="16" className="transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <a href="/#projects" className="group inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-zinc-800 text-zinc-300 text-sm font-medium rounded hover:bg-zinc-900 transition-all">
                        <span>Explore Systems</span>
                    </a>
                </div>

            </div>
            
            {/* Tech Stack Marquee */}
            <div className="absolute bottom-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-4 overflow-hidden marquee-container">
                <div className="flex gap-16 whitespace-nowrap animate-scroll items-center">
                    {/* Set 1 */}
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:rust" /> Rust</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:linux" /> Linux Kernel</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:docker" /> Docker</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:kubernetes" /> Kubernetes</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:apachekafka" /> Kafka</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:webassembly" /> WASM</div>
                    
                    {/* Set 2 (Duplicate for smooth scroll) */}
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:rust" /> Rust</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:linux" /> Linux Kernel</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:docker" /> Docker</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:kubernetes" /> Kubernetes</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:apachekafka" /> Kafka</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:webassembly" /> WASM</div>

                     {/* Set 3 (Duplicate for safety on wide screens) */}
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:rust" /> Rust</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:linux" /> Linux Kernel</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:docker" /> Docker</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:kubernetes" /> Kubernetes</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:apachekafka" /> Kafka</div>
                    <div className="flex items-center gap-2 text-zinc-600 font-mono text-xs uppercase"><Icon icon="simple-icons:webassembly" /> WASM</div>
                </div>
            </div>
    </section>
  );
}
