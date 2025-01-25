import { AbsoluteFill, useCurrentFrame } from 'remotion';
import Animation from './Animation'; // Import the Animation component

const GenerateVideo = ({ jsonData }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#f0f0f0" }}>
      {jsonData.canvasItems.map((item, index) => {
        // Destructure item for better readability
        const { id, styles } = item;

        // Define default styles
        const style = {
          fontSize: styles.fontSize,
          fontWeight: styles.bold ? 'bold' : 'normal',
          fontStyle: styles.italic ? 'italic' : 'normal',
          textDecoration: styles.underline ? 'underline' : 'none',
          color: styles.highlight ? '#FFD700' : '#333', // Highlight color if true
          position: { x: 100, y: 50 + index * 60 }, // Adjust y-position for each item
        };

        // Handle animations (highlight, circle, etc.)
        const animations = styles.animate ? [
          { type: 'highlight', startFrame: 0, endFrame: 30 },
        ] : [];

        return (
          <Animation
            key={id}
            item={item}
            style={style}
            animations={animations}
            frame={frame}
          />
        );
      })}
    </AbsoluteFill>
  );
};

export default GenerateVideo;
