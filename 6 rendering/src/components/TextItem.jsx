import { useState } from 'react';
import {
  Box, TextField, IconButton, Typography, Paper, Chip, Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDrop } from 'react-dnd';
import { SortableElement } from 'react-sortable-hoc';

const TextItem = SortableElement(({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [itemData, setItemData] = useState(item);

  const [{ isOver }, drop] = useDrop({
    accept: ['STYLE', 'ANIMATION'],
    drop: (droppedItem) => {
      handleStyleOrAnimationDrop(droppedItem);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });

  const handleStyleOrAnimationDrop = (droppedItem) => {
    const updatedData = {
      ...itemData,
      styles: {
        ...itemData.styles,
        [droppedItem.type]: true
      },
      appliedEffects: [
        ...(itemData.appliedEffects || []),
        {
          type: droppedItem.type,
          text: droppedItem.text
        }
      ]
    };
    setItemData(updatedData);
    onUpdate(updatedData);
  };

  const handleTextChange = (e) => {
    const updatedData = {
      ...itemData,
      text: e.target.value
    };
    setItemData(updatedData);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(itemData);
  };

  const handleEffectDelete = (effectType) => {
    const updatedData = {
      ...itemData,
      styles: {
        ...itemData.styles,
        [effectType]: false
      },
      appliedEffects: itemData.appliedEffects.filter(effect => effect.type !== effectType)
    };
    setItemData(updatedData);
    onUpdate(updatedData);
  };


  return (
    <Paper 
      ref={drop} 
      elevation={2} 
      sx={{ 
        mx: 1, 
        p: 2,
        backgroundColor: isOver ? 'rgba(0, 0, 0, 0.05)' : 'white'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
        {isEditing ? (
  <TextField
    value={itemData.text}
    onChange={handleTextChange}
    onBlur={handleBlur}
    size="small"
    fullWidth
    autoFocus
    multiline // Allow multi-line text input
    minRows={3} // Minimum number of rows when multiline is enabled
    sx={{
      wordBreak: 'break-word', // Ensure long words break correctly
      whiteSpace: 'pre-wrap', // Ensure new lines from the user input appear as they are typed
    }}
  />
) : (
  <Typography
    variant={item.type === 'heading' ? 'h6' : 'body1'}
    sx={{
      wordBreak: 'break-word', // Prevent overflow and wrap long words
      overflow: 'hidden', // Hide overflow text
      textOverflow: 'ellipsis', // Add ellipsis when the text overflows
      whiteSpace: 'normal', // Ensure text wraps correctly
      maxWidth: '100%', // Prevent exceeding container width
    }}
    onClick={() => setIsEditing(true)}
  >
    {itemData.text}
  </Typography>
)}

        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="small" onClick={() => onDelete(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>

      {itemData.appliedEffects && itemData.appliedEffects.length > 0 && (
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          {itemData.appliedEffects.map((effect, index) => (
            <Chip
              key={index}
              label={effect.text}
              onDelete={() => handleEffectDelete(effect.type)}
              size="small"
            />
          ))}
        </Stack>
      )}
    </Paper>
  );
});

export default TextItem;