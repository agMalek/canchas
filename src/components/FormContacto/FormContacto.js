import './FormContacto.css'

const FormContacto = () => {

    
    return (  
        <form className='row'>
            <div className='col p-5'>
                <h4>Contacto</h4>
                <div>
                    <label className='d-block my-1' htmlFor="">Nombre</label>
                    <input className='w-100 my-1' type="text" />
                </div>   
                <div>
                    <label className='d-block my-1' htmlFor="">Email</label>
                    <input className='w-100 my-1' type="email" />
                </div>
                <div>
                    <label className='d-block my-1' htmlFor="">Mensaje</label>    
                    <textarea className='w-100 my-1' name="" id="" cols="30" rows="5"></textarea>
                </div>
                <button className='btn btn-success'>Enviar</button>            
            </div>
            <div className='col p-4'>   
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13136.490988109781!2d-58.42875065!3d-34.6010575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1642119460803!5m2!1ses-419!2sar" width="600" height="450" style={{border:0}} loading="lazy"></iframe>
            </div>

        </form>
    );
}
 
export default FormContacto;