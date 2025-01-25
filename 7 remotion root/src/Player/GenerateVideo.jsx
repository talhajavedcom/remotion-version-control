import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import Animation from './Animation';

const GenerateVideo = ({ jsonData }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#f0f0f0", display: 'flex', flexDirection: 'column' }}>
      {jsonData.canvasItems.map((item, index) => {
        const style = {
          fontSize: item.styles?.fontSize || '16px',
          color: '#333',
          // position: Absolute, but we'll use flex for vertical stacking
        };

        return (
          <div
            key={item.id}
            style={{
              marginBottom: '30px',  // Space between items
              position: 'relative',  // Allow absolute positioning for each Animation
            }}
          >
            <Animation
              item={item}
              style={style}
              frame={frame}
            />
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

export default GenerateVideo;
