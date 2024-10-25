import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "./scroll.css"

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper', marginLeft:{xs:12 }, gap:{xs:30}}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
       
            <img src="/SVGconvert.png" alt="" />
        <Tab label="Convert"  />
        
        
            <img src="/Vectorsend.png" alt="" />
        <Tab label="Send" />
        
        
            <img src="/Vectorgraphiq.png" alt="" />
            <Tab label="Graphic" />
        
        
            <img src="/Vectoralert.png" alt="" />
        <Tab label="Alert" />
        
      </Tabs>
    </Box>
  );
}
