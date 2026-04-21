import '../../../styles/navbar/index.css'
import comlogo from '../../../assets/composturaLogos/composturalogoblack.png'
import completters from '../../../assets/composturaLogos/composturalettersblack.png'
const Navbar = () => {
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
                <ul className='nav-options'>
                    <li>
                        Nuestros Servicios
                    </li>
                    <li>
                        Contacto
                    </li>
                    <li>
                        Acerca De
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