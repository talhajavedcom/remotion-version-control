import { AppBar, Toolbar, Typography, IconButton, Stack, Paper, Button, Box } from '@mui/material';
import { Menu as MenuIcon, Undo as UndoIcon, Redo as RedoIcon, TextFields as TextIcon, AddCircle as AddCircleIcon } from '@mui/icons-material';
import RemotionPlayer from './RemotionPlayer';
import Slides from './Slides';

const VideoEditor = () => {

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <AppBar sx={{
        background: 'linear-gradient(45deg, #01c3cd 30%, #7831e7 90%)',
      }} position="static" color="default" elevation={1}>
        <Toolbar>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
            <IconButton edge="start">
              <MenuIcon />
            </IconButton>
            <Typography>Remotion</Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton>
              <UndoIcon />
            </IconButton>
            <IconButton>
              <RedoIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: 'linear-gradient(45deg, #01c3cd 30%,  #01c3cd 90%)',
              }}
            >
              Download video
            </Button>
            <IconButton>
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Layout */}
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <Stack
          sx={{
            width: '5rem',
            bgcolor: 'background.paper',
            borderRight: 1,
            borderColor: 'divider',
            py: 3
          }}
          spacing={3}
          alignItems="center"
        >
          <Stack spacing={3} alignItems="center">
            <IconButton>
              <TextIcon />
            </IconButton>
            <IconButton>
              <AddCircleIcon />
            </IconButton>
          </Stack>
        </Stack>
        {/* canvas sections */}
        <Box sx={{
          flexGrow: 1,
          bgcolor: 'grey.100',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            gap: '0.5rem',
            p: '0.5rem'
          }}>
            {/* Left */}
            <Box sx={{
              width: '20%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <Paper
                elevation={3}
                sx={{
                  width: '100%',
                  height: '100%',
                  bgcolor: 'background.paper'
                }}
              >
                add text here
              </Paper>
            </Box>

            {/* Middle */}
            <Box sx={{
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <Paper
                elevation={3}
                sx={{
                  width: '100%',
                  height: '100%',
                  bgcolor: 'background.paper'
                }}
              >
                use style and properties for text
              </Paper>
            </Box>

            {/* Right*/}
            <Box sx={{
              width: '20%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <Paper
                elevation={3}
                sx={{
                  width: '100%',
                  height: '100%',
                  bgcolor: 'background.paper',
                  overflow: 'hidden'
                }}
              >
                <RemotionPlayer />
              </Paper>
            </Box>
          </Box>
          {/* Slides */}
          <Slides />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoEditor;