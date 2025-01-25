import { Paper, Stack, Typography } from '@mui/material'
import LayersIcon from '@mui/icons-material/Layers';
const Slides = () => {
    return (
        <Paper
            sx={{
                p: 2,
                borderTop: 1,
                borderColor: 'divider',
                height: '5rem'
            }}
        >
            <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <LayersIcon />
                    <Typography>Slides</Typography>
                </Stack>
                <Paper
                    variant="outlined"
                    sx={{
                        height: '2.5rem',
                        bgcolor: 'grey.50'
                    }}
                />
            </Stack>
        </Paper>
    )
}

export default Slides;