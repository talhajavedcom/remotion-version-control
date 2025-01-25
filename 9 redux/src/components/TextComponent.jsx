import { Box, Paper } from '@mui/material';
import { useDrop } from 'react-dnd';
import { SortableContainer } from 'react-sortable-hoc';
import TextItem from './TextItem';

const SortableList = SortableContainer(({ items, onDelete, onUpdate }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minHeight: '200px' }}>
    {items.map((item, index) => (
      <TextItem key={item.id} index={index} item={item} onDelete={onDelete} onUpdate={onUpdate} />
    ))}
  </Box>
));

const TextComponent = ({ items, onDrop, onDelete, onUpdate, onSortEnd }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ['TEXT_ITEM'],
    drop: (item) => {
      if (item.type === 'heading' || item.type === 'paragraph') {
        onDrop(item);
      }
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <Box sx={{ width: '55%' }}>
      <Paper
        ref={drop}
        elevation={3}
        sx={{
          p: 1,
          height: '85vh',
          bgcolor: isOver ? 'action.hover' : 'background.paper',
          transition: 'background-color 0.2s ease',
          overflowY: 'auto',
        }}
      >
        <SortableList items={items} onDelete={onDelete} onUpdate={onUpdate} onSortEnd={onSortEnd} useDragHandle={false} distance={1} />
      </Paper>
    </Box>
  );
};

export default TextComponent;
