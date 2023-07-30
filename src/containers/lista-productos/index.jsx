import React from 'react'
import { Box, Typography } from "@mui/material";
import CardItem from "../../components/card-item";
import { listRemeras } from '../../sdk/remeras';



const SectionRemeras = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{

    setLoading(true);
    listRemeras()
    .then ((res) => res.json())
    .then((json) => {
        console.log(json);
        setItem(json.items);
    })
    .catch(() => {
        alert('Error al cargar las remeras')
        setLoading(false)
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
                        <CardItem key={index + item.nombre} nombre={item.nombre} precio={item.precio} stock={item.cantidad} imageURL={item.imgURL}/> 
                    )

                })

            

            }
        </Box>

    )
}

export default SectionRemeras;