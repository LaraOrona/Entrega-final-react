import React from 'react'
import { Box, Typography } from "@mui/material";
import CardItem from "../../../components/card-item";
import { getRemeras } from '../products';



const SectionRemeras = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{

    setLoading(true);
    getRemeras()
    .then((res) => {
        console.log(res);
        setItem(res)
    })
    .finally(()=> {
        setLoading(false);
    })
    
},[])

    return(
        <Box display={'flex'} justifyContent={'start'} flexDirection={'row'} gap={5}>
            {
                loading ?
                <Typography>cargando...</Typography>
                :
                items?.map((item, index)=>{
                    return(
                        <CardItem key={index + item.nombre} nombre={item.nombre} precio={item.precio} stock={item.cantidad} img={item.img}/> 
                    )

                })

            

            }
        </Box>

    )
}

export default SectionRemeras;