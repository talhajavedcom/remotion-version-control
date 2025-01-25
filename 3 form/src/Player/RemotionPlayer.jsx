import { Stack } from "@mui/material";
import { Player } from "@remotion/player";
import GenerateVideo from "./GenerateVideo";
import ControlButtons from "./ControlButtons";
import { useRef } from "react";

const RemotionPlayer = ({ jsonData }) => {
  const playerRef = useRef(null);
  const handlePlay = () => playerRef.current?.play();
  const handlePause = () => playerRef.current?.pause();
  const handleRestart = () => playerRef.current?.seekTo(0);

  return (
    <Stack sx={{ height: '90%' }}>
      <Player
        ref={playerRef}
        component={GenerateVideo}
        inputProps={{ jsonData }} // Pass jsonData here
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
