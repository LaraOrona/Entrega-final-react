import { Box, CircularProgress} from '@mui/material'
import React from 'react'
import CardItem from '../card-item'

const ListaElementos = ({loading, items}) => {
    return (
    <Box display={'flex'} justifyContent={'start'} flexDirection={'row'} gap={5} flexWrap={'wrap'}>
            {
                Boolean(loading) ?
                <CircularProgress color="secondary" />
                :
                items?.map((item, index)=>{
                    return(
                        <CardItem key={index + item.title} nombre={item.title} precio={item.price} stock={10} imageURL={item.image} description={item.description}/> 
                    )

                })

            

            }
        </Box>
)
}

export default ListaElementos