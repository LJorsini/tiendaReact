import './Navbar.css';
import { Icons } from '../Icons/Icons';

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>

                <nav>
                    <a href="#" className="navbar__link">Enlace 1</a>
                    <a href="#" className="navbar__link">Enlace 2</a>
                    <a href="#" className="navbar__link">Enlace 3</a>
                    
                </nav>

                <div><Icons></Icons></div>
            </div>

        </header>
    )
}