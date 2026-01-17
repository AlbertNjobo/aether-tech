import { useEffect, useState } from 'react';

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-screen"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Outer glow */}
      <div 
        className="absolute rounded-full bg-blue-400/20 blur-3xl"
        style={{
          width: 300,
          height: 300,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Inner glow */}
      <div 
        className="absolute rounded-full bg-blue-500/30 blur-xl"
        style={{
          width: 100,
          height: 100,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Core */}
      <div 
        className="absolute rounded-full bg-white/50 blur-sm"
        style={{
          width: 10,
          height: 10,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
