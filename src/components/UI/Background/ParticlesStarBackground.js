'use client';
import { useRef } from 'react';
import hookParticlesStarBackground from '@components/Hooks/ParticlesStarBackgroundHook';

const ParticlesStarBackground = ({
  countParticlesStar = 90,
  isClassName = 'pointer-events-none absolute inset-x-0 inset-y-0 -z-px select-none bg-transparent',
  width,
  height,
}) => {
  const containerRef = useRef(null);
  const canvasRef = hookParticlesStarBackground(
    countParticlesStar,
    width,
    height
  );

  return (
    <div ref={containerRef} className={isClassName}>
      <canvas ref={canvasRef} className="absolute inset-x-0 inset-y-0 -z-px" />
    </div>
  );
};

export default ParticlesStarBackground;
