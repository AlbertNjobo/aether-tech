import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import TeamGrid from './TeamGrid';

// Simple deterministic random function (to satisfy purity checks)
const seededRandom = (s: number) => {
    let mask = 0xffffffff;
    let m_w = (123456789 + s) & mask;
    let m_z = (987654321 - s) & mask;
    return () => {
      m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
      m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
      let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
      result /= 4294967296;
      return result;
    };
};

function Particles() {
  const count = 5000;
  const mesh = useRef<THREE.Points>(null!);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const rng = seededRandom(42); // Fixed seed
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (rng() - 0.5) * 40;
      positions[i * 3 + 1] = (rng() - 0.5) * 40;
      positions[i * 3 + 2] = (rng() - 0.5) * 40;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00F0FF"
        sizeAttenuation
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const CyberObject = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const scroll = useScroll();
    
    useFrame((_state, delta) => {
        // Rotate constantly
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
        
        // Move based on scroll
        // The offset is 0 at top, 1 at bottom
        const offset = scroll.offset; 
        
        // Move camera or object? Let's move object for simplicity 
        // Initial pos [0,0,-2]. 
        // We want it to move away or to the side as we scroll to the team section
        
        // Example: Move right and fade out/scale up
        meshRef.current.position.x = offset * 5; 
        meshRef.current.scale.setScalar(1 + offset * 2);
    })

    return (
       <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} position={[0,0,-2]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
    )
}

const SceneContent = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Particles />
            <CyberObject />
            
            {/* Post Processing */}
            <EffectComposer>
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={1.5} />
            </EffectComposer>
        </>
    )
}

const CanvasContainer = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#050B14]">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ScrollControls pages={3} damping={0.2}>
            
            <SceneContent />
            
            <Scroll html style={{ width: '100%' }}>
                {/* 
                  This is the HTML content that scrolls WITH the 3D scroll controls.
                  We need to lay it out based on 'pages' (viewport heights).
                  Page 0: Hero
                  Page 1: Transition/Info
                  Page 2: Team Grid
                */}
                
                {/* Hero Section - Page 0 */}
                <section className="h-screen w-full flex flex-col justify-center items-center text-center px-4 pointer-events-none">
                     <div className="space-y-6 pointer-events-auto">
                        <SystemStatus />
                         <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 glow-text">
                          R3KON GPT
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono leading-relaxed">
                          Advanced Artificial Intelligence & Cybersecurity Protocol.
                        </p>
                    </div>
                </section>

                {/* Team Section - Page 1.5 - 3 */}
                <section className="w-full relative" style={{ top: '100vh' }}>
                     <div className="container mx-auto px-6 mb-12 border-l-2 border-[#00F0FF] pl-6 ml-4 md:ml-20">
                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide text-white">
                        Active Protocols
                        </h2>
                    </div>
                    <TeamGrid />
                </section>
                
            </Scroll>
            
        </ScrollControls>
      </Canvas>
    </div>
  );
};

const SystemStatus = () => (
    <div className="flex flex-col items-center gap-2 mb-8">
        <div className="text-[#00FF94] font-mono tracking-widest text-sm md:text-base uppercase flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00FF94] rounded-full animate-pulse" />
            System Online
        </div>
    </div>
)


export default CanvasContainer;
