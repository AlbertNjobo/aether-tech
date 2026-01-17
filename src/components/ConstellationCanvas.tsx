import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Generate points outside component to avoid purity issues
const generateParticles = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
  }
  return positions;
};

const RotatingParticles = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => generateParticles(300), []);

  useFrame((_state, delta) => {
    if (ref.current) {
      // Overall rotation
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 45;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#2563eb" // Blue-600
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

export const ConstellationCanvas = () => {
  return (
    <div className="absolute inset-0 z-0 bg-white">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        {/* Ambient Stars - Darker for contrast on white */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Blue Tech Nodes */}
        <RotatingParticles />

        {/* White Fog for depth blending */}
        <fog attach="fog" args={['#ffffff', 10, 40]} />
      </Canvas>
    </div>
  );
};
