import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import React from 'react';

const Header = () => {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Box sx={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }} >
                <Toolbar>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
                        <IconButton edge="start">
                            <MenuIcon />
                        </IconButton>
                        <Typography>Remotion</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">

                        <Button
                            variant="contained"
                            color="primary"

                        >
                            Render video
                        </Button>
                        <IconButton>
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Box>
        </AppBar>
    );
};

export default Header;