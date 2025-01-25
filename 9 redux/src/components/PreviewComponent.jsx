import { Box, Paper } from '@mui/material';
import RemotionPlayer from '../Player/RemotionPlayer';
import { useSelector } from 'react-redux';

const PreviewComponent = () => {
  const jsonData = useSelector(state => state.jsonData);

  return (
    <Box sx={{ width: '20%' }}>
      <Paper elevation={3} sx={{ p: 1, height: '85vh' }}>
        <RemotionPlayer jsonData={jsonData} />
      </Paper>
    </Box>
  );
};

export default PreviewComponent;
