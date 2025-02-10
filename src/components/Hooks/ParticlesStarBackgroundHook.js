'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';

const particlesStarBackgroundHook = (
  starCount = 100,
  containerWidth,
  containerHeight
) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const starsRef = useRef([]);
  const [dimensions, setDimensions] = useState({
    width: containerWidth || 0,
    height: containerHeight || 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const newWidth = containerWidth || containerRef.current.clientWidth;
        const newHeight = containerHeight || containerRef.current.clientHeight;
        if (newWidth !== dimensions.width || newHeight !== dimensions.height) {
          setDimensions({
            width: newWidth,
            height: newHeight,
          });
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [containerWidth, containerHeight, dimensions.height]); // Added dimensions.height to dependencies

  const createStars = useCallback(() => {
    starsRef.current = [];
    for (let i = 0; i < starCount; i++) {
      starsRef.current.push({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 1 + 1,
        opacity: Math.random() * 0.4 + 0.4,
      });
    }
  }, [starCount]);

  const drawStars = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    starsRef.current.forEach((star) => {
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.beginPath();
      ctx.arc(
        star.x * canvas.width,
        star.y * canvas.height,
        star.size,
        0,
        2 * Math.PI
      );
      ctx.fill();
    });
  }, []);

  useEffect(() => {
    createStars();

    let animationFrameId;
    const animate = () => {
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [createStars, drawStars]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = dimensions.width;
      canvasRef.current.height = dimensions.height;
    }
  }, [dimensions]);

  return { canvasRef, containerRef };
};

export default particlesStarBackgroundHook;
