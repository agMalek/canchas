import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { Context } from '../../app/appContext';
import ReservaCancha from '../../components/ReservaCancha/ReservaCancha';
import './Deporte.css'

const Deporte = () => {

    const {dep} = useParams()

    const { getDeporte, deporte } = useContext(Context)
   
    const [reservas, setReservas] = useState(JSON.parse(localStorage.getItem("reservas")) === null ? {} : JSON.parse(localStorage.getItem("reservas")))


    useEffect(() => {
        getDeporte(dep)
    }, [dep])



    return (

        <>  
            {
                deporte.length > 0 ?
                    <div className='mx-5 my-3'>
                        <h1>Canchas de {dep}</h1>
                            
                        <div>
                            {
                                deporte.map(d => (
                                    <ReservaCancha 
                                        key={d.id} 
                                        dep={dep} 
                                        {...d}
                                        reservas={reservas}
                                        setReservas={setReservas}
                                    />      
                                ))            
                            }
                        </div>
                    </div>
                : <h3>Cargndo.....</h3>
            }
        </>
        
    );
}
 
export default Deporte;