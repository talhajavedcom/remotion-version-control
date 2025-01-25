import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Paper, Typography } from '@mui/material';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AnimationIcon from '@mui/icons-material/MovieCreation';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ type, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TEXT_ITEM',
    item: { type, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: '8px',
        margin: '8px',
        backgroundColor: '#f0f0f0',
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1,
        border: '1px solid #ddd',
        borderRadius: '4px',
      }}
    >
      {text}
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '25%' }}>
      <Paper elevation={3} sx={{
        p: 1,
        height: '90vh',
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Tabs
          orientation="vertical"
          variant="standard"
          value={value}
          onChange={handleChange}
          aria-label="Toolbox Tabs"
          sx={{
            backgroundColor: '#f0f0f0',
            margin: "10px",
            border: "2 px solid",
            borderRadius: "10px",

            "& .MuiTabs-indicator": {
              display: 'none', // Hide the indicator
            },
          }}
        >
          <Tab
            icon={<FormatSizeIcon sx={{ fontSize: "40px" }} />}
            label=""
            {...a11yProps(0)}
          />
          <Tab
            icon={<TextFormatIcon sx={{ fontSize: "40px" }} />}
            label=""
            {...a11yProps(1)}
          />
          <Tab
            icon={<AnimationIcon sx={{ fontSize: "40px" }} />}
            label=""
            {...a11yProps(2)}
          />
        </Tabs>

        <Box sx={{ flexGrow: 1, p: 1 }}>
          {/* Headings Tab */}
          <TabPanel value={value} index={0}>
            <Typography variant='h4'>Heading</Typography>
            <DraggableItem type="heading" text="Heading" />
            <DraggableItem type="paragraph" text="Paragraph" />
          </TabPanel>

          {/* Text Styles Tab */}
          <TabPanel value={value} index={1}>
          <Typography variant='h4'>Styles</Typography>
            <DraggableItem type="bold" text="Bold" />
            <DraggableItem type="italic" text="Italic" />
            <DraggableItem type="highlight" text="Highlight" />
            <DraggableItem type="stroke" text="Stroke" />
          </TabPanel>

          {/* Animations Tab */}
          <TabPanel value={value} index={2}>
          <Typography variant='h4'>Animations</Typography>

            <DraggableItem type="fade" text="Fade In" />
            <DraggableItem type="zoom" text="Zoom In" />
            <DraggableItem type="slide" text="Slide In" />
          </TabPanel>
        </Box>
      </Paper>
    </Box>
  );
}
