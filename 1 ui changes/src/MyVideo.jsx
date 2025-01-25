import { AbsoluteFill, useCurrentFrame } from "remotion";
import MCQAnimation from "./MCQAnimation";
import { mcqData } from "./Constants";

const MyVideo = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#f0f0f0" }}>
      {mcqData.mcqs.map((mcq, index) => (
        <MCQAnimation key={index} mcq={mcq} frame={frame} />
      ))}
    </AbsoluteFill>
  );
};

export default MyVideo;