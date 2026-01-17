import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Icon } from '@iconify/react';

export default function Projects() {
    const canvasContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // --- THREE.JS R3KON ANIMATION ---
        if (!canvasContainerRef.current) return;
        
        const container = canvasContainerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, container.offsetWidth / container.offsetHeight, 0.1, 100);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Abstract Geometry (Icosahedron wireframe)
        const geometry = new THREE.IcosahedronGeometry(1.5, 1);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x444444, 
            wireframe: true,
            transparent: true,
            opacity: 0.2
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Inner geometric core
        const coreGeo = new THREE.BoxGeometry(1.0, 1.0, 1.0);
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0x10b981, // Emeraldish
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        const core = new THREE.Mesh(coreGeo, coreMat);
        scene.add(core);

        // Animate
        let animationId: number;
        function animate() {
            animationId = requestAnimationFrame(animate);
            sphere.rotation.x += 0.001;
            sphere.rotation.y += 0.002;
            core.rotation.x -= 0.002;
            core.rotation.y -= 0.004;
            renderer.render(scene, camera);
        }
        animate();
        
        // Resize handler for this specific container
        const handleResize = () => {
             if (!container) return;
            const width = container.offsetWidth;
            const height = container.offsetHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
             window.removeEventListener('resize', handleResize);
             window.cancelAnimationFrame(animationId);
             geometry.dispose();
             material.dispose();
             renderer.dispose();
             if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
             }
        };

    }, []);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <div className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-mono text-emerald-500">/// PORTFOLIO</span>
                    <div className="h-[1px] w-8 bg-zinc-800"></div>
                </div>
                <p className="text-xl text-zinc-300 font-light max-w-2xl">
                    Our work spans multiple domains, from intelligent analysis tools to foundational systems and platforms.
                </p>
            </div>

            {/* Featured Project: R3KON */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 mb-2 px-2 py-1 rounded bg-zinc-900 border border-zinc-800">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide">Applied Intelligence</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight mb-2">R3KON</h2>
                    <p className="text-lg text-zinc-400 font-light mb-8">Security Intelligence & Assessment Assistant</p>

                    <p className="text-sm md:text-base text-zinc-500 leading-relaxed mb-10 max-w-lg">
                        An offline-first, privacy-conscious AI system that helps engineers understand and improve cybersecurity posture through intelligent analysis.
                    </p>

                    <ul className="space-y-4 font-mono text-xs md:text-sm text-zinc-400">
                        <li className="flex items-center gap-3 r3kon-list-item opacity-0 transform translate-x-4">
                            <Icon icon="lucide:terminal" className="text-emerald-500/80" />
                            Code security analysis
                        </li>
                        <li className="flex items-center gap-3 r3kon-list-item opacity-0 transform translate-x-4">
                            <Icon icon="lucide:shield-check" className="text-emerald-500/80" />
                            API surface assessment
                        </li>
                        <li className="flex items-center gap-3 r3kon-list-item opacity-0 transform translate-x-4">
                            <Icon icon="lucide:cpu" className="text-emerald-500/80" />
                            Local inference (No data egress)
                        </li>
                    </ul>

                    <div className="mt-10 flex gap-6">
                        <button className="text-xs font-mono text-zinc-100 border-b border-zinc-700 pb-1 hover:border-zinc-100 transition-colors">
                            VIEW PROJECT -&gt;
                        </button>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative h-[400px] w-full flex items-center justify-center border border-zinc-800 bg-zinc-950 rounded-lg overflow-hidden">
                    <div ref={canvasContainerRef} className="absolute inset-0 z-0 opacity-80"></div>
                    {/* Terminal Overlay */}
                    <div className="absolute z-10 w-80 glass-panel rounded border border-zinc-700/50 p-4 font-mono text-[10px] text-zinc-400 backdrop-blur-xl">
                        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                            </div>
                            <span className="text-zinc-600">r3kon-cli</span>
                        </div>
                        <div className="space-y-1">
                            <div><span className="text-emerald-500">➜</span> <span className="text-zinc-200">~</span> r3kon init --secure</div>
                            <div className="text-zinc-500 pl-4">Loading neural weights [OK]</div>
                            <div className="text-zinc-500 pl-4">Handshake established.</div>
                            <div><span className="text-emerald-500">➜</span> <span className="text-zinc-200">~</span> <span className="animate-blink">_</span></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Project 2 */}
                <div className="group border-t border-zinc-800 pt-6 hover:border-emerald-500/50 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <Icon icon="lucide:box" width="24" className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wide">Systems Platform</span>
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200 mb-2">Aether Core</h3>
                    <p className="text-sm text-zinc-500">Foundational OS components designed for rigorous industrial environments.</p>
                </div>

                {/* Project 3 */}
                <div className="group border-t border-zinc-800 pt-6 hover:border-emerald-500/50 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <Icon icon="lucide:network" width="24" className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wide">Distributed Infra</span>
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200 mb-2">SignalMesh</h3>
                    <p className="text-sm text-zinc-500">High-throughput peer-to-peer communication protocol for disconnected nodes.</p>
                </div>

                {/* Project 4 */}
                <div className="group border-t border-zinc-800 pt-6 hover:border-emerald-500/50 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <Icon icon="lucide:lock" width="24" className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wide">Secure Computing</span>
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200 mb-2">VaultEdge</h3>
                    <p className="text-sm text-zinc-500">Hardware-enforced enclave management for sensitive data processing.</p>
                </div>
            </div>

        </div>
    </section>
  );
}
