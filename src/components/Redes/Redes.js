import './Redes.css'

import Instagram from '../../images/instagram.png'
import Facebook from '../../images/facebook.png'
import YouTube from '../../images/youtube.jpg'

const Redes = () => {
    return (  
        <div className='row contenedorRedes my-4 '>
            <p className='col d-flex align-items-center h-100 textoRedes m-' >Seguinos en nuestras redes</p>
            <div className='col d-flex justify-content-end'>
                <img src={Instagram} className='logoRedSocial mx-1' alt="Instagram" />
                <img src={Facebook}  className='logoRedSocial mx-1' alt="Facebook" />
                <img src={YouTube}  className='logoRedSocial mx-1' alt="YouTube" />
            </div>
        </div>
    );
}
 
export default Redes;