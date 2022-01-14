import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import './ReservaCancha.css'

const ReservaCancha = ({ dep, id, nombre, url_imagen, horarios, techo, jugadores, reservas, setReservas }) => {

    const [exito, setExito] = useState()
    const [idHora, setIdHora] = useState()
    const [eslaPrimera, setEslaPrimera] = useState(true)
    const [horariosReserva, setHorariosReserva] = useState(reservas[`idCancha${id}`] !== undefined ? reservas[`idCancha${id}`] : [])

    useEffect(() => {
        setTimeout(() => {
            setExito(undefined)
        }, 3000);
    }, [exito])

    const reservar = () => {
        if(!horariosReserva.some(res => res === idHora)){
            setHorariosReserva([...horariosReserva, idHora])
            setEslaPrimera(false)
        }else{
            setExito(false)
        }
    }

    useEffect(() => {
        if(!eslaPrimera){
            setReservas({...reservas, [`idCancha${id}`]: horariosReserva})
        }else{
        }
    },[horariosReserva])

    useEffect(() => {
        if(!eslaPrimera){
            localStorage.setItem("reservas", JSON.stringify(reservas));
            setExito(true)
        }
    },[reservas])

    return (
        <>
            {
                exito === true ? 
                <div>
                    <Alert severity="success">Se reservó con éxito</Alert>
                </div>
                : exito === false ?
                <div>
                    <Alert severity="error">Lo siento ya estaba reservada!</Alert>
                </div>
                : ""
            }
            <div className='d-flex justify-content-center card p-3 w-100 shadow my-3 containerReserva'>
                <div className='row'>
                    <div className='col-5 h-100'>
                        <img className='imgReserva' src={url_imagen} alt={nombre} />
                    </div>
                    <div className='col-7'>
                        <h2>{nombre}</h2>
                        {
                            dep === "futbol" ?
                            <>
                                <p>Cantidad de jugadores: {jugadores}</p>
                                <p>Cancha techada: {techo ? "SI" : "NO"}</p>
                            </>: ""
                        }
                        <p>Horarios</p>
                        <div className='d-flex flex-wrap'>
                            {
                                horarios.map(h => (
                                    <button 
                                        key={h.id} 
                                        disabled={reservas[`idCancha${id}`] !== undefined ? reservas[`idCancha${id}`].some(idh => idh === h.id) : false}
                                        onClick={() => setIdHora(h.id)} 
                                        className='btn btn-outline-success m-1'
                                    >
                                        {h.hora}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-success' onClick={() => reservar()}>Reservar</button>
                </div>
            </div>
        </>
    );
}

export default ReservaCancha;