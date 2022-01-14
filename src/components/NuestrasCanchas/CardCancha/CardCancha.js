import { Link } from 'react-router-dom'
import './CardCancha.css'

const CardCancha = ({deporte, url_imagen}) => {
    return (
        <div className="card shadow m-3" style={{width: "18rem"}}>
            <img className="card-img-top imgCard" src={url_imagen} alt="Card image cap" />
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title tituloCard">{deporte}</h5>
                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={`/${deporte.toLowerCase()}`} className="btn btn-primary">Ver canchas</Link>
            </div>
        </div>
    )
}

export default CardCancha
