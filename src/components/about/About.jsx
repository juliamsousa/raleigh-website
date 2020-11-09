import React from 'react';
import r17 from '../../assets/640X640/R17.jpg';

export default function About() {

    return (
    /* SECAO SOBRE */ 
        <div className="main">
            <section  id="about">
                    <div className="titulos">
                        <div className="tituloSobre">
                            <h1>SOBRE</h1>
                        </div>

                        <div className="subtituloSobre">
                            <h2>Saiba mais sobre nossa história!</h2>
                        </div> 
                    </div>

                    <div className="centro">
                        <div className="portrait">
                            <img src={r17}></img>
                        </div>

                        <div className="paragraph">
                            <p>
                                Raleigh Lilith é uma Amazona e ativista de Direitos dos Animais do estado de Georgia - EUA. Fundou sua linha de roupas e sua empresa de produtos para Pets em 2018. Raleigh tem também um canal no YouTube, em que traz informações e engajamento sobre as
                                causas animais.
                            </p>
                        </div>
                    </div>
            </section>       
        </div>
    );
}