import React from 'react';
import logo from './logo.png';
import logoFacebook from './facebook.png';
import logoPatreon from './patreon.png';
import logoInstagram from './instagram.png';

export default function Header() {

    return ( 
    /*SECAO DA PAGINA INICIAL COM LINKS DE REDES SOCIAIS E MENU DE NAVEGACAO*/
    <header id="home">
        <div className="menu">
            <div className="titulo">
                <h1>Raleigh Lilith</h1>
            </div>

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

            {/*<nav className="drop-down">
                <li className="principal">NAVEGAÇÃO
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
                </li>    
            </nav>*/}
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