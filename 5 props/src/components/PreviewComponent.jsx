import { Box, Paper } from '@mui/material';
import RemotionPlayer from '../Player/RemotionPlayer';

const PreviewComponent = ({ jsonData }) => {
  return (
    <Box sx={{ width: '20%' }}>
      <Paper elevation={3} sx={{ p: 1, height: '90vh' }}>
        <RemotionPlayer jsonData={jsonData} />
      </Paper>
    </Box>
  );
};

export default PreviewComponent;
