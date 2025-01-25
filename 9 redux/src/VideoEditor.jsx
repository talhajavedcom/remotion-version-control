import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, updateItem, updateCanvasItems } from './redux/slice/jsonDataSlice';
import { Box } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TextComponent from './components/TextComponent';
import PreviewComponent from './components/PreviewComponent';
import ToolboxComponent from './components/ToolboxComponent';
import { arrayMove } from 'react-sortable-hoc';

const VideoEditor = () => {
  const dispatch = useDispatch();
  const canvasItems = useSelector(state => state.jsonData.canvasItems);

  const handleDrop = (item) => {
    const newItem = {
      id: (canvasItems.length + 1).toString(),
      type: item.type,
      text: item.text,
      styles: {
        bold: item.type === 'heading',
        fontSize: item.type === 'heading' ? '24px' : '16px',
      },
    };

    dispatch(addItem(newItem));
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  const handleUpdateItem = (updatedItem) => {
    dispatch(updateItem(updatedItem));
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    const updatedItems = arrayMove(canvasItems, oldIndex, newIndex);
    dispatch(updateCanvasItems(updatedItems));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', bgcolor: 'grey.100', p: 1, gap: 1 }}>
        <ToolboxComponent />
        <TextComponent
          items={canvasItems}
          onDrop={handleDrop}
          onDelete={handleDeleteItem}
          onUpdate={handleUpdateItem}
          onSortEnd={handleSortEnd}
        />
        <PreviewComponent jsonData={{ canvasItems }} />
      </Box>
    </DndProvider>
  );
};

export default VideoEditor;
