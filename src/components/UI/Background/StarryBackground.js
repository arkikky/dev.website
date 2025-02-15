'use client';
import React, { useRef, useEffect, useState } from 'react';

const StarryBackground = ({ starCount = 100, color = 'white' }) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 500 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
    }));

    function drawStar(x, y, size, opacity) {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color === 'white' ? '255,255,255' : '255,223,186'}, ${opacity})`;
      ctx.fill();
    }

    function drawStars() {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      stars.forEach((star) => {
        drawStar(star.x, star.y, star.size, star.opacity);
      });
    }
    drawStars();
  }, [dimensions, starCount, color]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-x-0 inset-y-0 -z-px select-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default StarryBackground;
