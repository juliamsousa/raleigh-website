import React from 'react';

import "./header.css"

import logo from '../../assets/icones/logo.png';
import logoFacebook from '../../assets/icones/facebook.png';
import logoPatreon from '../../assets/icones/patreon.png';
import logoInstagram from '../../assets/icones/instagram.png';

export default function Header() {

    return ( 
    /*SECAO DA PAGINA INICIAL COM LINKS DE REDES SOCIAIS E MENU DE NAVEGACAO*/
    <header id="home">
        <div className="menu">
                <h1>Raleigh Lilith</h1>

            <nav className="navegacao">
                <ul>
                    <li className="referencia">
                        <a href="#about">SOBRE</a>
                    </li>

                    <li className="referencia">
                        <a href="#div-slider">CONTEÚDO</a>
                    </li>

                    <li className="referencia">
                        <a href="#company">PRODUTOS</a>
                    </li>

                    <li className="referencia">
                        <a href="#gallery">GALERIA</a>
                    </li>

                    <li className="referencia">
                        <a href="#submit">CONTATO</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="main ">
            <img className="logo" src={logo}/>
        </div>

        <div className="redesSociais ">
            <a href="https://www.facebook.com/shopraleighandlink/" target="_blank"><img className="social" src={logoFacebook}></img></a>
            <a href="https://www.instagram.com/raleighlilith/" target="_blank"><img className="social" src={logoInstagram}></img></a>
            <a href="https://www.patreon.com/join/raleighandlink" target="_blank"><img className="social" src={logoPatreon}></img></a>
        </div>
    </header>
    );
}