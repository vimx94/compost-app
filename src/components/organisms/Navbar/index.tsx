import React from 'react'
import '../../../styles/navbar/index.css'
import comlogo from '../../../assets/composturaLogos/composturalogoblack.png'
import completters from '../../../assets/composturaLogos/composturalettersblack.png'
import { BurguerButton } from '../../atoms/navbarAtoms/burguerButton'
import { HeaderBrand } from '../../molecules/Navbar/HeaderBrand'
import { NavOptions } from '../../molecules/Navbar/NavigationOptions'
import { listOptions } from '../../../utils/mockHomeData'


const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = React.useState(false)

    return (
        <header>
            <nav className='navbar'>
                <HeaderBrand
                    className='navbar-logo'
                    classLogo='mainlogo'
                    classLetters='logoletters'
                    pathLogo={comlogo}
                    pathletters={completters}
                />

                <BurguerButton
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />

                <NavOptions
                    className={`nav-options ${menuOpen ? 'nav-options--open' : ''}`}
                    options={listOptions}
                />
            </nav>
        </header>
    )
}

export default Navbar