import React, { useContext } from "react";
import './Header.css';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const HeaderPage = () => {
    // Buttom language
    const idioma = useContext(langContext);
    // Menu desplegable
    const menuDesplegable = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesplegable}></div>

            <NavLink className="logo" to="/" >
                <p><span>Lucas Ferreyra</span></p>
            </NavLink>

            <nav className="navbar">
                <NavLink to="/" offset={-150} duration={500}>
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </NavLink>
                <NavLink to="/about" offset={-150} duration={500}>
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </NavLink>
                <NavLink to="/service" offset={-150} duration={500}>
                    <FormattedMessage
                        id='services'
                        defaultMessage='Services'
                    />
                </NavLink>
                <NavLink to="/project" offset={-150} duration={500}>
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </NavLink>
                <div id="buttons">
                    <img onClick={() => idioma.selectLanguage('en-US')} src="https://previews.dropbox.com/p/thumb/AB5NoL_SZBETAeIwIg63rO_9mv70dSKo4EZyILHT7MKYEMUDkFenbgoC1yb-pFCuYQY_k9yEHcUmYUfpe_2_kNKQb-FEZok4eDYDp8i8KzaSzV0k08sHfVPWI6YrG2NKxtCPFO7XnbNukHruQVSYQ5t8WXsvplIHsJlDylTfD2ud45fHLxGmTKX2J3cTwgapK8zxVyBTPksBt6LcgynmNDYAbZy3k74N94WAXjZ7g0tjG0jwSBmwzd041YAq-bRbYUPUZV4Jp25xg9wni1kdw20fGGu99dLwnApP281akwESQ4mGlWFle3s4gfhb6wZpF_VM1j3STe2JxGi1IUXeFyWkR5jNcUgzX_NOtxI1G9s1FS_-C6AZrqSybNr1YvYfS9g/p.jpeg" alt="EEUU" />
                    <img onClick={() => idioma.selectLanguage('es-ES')} src="https://previews.dropbox.com/p/thumb/AB6-7XC_NsAfDTEAfDXEt4uraQvVkfGz40HaDP-TjV0cFMGuhcukEVRLczcfAkD-YjsyoWRUwOKYxh9fCVoxflLdxHJqUo6wVFFm6Y_Bw6g4DX8e4rIGOMtONRMBzu6u4qSpWAwvLnkqpYJ_Xt-u28KR7duWv04RBF_zWAhsNESXv3xzYRLBOM55IEUqAKQdHWKW7a61RSP6OjPtbQUHYEfcVaOxtLVa7T9kb5BCwuIZxKCKGZk2ybAtoA8sFOSBUdQ1xl1xi1p00IgEmaZqPzVtMSKoV5VXJwjXYlBVQBqfXN0ja_dLsz6mZPLJ10K9ofe95IpWFKGVyfYub_rR0EEcNzZ3xOsTwOT7n9AqsbeTrF7qQ0c2hrTGyOkGz-HVUig/p.jpeg" alt="España" />
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(HeaderPage);