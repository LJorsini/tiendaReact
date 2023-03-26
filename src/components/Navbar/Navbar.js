import './Navbar.css';
import { Icons } from '../Icons/Icons';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>

                <nav>
                    <Link to="/" className="navbar__link">INICIO</Link>
                    <Link to="productos/micros" className="navbar__link">MICROS</Link>
                    <Link to="productos/memorias" className="navbar__link">MEMORIAS</Link>
                    <Link to="productos/mothers" className="navbar__link">MOTHERS</Link>
                    <Link to="contacto" className="navbar__link">CONTACTO</Link>
                    
                </nav>

                {/* <div><Icons></Icons></div> */}
                <CartWidget/>
            </div>

        </header>
    )
}