import { Link, useParams } from "react-router-dom";

const Navbar = () => {

    const {deporte} = useParams()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/futbol">Futbol</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tenis">Tenis</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/voley">Voley</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;