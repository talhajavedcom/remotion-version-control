import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { Box } from '@mui/material';

const Animation = ({ item, style }) => {
  const frame = useCurrentFrame();
  const { text, styles = {} } = item;

  const getAnimatedStyle = () => {
    let animatedStyle = { ...style };

    // Base styles for text
    animatedStyle = {
      ...animatedStyle,
      position: 'relative',
      display: 'inline-block', // For animations to wrap text only
      fontWeight: styles.bold ? 'bold' : 'normal',
      fontStyle: styles.italic ? 'italic' : 'normal',
      color: styles.color || 'black',
      lineHeight: 1.2,
      textDecoration: styles.strikeThrough ? 'line-through' :
        styles.underline ? 'underline' : 'none', // Handle strike-through and underline
    };

    // Handle fade animation
    if (styles.fade) {
      const opacity = interpolate(frame, [11, 40], [0, 1], { extrapolateRight: 'clamp' });
      animatedStyle.opacity = opacity;
    }

    // Handle zoom animation
    if (styles.zoom) {
      const scale = interpolate(frame, [0, 30], [0.9, 1], { extrapolateRight: 'clamp' });
      animatedStyle.transform = `scale(${scale})`;
    }

    // Handle slide animation
    if (styles.slide) {
      const slideX = interpolate(frame, [0, 30], [-10, 0], { extrapolateRight: 'clamp' });
      animatedStyle.transform = `translateX(${slideX}%)`;
    }

    return animatedStyle;
  };

  const highlightStyle = () => {
    if (styles.highlight) {
      const highlightProgress = interpolate(
        frame,
        [30, 60], // 2 seconds at 30 fps
        [0, 100], // Progress from 0% to 100%
        { extrapolateRight: 'clamp' }
      );
      return {
        position: 'absolute',
        bottom: 0, // Directly under the text
        left: 0,
        height: '100%',
        width: `${highlightProgress}%`,
        backgroundColor: 'yellow',
        zIndex: 0, // Behind the text
        pointerEvents: 'none',
      };
    }
    return {};
  };

  const finalStyle = getAnimatedStyle();

  return (
    <AbsoluteFill>
      <Box
        sx={{
          height: '100%',
          padding: '24px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'inline-block', // Ensures highlight wraps only around the text
            position: 'relative',
            lineHeight: 1.2, // Match text height
          }}
        >
          {/* Highlight animation */}
          {styles.highlight && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
              }}
              style={highlightStyle()}
            />
          )}

          {/* Text content */}
          <span style={finalStyle}>{text}</span>
        </Box>
      </Box>
    </AbsoluteFill>
  );
};

export default Animation;
