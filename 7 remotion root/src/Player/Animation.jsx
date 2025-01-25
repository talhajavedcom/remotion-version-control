// Animation.jsx
import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { Box } from '@mui/material';

const Animation = ({ item, style }) => {
  const frame = useCurrentFrame();
  const { text, styles = {} } = item;

  const getAnimatedStyle = () => {
    let animatedStyle = { ...style };

    // Base position and padding
    animatedStyle = {
      ...animatedStyle,
      position: 'relative',
      padding: '16px',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out',
    };

    // Apply text styles
    if (styles.bold) animatedStyle.fontWeight = 'bold';
    if (styles.italic) animatedStyle.fontStyle = 'italic';
    if (styles.color) animatedStyle.color = styles.color;

    // Handle highlight animation
    if (styles.highlight) {
      const highlightProgress = interpolate(
        frame,
        [30, 120], // Start at 1s (30fps), end at 4s
        [100, 0],
        { extrapolateRight: 'clamp' }
      );
      animatedStyle.background = ' #FFD700';
      animatedStyle.backgroundSize = '200% 100%';
      animatedStyle.backgroundPosition = `${highlightProgress}% 0`;
    }

    // Handle stroke animation
    if (styles.stroke) {
      const strokeProgress = interpolate(
        frame,
        [0, 30],
        [0, 1],
        { extrapolateRight: 'clamp' }
      );
      if (strokeProgress === 1) {
        animatedStyle.textDecoration = 'line-through';
      }
    }

    // Handle fade animation
    if (styles.fade) {
      const opacity = interpolate(
        frame,
        [0, 30],
        [0, 1],
        { extrapolateRight: 'clamp' }
      );
      animatedStyle.opacity = opacity;
    }

    // Handle zoom animation
    if (styles.zoom) {
      const scale = interpolate(
        frame,
        [0, 30],
        [0.5, 1], // Slight zoom effect
        { extrapolateRight: 'clamp' }
      );
      animatedStyle.transform = `scale(${scale})`;
    }

    // Handle slide animation
    if (styles.slide) {
      const slideX = interpolate(
        frame,
        [0, 30],
        [-100, 0],
        { extrapolateRight: 'clamp' }
      );
      animatedStyle.transform = `translateX(${slideX}%)`;
    }

    return animatedStyle;
  };

  const finalStyle = getAnimatedStyle();



  return (
    <AbsoluteFill>
      <Box
        sx={{
          height: '100%',
          padding: '24px',
        }}
      >
        <Box
          sx={{
            width: '80%',
            padding: '16px',
          }}
          style={finalStyle}
        >
          {text}
        </Box>
      </Box>
    </AbsoluteFill>
  );
};

export default Animation;
