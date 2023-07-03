import React from 'react';
// import NavBar from "../../components/nav-bar";
import { Box } from '@mui/material';
import NavBar from '../../components/nav-bar'
import TabsComponent from '../../components/tabs';


const Main = () => {
    
    return (

        <Box sx={{ width: '100%' }}>
            <NavBar />
            <TabsComponent    />

        </Box>
    )
}

export default Main