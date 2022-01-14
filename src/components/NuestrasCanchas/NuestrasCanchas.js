import { useContext, useEffect } from 'react';
import { Context } from '../../app/appContext';
import CardCancha from './CardCancha/CardCancha';
import './NuestrasCanchas.css'

const NuestrasCanchas = () => {

    const { deportes } = useContext(Context)


    return (
        <>
            <div className='my-4'>
                <h2 className='text-center'>Nuestras canchas</h2>
                <div className='d-flex justify-content-center'>
                    {
                        deportes.map((deporte) => (
                            <CardCancha
                                key={deporte.id}
                                {...deporte}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default NuestrasCanchas;