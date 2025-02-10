'use client';
import { useEffect, useRef } from 'react';

const ShootingStarsHook = (canvasRef, interval = 5000, dimensions) => {
  const shootingStarsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastShootingStarTime = 0;

    const createShootingStar = () => {
      const now = Date.now();
      if (now - lastShootingStarTime > interval) {
        shootingStarsRef.current.push({
          x: Math.random() * dimensions.width,
          y: 0,
          length: Math.random() * 120 + 50,
          speed: Math.random() * 16 + 1,
          opacity: 1,
        });
        lastShootingStarTime = now;
      }
    };

    const drawShootingStars = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      shootingStarsRef.current.forEach((star, index) => {
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x + star.length, star.y + star.length);
        ctx.stroke();

        star.x += star.speed;
        star.y += star.speed;
        star.opacity -= 0.01;

        if (star.opacity <= 0 || star.y > dimensions.height) {
          shootingStarsRef.current.splice(index, 1);
        }
      });
    };

    const animate = () => {
      createShootingStar();
      drawShootingStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef, interval, dimensions]);
};

export default ShootingStarsHook;
