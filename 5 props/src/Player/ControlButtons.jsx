import React from "react";
import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ReplayIcon from "@mui/icons-material/Replay";

const ControlButtons = ({ onPlay, onPause, onRestart }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <IconButton
        color="primary"
        onClick={onPlay}
        aria-label="play"
      >
        <PlayArrowIcon />
      </IconButton>
      <IconButton
        color="secondary"
        onClick={onPause}
        aria-label="pause"
      >
        <PauseIcon />
      </IconButton>
      <IconButton
        color="info"
        onClick={onRestart}
        aria-label="restart"
      >
        <ReplayIcon />
      </IconButton>
    </Box>
  );
};

export default ControlButtons;
