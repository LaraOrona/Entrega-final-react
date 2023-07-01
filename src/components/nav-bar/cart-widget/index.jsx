import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


const CartWidget  = ({cartQuantity}) => {
return (
    <IconButton aria-label="delete">
        <Badge badgeContent={cartQuantity} color="error">
        <ShoppingCartIcon htmlColor='#fff'/>
        </Badge>
    </IconButton>
)
}

export default CartWidget 