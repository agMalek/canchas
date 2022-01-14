import { useContext } from 'react';
import { Context } from '../../app/appContext';
import './Slider.css'

const Slider = () => {

    const { deportes } = useContext(Context)

    return (
        <>
            <div  id="carouselExampleIndicators" className="carousel slide sliderCanchas" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {/* {
                        deportes.map( deporte => (
                            <div key={deporte.id} className="carousel-item active">
                                <img className="d-block w-100" src={deporte.url_imagen} alt="First slide" />
                            </div>
                         ))
                    } */}
                    <div className="carousel-item active">
                        <img className="d-block w-100 imgSlider" src={deportes[0].url_imagen} id='uno' alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 imgSlider" src={deportes[1].url_imagen} id='dos' alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 imgSlider" src={deportes[2].url_imagen} id='tres' alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </>
    );
}

export default Slider;