'use client';
import React, { useState, useEffect } from 'react';

const StarryBlinkBackground = ({
  starCount = 100,
  width = '100%',
  height = '100%',
}) => {
  const [isStars, setStars] = useState([]);
  // @init(Star)
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < starCount; i++) {
        newStars?.push({
          id: i,
          size: Math.random() * 1.5 + 1.3,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          rayLength: Math.random() * 6 + 4,
          blur: Math.random() * 0.1 + 0.5,
        });
      }
      setStars(newStars);
    };
    generateStars();
    console.log('i');

    return () => {
      undefined;
    };
  }, [starCount]);

  return (
    <div
      className="absolute inset-x-0 bottom-auto top-0"
      style={{
        width,
        height,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {isStars?.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animation: `twinkle ${star.animationDuration} infinite alternate`,
            filter: `blur(${star.blur}px)`,
          }}
          className="star"
        >
          <style jsx>{`
            .star {
              background: white;
              border-radius: 50%;
              position: relative;
              box-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
            }

            .star::before,
            .star::after {
              content: '';
              position: absolute;
              background: linear-gradient(
                to right,
                transparent,
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0.6),
                rgba(255, 255, 255, 0.2),
                transparent
              );
            }

            .star::before {
              top: 50%;
              left: -${star.rayLength}px;
              right: -${star.rayLength}px;
              height: 1px;
              transform: translateY(-50%);
            }

            .star::after {
              left: 50%;
              top: -${star.rayLength}px;
              bottom: -${star.rayLength}px;
              width: 1px;
              transform: translateX(-50%);
            }

            @keyframes twinkle {
              0% {
                opacity: 0.4;
                transform: scale(0.9);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
};

export default StarryBlinkBackground;
