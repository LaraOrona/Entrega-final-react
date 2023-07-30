import React from 'react'
import ListaElementos from '../../components/lista-elementos';
import { listFake } from '../../sdk/fakeApi';



const SectionFake = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{

    setLoading(true);
    listFake()
    .then((res) => {
        console.log(res);
        setItem(res)
    })
    .catch(() => {
        alert('Error al cargar')
        setLoading(false)
    })
    .finally(()=> {
        setLoading(false);
    })
    
},[])

    return(
        <ListaElementos items={items} loading={loading} />
    )
}

export default SectionFake;