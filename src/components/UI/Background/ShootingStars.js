'use client';
import React, { useRef, useState, useEffect } from 'react';
import ShootingStarsHook from '@components/Hooks/ShootingStarsHook';

const ShootingStars = ({ interval }) => {
  const shootingStarsCanvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: '100%',
    height: '100%',
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (shootingStarsCanvasRef.current) {
        const { clientWidth, clientHeight } =
          shootingStarsCanvasRef.current.parentElement;
        shootingStarsCanvasRef.current.width = clientWidth;
        shootingStarsCanvasRef.current.height = clientHeight;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  ShootingStarsHook(shootingStarsCanvasRef, interval, dimensions);

  return (
    <div className="absolute inset-0 z-px h-full w-full">
      <canvas
        ref={shootingStarsCanvasRef}
        className="absolute inset-0 z-20"
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      />
    </div>
  );
};

export default ShootingStars;
