import React from 'react';
import blick from '../../assets/icones/blick.png';

export default function Products() {

    return (
    /* SECAO SOBRE */ 
        <div className="main">
            {/*SECAO DE ANUNCIO DA NOVA LINHA DE ROUPAS*/}
            <section id="company">
                <div className="">
                    <div className="titulos">
                        <div className="tituloProdutos">
                            <h1>PRODUTOS</h1>
                        </div>

                        <div className="subtituloProdutos">
                            <p><i className="em em-fire" aria-role="presentation" aria-label="FIRE"></i> NOSSA NOVA LINHA ESTÁ DISPONÍVEL, CONFIRA! <i className="em em-fire" aria-role="presentation" aria-label="FIRE"></i></p>
                        </div>
                    </div>

                    <div className="products">
                        <a href="https://teespring.com/stores/raleighlink" target="_blank"><img src={blick}></img></a>
                    </div>
                </div>
            </section>
        </div>
    );
}