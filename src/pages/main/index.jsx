import React from 'react';
// import NavBar from "../../components/nav-bar";
import { Box } from '@mui/material';
import NavBar from '../../components/nav-bar'
import TabsComponent from '../../components/tabs';


const Main = () => {
    const [currentCategory, setCurrentCategory] = React.useState('cat1')

    const handleChange = (_, value) => {
        setCurrentCategory(value);
    }

    return (

        <Box sx={{ width: '100%' }}>
            <NavBar />
            <TabsComponent />

        </Box>
    )
}

export default Main