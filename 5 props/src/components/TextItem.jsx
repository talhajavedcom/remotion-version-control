import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,

  Typography,
  Paper,
  Chip,
  Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TextItem = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [itemData, setItemData] = useState(item);

  // const handleStyleChange = (property) => {
  //   const updatedData = {
  //     ...itemData,
  //     styles: {
  //       ...itemData.styles,
  //       [property]: !itemData.styles[property]
  //     }
  //   };
  //   setItemData(updatedData);
  //   onUpdate(updatedData);
  // };

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

  const getAppliedStyles = () => {
    const styles = {
      cursor: 'pointer'
    };
    if (itemData.styles.bold) styles.fontWeight = 'bold';
    if (itemData.styles.italic) styles.fontStyle = 'italic';
    if (itemData.styles.underline) styles.textDecoration = 'underline';
    if (itemData.styles.highlight) styles.backgroundColor = '#fff3cd';
    return styles;
  };

  return (
    <Paper elevation={2} sx={{ mx: 1, p: 2 }}>
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
            />
          ) : (
            <Typography
              variant={item.type === 'heading' ? 'h6' : 'body1'}
              sx={getAppliedStyles()}
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
      <Stack direction="row" spacing={2}>
        <Chip sx={{ paddingY: "1px" }} label="Highted" />
        <Chip label="Bold" />
        <Chip label="Circle" /></Stack>
    </Paper>
  );
};

export default TextItem;