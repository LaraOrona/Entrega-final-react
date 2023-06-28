import React from 'react';
import NavBar from "../../components/nav-bar";
import { Box, Tab, Tabs } from '@mui/material';


const Main = () => {
    const [currentCategory, setCurrentCategory] = React.useState('cat1')

    const handleChange = (_, value) => {
        setCurrentCategory(value);
    }

    return(
    <Box sx={{ width: '100%'}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider '}}>
            <Tabs value={currentCategory} aria-label="basic tabs example" onChange={handleChange}>
                <Tab label= "Cat1" value={'cat1'} />
                <Tab label= "Cat2" value={'cat2'}/>
                <Tab label= "Cat3" value={'cat3'}/>
            </Tabs>
        </Box>
    </Box>
    )
}

export default Main