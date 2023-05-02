import React, { useContext } from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from '../../context/Context';

const Header = () => {
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

            <NavLink className="logo" to="/">
                <p><span>Lucas Ferreyra</span></p>
            </NavLink>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150} href="#inicio">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </Link>
                <Link to="servicios" spy={true} offset={-150} href="#servicios">
                    <FormattedMessage
                        id='services'
                        defaultMessage='Services'
                    />
                </Link>
                <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
                    <FormattedMessage
                        id='projects'
                        defaultMessage='Projects'
                    />
                </Link>
                <Link to="contactos" spy={true} offset={-150} href="#contactos">
                    <FormattedMessage
                        id='contact'
                        defaultMessage='Contact'
                    />
                </Link>
                <div id="buttons">
                    <img onClick={() => idioma.selectLanguage('en-US')} src="https://previews.dropbox.com/p/thumb/AB7mrW7-HXbHOnRCl3yJqhQ7oloF-hQx2W76udLw0_wbIskrAKKurRZV84Vgni0jz7xKnT294L9Ll3O3xmeXo_lm9gDBHGnZ4YDSJN1t5xDmu9NEV6ZWOYwxyrxu5ctwccqg7C44m-BvuYY9lzsU2aLJIorwD5FS5kpWEYjfZMZzJpFZXYbVYyxf6TnEmW-JXfC5tm3oqylnkrpafq4vEt_XHSZr0rSz6VTpN86CtDcR_2exeMwA_hKKDsSXssLsnNWad06kfZnybz5FuXaC3Yq3kH_COBrIUaDzQ3LpADE1W2r_EpRhw0G5_XI3esgIdTz0-seS0AVfCmQASv-r05X0QUg2-sMFwqMrGHbTVihr0ZlPLHAqw4ABQkHUNxPay3E/p.png" alt="EEUU" />
                    <img onClick={() => idioma.selectLanguage('es-ES')} src="https://previews.dropbox.com/p/thumb/AB5K3t9GtQX4Jv4cmsNmh3XQJt8-YY8n9b3xOfUNczKJUdqfAWVFcE2V_sxXRwYouOuxAJhwEkZHWBDeyS0w9mOwsQhGouHB2QaKYPbFv0U988D1NnQ3g0JZFeOthbUHy0Od1P6uICbQS0xEDO4cWgNtxhow3g9C0SLYphvN16FJUCNTxezV68oLgacygfHUMfpxhZrUsiMY2FoqWNpN5TFe5mYRaeUvCLbcsveVvPF21VQZt6G2b-0PWSCA8mUre_Knd6ncVjqJ06LpVxWoi4qe6Qnb9jSM9Cj9-zFNs4GYrpJ2uI8arQqFbyVfe0XQZ8rxSg1iepBtl1UEezSc0I1fRXbj5xzkUngJSdVKqZlwwiJqZkd_GLwAJcW2In2xRmU/p.png" alt="España" />
                </div>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(Header);