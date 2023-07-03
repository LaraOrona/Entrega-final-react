import React from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import SectionRemeras from '../../pages/main/remeras';


const TabsComponent = () => {
    const [selected, setSelected] = React.useState('tshirts')

    const handleChange = (_, value) => {
        setSelected(value);
    }

const selectedSection = (value) => {
    switch (value) {
        case'tshirts':
            return <SectionRemeras />;
        case 'keyholders':
            return <Box>Llaveros</Box>;
        case 'cups':
            return <Box>Tazas</Box>;
            default:
                return <Box></Box>;

        }

    }

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider ' }}>
                <Tabs value={selected} aria-label="basic tabs example" onChange={handleChange}>
                    <Tab label="Remeras" value={'tshirts'} />
                    <Tab label="Llaveros" value={'keyholders'} />
                    <Tab label="Tazas" value={'cups'} />
                </Tabs>

            <Box m={2}>
                { selectedSection(selected) }
                {/* {
                    selected === "tshirts"?
                    <SectionRemeras />
                        :   
                        null
                }
                {
                    selected === "keyholders"?
                    <Box>Llaveros</Box>
                        :   
                        null
                }

                {
                    selected === "cups"?
                    <Box>Tazas</Box>
                        :   
                        null
                } */}
            </Box>
        </Box> 
    
)
}

export default TabsComponent