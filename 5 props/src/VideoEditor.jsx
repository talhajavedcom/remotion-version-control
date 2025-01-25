import { useState } from 'react';
import { Box } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TextComponent from './components/TextComponent';
import PreviewComponent from './components/PreviewComponent';
import ToolboxComponent from './components/ToolboxComponent';
import { arrayMove } from 'react-sortable-hoc';


const VideoEditor = () => {
  const [canvasItems, setCanvasItems] = useState([]);
  const [jsonData, setJsonData] = useState({ canvasItems: [] });

  const handleDrop = (item) => {
    const newItem = {
      id: Date.now().toString(),
      type: item.type,
      text: item.text,
      styles: {
        bold: item.type === 'heading',
        italic: false,
        underline: false,
        highlight: false,
        animate: false,
        fontSize: item.type === 'heading' ? '24px' : '16px'
      }
    };

    // Correctly append the new item to existing items
    setCanvasItems(prevItems => [...prevItems, newItem]);

    // Update JSON with all items including the new one
    const updatedItems = [...canvasItems, newItem];
    updateJSON(updatedItems);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = canvasItems.filter(item => item.id !== itemId);
    setCanvasItems(updatedItems);
    updateJSON(updatedItems);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = canvasItems.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setCanvasItems(updatedItems);
    updateJSON(updatedItems);
  };

  const updateJSON = (items) => {
    setJsonData({
      canvasItems: items.map(item => ({
        id: item.id,
        type: item.type,
        text: item.text,
        styles: item.styles
      }))
    });
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    const updatedItems = arrayMove(canvasItems, oldIndex, newIndex);
    setCanvasItems(updatedItems);
    updateJSON(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{
        display: 'flex',
        justifyContent: "center",
        minHeight: '100vh',
        bgcolor: 'grey.100',
        p: 1,
        gap: 1
      }}>
        <ToolboxComponent />

        <TextComponent
          items={canvasItems}
          onDrop={handleDrop}
          onDelete={handleDeleteItem}
          onUpdate={handleUpdateItem}
          onSortEnd={handleSortEnd}
        />

        <PreviewComponent jsonData={jsonData} />
      </Box>
    </DndProvider>
  );
};

export default VideoEditor;