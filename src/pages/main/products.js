const TSHIRTS = [{
    id: 1,
    nombre: 'Remera Bordo',
    imgURL: 'https://i.pinimg.com/474x/59/c1/ac/59c1ac69787a9aa7b5a71aa47134b88a.jpg',
    cantidad: 10,
    precio: '$3000',

},
{
    id: 2,
    nombre: 'Remera Azul',
    imgURL: 'https://srv.latostadora.com/image/ardilla_retro--id:105b45e8-1f5a-4c07-bb81-11386e8d4471;s:H_A21;b:f2f2f2;w:334;f:f;i:13562327824831356232017092621.jpg',
    cantidad: 10,
    precio: '$3000',

},
{
    id: 3,
    nombre: 'Remera Negra',
    imgURL: 'https://image.spreadshirtmedia.net/image-server/v1/mp/products/T812A2MPA5886PT17X0Y0D157243330W30794H36953/views/1,width=800,height=800,appearanceId=2,backgroundColor=F2F2F2,modelId=85,crop=list/camiseta-ardilla-para-hombres-y-mujeres-camiseta-premium-hombre.jpg',
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

