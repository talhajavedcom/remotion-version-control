import React from 'react';
import { AbsoluteFill } from 'remotion'; // AbsoluteFill for full screen rendering

const Animation = ({ item, style, animations, frame }) => {
    const { text } = item;

    // Function to apply animations (highlight, circle, cross)
    const applyAnimation = () => {
        let newStyle = { ...style };

        // Loop through the animations and apply them based on the frame
        animations.forEach((animation) => {
            if (frame >= animation.startFrame && frame <= animation.endFrame) {
                if (animation.type === 'highlight') {
                    newStyle = { ...newStyle, backgroundColor: '#FFD700' }; // Highlight background
                } else if (animation.type === 'circle') {
                    newStyle = { ...newStyle, borderRadius: '50%', border: '2px solid #FF6347' }; // Circle
                } else if (animation.type === 'cross') {
                    newStyle = { ...newStyle, textDecoration: 'line-through' }; // Cross-out (strike-through)
                }
            }
        });

        return newStyle;
    };

    const animatedStyle = applyAnimation();

    return (
        <AbsoluteFill style={{ left: animatedStyle.position.x, top: animatedStyle.position.y }}>
            <div
                style={{
                    ...animatedStyle,
                    color: animatedStyle.color,
                    fontSize: animatedStyle.fontSize,
                    fontWeight: animatedStyle.fontWeight,
                    fontStyle: animatedStyle.fontStyle,
                    textDecoration: animatedStyle.textDecoration,
                    backgroundColor: animatedStyle.backgroundColor,
                    borderRadius: animatedStyle.borderRadius,
                    border: animatedStyle.border,
                }}
            >
                {text}
            </div>
        </AbsoluteFill>
    );
};

export default Animation;
