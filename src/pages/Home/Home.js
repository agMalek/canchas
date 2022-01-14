import { useContext, useEffect } from 'react';
import { Context } from '../../app/appContext';
import FormContacto from '../../components/FormContacto/FormContacto';
import NuestrasCanchas from '../../components/NuestrasCanchas/NuestrasCanchas';
import Redes from '../../components/Redes/Redes';
import Slider from '../../components/Slider/Slider';
import './Home.css'

const Home = () => {

    const { deportes, getDeportes } = useContext(Context)
   
    useEffect(() => {
        getDeportes("deportes")
    }, [])


    return (  
        <> 
            {
                deportes.length > 0 ?
                    <>
                        <Slider/>
                        <NuestrasCanchas />
                        <Redes/>
                        <FormContacto/>
                    </>
                : <h3>Cargando...</h3>
            }
        </>
    );
}
 
export default Home;