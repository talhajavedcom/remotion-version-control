import { Stack } from "@mui/material";
import { Player } from "@remotion/player";
import MyVideo from "./MyVideo";
import ControlButtons from "./ControlButtons";
import { useRef } from "react";
import { mcqData } from "../constant/Constants";

const RemotionPlayer = () => {
  const playerRef = useRef(null);
  const handlePlay = () => playerRef.current?.play();
  const handlePause = () => playerRef.current?.pause();
  const handleRestart = () => playerRef.current?.seekTo(0);

  return (
    <Stack sx={{ height: '100%' }}>
      <Player
        ref={playerRef}
        component={MyVideo}
        inputProps={mcqData}
        durationInFrames={120}
        fps={30}
        compositionWidth={720}
        compositionHeight={1080}
        autoPlay={false}
        controls={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
      <ControlButtons
        onPlay={handlePlay}
        onPause={handlePause}
        onRestart={handleRestart}
      />
    </Stack>
  );
};

export default RemotionPlayer;
