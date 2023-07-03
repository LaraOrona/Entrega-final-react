const TSHIRTS = [{
    id: 1,
    nombre: 'Remera Blanca',
    img: '../assets/img/remera-blanca.png',
    cantidad: 10,
    precio: '$3000',

},
{
    id: 2,
    nombre: 'Remera Blanca',
    img: '../assets/img/remera-blanca.png',
    cantidad: 10,
    precio: '$3000',

},
{
    id: 3,
    nombre: 'Remera Blanca',
    img: '../assets/img/remera-blanca.png',
    cantidad: 10,
    precio: '$3000',

}
]

export const getRemeras = () => {

    return (
    new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(TSHIRTS);

        },2000)
    }))}

