import React from 'react';
import {
  Box,
  Paper,
  Typography,
} from '@mui/material';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ type, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TEXT_ITEM',
    item: { type, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: '8px',
        margin: '8px',
        backgroundColor: '#f0f0f0',
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
        border: '1px solid #ddd',
        borderRadius: '4px'
      }}
    >
      {text}
    </div>
  );
};

const ToolboxComponent = () => {
  return (
    <Box sx={{ width: '30%' }}>
      <Paper elevation={3} sx={{ p: 1, height: "95vh" }}>
        <Typography variant="h6" gutterBottom>
          Tools
        </Typography>
        <DraggableItem type="heading" text="Heading" />
        <DraggableItem type="subheading" text="Sub Heading" />
      </Paper>
    </Box>
  );
};

export default ToolboxComponent;