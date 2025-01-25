import { useCallback } from "react";

const MCQAnimation = ({ mcq, frame }) => {
  const getAnimationStyle = useCallback((animations) => {
    for (const anim of animations) {
      if (frame >= anim.startFrame && frame <= anim.endFrame) {
        switch (anim.type) {
          case "highlight":
            return {
              backgroundColor: "#ffeb3b",
              transition: "background-color 0.9s"
            };
          case "circle":
            return {
              border: "2px solid green",
              borderRadius: "10%",
              padding: "20px",
              transition: "all 0.3s"
            };
          case "cross":
            return {
              border: "5px solid red",
              textDecoration: "line-through",
              transition: "all 0.3s"
            };
          default:
            return {};
        }
      }
    }
    return {};
  }, [frame]);

  return (
    <>
      <div
        style={{
          ...mcq.question.style,
          position: "absolute",
          left: mcq.question.style.position.x,
          top: mcq.question.style.position.y,
          ...getAnimationStyle(mcq.question.animations)
        }}
      >
        {mcq.question.text}
      </div>

      {mcq.options.map((option, index) => (
        <div
          key={index}
          style={{
            ...option.style,
            position: "absolute",
            left: option.style.position.x,
            top: option.style.position.y + (index * 50),
            ...getAnimationStyle(option.animations)
          }}
        >
          {option.text}
        </div>
      ))}
    </>
  );
};

export default MCQAnimation;