import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';



const TabsComponent = () => {
    const [currentCategory, setCurrentCategory] = React.useState('cat1')

    const handleChange = (_, value) => {
        setCurrentCategory(value);
    }

    return (

        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider ' }}>
                <Tabs value={currentCategory} aria-label="basic tabs example" onChange={handleChange}>
                    <Tab label="Remeras" value={'tshirts'} />
                    <Tab label="Llaveros" value={'keyholders'} />
                    <Tab label="Tazas" value={'cups'} />
                </Tabs>
            </Box>
        </Box>
    )
}

export default TabsComponent