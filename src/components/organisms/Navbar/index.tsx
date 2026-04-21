import React from 'react'
import '../../../styles/navbar/index.css'
import comlogo from '../../../assets/composturaLogos/composturalogoblack.png'
import completters from '../../../assets/composturaLogos/composturalettersblack.png'
import { BurguerButton } from '../../atoms/navbarAtoms/burguerButton'

const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = React.useState(false)

    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-logo'>
                    <figure>
                        <img  className='mainlogo' src={comlogo} alt="complogo" />
                    </figure>
                    <figure>
                        <img className='logoletters' src={completters} alt="completters" />
                    </figure>
                </div>

                <BurguerButton
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />

                <ul  className={`nav-options ${menuOpen ? 'nav-options--open' : ''}`}>
                    <li>
                        Nuestros Servicios
                    </li>
                    <li>
                        Contacto
                    </li>
                    <li>
                        Health & Care
                    </li>
                    <li>
                        Nuestro Equipo
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar