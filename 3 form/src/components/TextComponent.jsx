// components/TextComponent.jsx
import React from 'react';
import {
  Box,
  Paper,
  Typography
} from '@mui/material';
import { useDrop } from 'react-dnd';
import TextItem from './TextItem';

const TextComponent = ({ items, onDrop, onDelete, onUpdate }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'TEXT_ITEM',
    drop: (item) => {
      onDrop(item);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <Box sx={{ width: '50%' }}>
      <Paper
        ref={drop}
        elevation={3}
        sx={{
          p: 1,
          height: '95vh',
          bgcolor: isOver ? 'action.hover' : 'background.paper',
          transition: 'background-color 0.2s ease'
        }}
      >
        <Typography variant="h6" gutterBottom>
          Canvas
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          minHeight: '200px' // Ensure there's always drop space
        }}>
          {items && items.map((item) => (
            <TextItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default TextComponent;