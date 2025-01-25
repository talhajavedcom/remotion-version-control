// components/TextItem.jsx

import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Button,
  Collapse,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TextItem = ({ item, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showStyles, setShowStyles] = useState(false);
  const [itemData, setItemData] = useState(item);

  const handleStyleChange = (property) => {
    const updatedData = {
      ...itemData,
      styles: {
        ...itemData.styles,
        [property]: !itemData.styles[property]
      }
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

  const getAppliedStyles = () => {
    const styles = {};
    if (itemData.styles.bold) styles.fontWeight = 'bold';
    if (itemData.styles.italic) styles.fontStyle = 'italic';
    if (itemData.styles.underline) styles.textDecoration = 'underline';
    if (itemData.styles.highlight) styles.backgroundColor = '#fff3cd';
    return styles;
  };

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
          >
            {itemData.text}
          </Typography>
        )}

        <IconButton size="small" onClick={() => setIsEditing(!isEditing)}>
          <EditIcon />
        </IconButton>

        <IconButton size="small" onClick={() => onDelete(item.id)}>
          <DeleteIcon />
        </IconButton>

        <Button
          size="small"
          onClick={() => setShowStyles(!showStyles)}
          variant="outlined"
        >
          {showStyles ? 'Hide Styles' : 'Show Styles'}
        </Button>
      </Box>

      <Collapse in={showStyles}>
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={itemData.styles.bold}
                onChange={() => handleStyleChange('bold')}
                size="small"
              />
            }
            label="Bold"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={itemData.styles.italic}
                onChange={() => handleStyleChange('italic')}
                size="small"
              />
            }
            label="Italic"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={itemData.styles.underline}
                onChange={() => handleStyleChange('underline')}
                size="small"
              />
            }
            label="Highlight"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={itemData.styles.animate}
                onChange={() => handleStyleChange('animate')}
                size="small"
              />
            }
            label="Animate"
          />
        </Box>
      </Collapse>
    </Paper>
  );
};

export default TextItem;