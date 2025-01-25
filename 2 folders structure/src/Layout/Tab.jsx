import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const SimpleVerticalTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabsContent = [
        'Content for Item One',
        'Content for Item Two',
        'Content for Item Three',
        'Content for Item Four',
        'Content for Item Five',
    ];

    return (
        <Box sx={{ display: 'flex', height: 300 }}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {tabsContent.map((_, index) => (
                    <Tab key={index} label={`Item ${index + 1}`} />
                ))}
            </Tabs>
            <Box sx={{ p: 2, flexGrow: 1 }}>
                {tabsContent[value]}
            </Box>
        </Box>
    );
};

export default SimpleVerticalTabs;
