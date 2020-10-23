import React from 'react';
import r17 from './R17.jpg';
import r19 from './R19.jpg';
import r15 from './R15.jpg';
import r18 from './R18.jpg';
import r11 from './R11.jpg';
import r13 from './R13.jpg';
import r14 from './R14.jpg';
import r20 from './R20.jpg';
import r24 from './R24.jpg';
import blick from './blick.png';

export default function Main() {

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

        {/*SECAO DE CONTEUDO COM SLIDER DE VIDEOS */}
        <section id="div-slider">
                <div className="titulos">
                    <h1>CONTEÚDO</h1>
                </div>

                <ul className="slides-front">
                    <input type="radio" name="radio-btn" id="img-1" value="video1" defaultChecked></input>
                    <li className="slide-container">
                        <div className="slide">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/QWOTDb0ISL4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="nav">
                            <label for="img-3" className="prev">‹</label>
                            <label for="img-2" className="next">›</label>
                        </div>
                    </li>

                    <input type="radio" name="radio-btn" id="img-2" value="video2"></input>
                    <li className="slide-container">
                        <div className="slide">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/k-mKziwkxsI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="nav">
                            <label for="img-1" className="prev">‹</label>
                            <label for="img-3" className="next">›</label>
                        </div>
                    </li>

                    <input type="radio" name="radio-btn" id="img-3" value="video3"></input>
                    <li className="slide-container">
                        <div className="slide">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZAkt492UPlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                        <div className="nav">
                            <label for="img-2" className="prev">‹</label>
                            <label for="img-1" className="next">›</label>
                        </div>
                    </li>

                    <li className="nav-dots">
                        <label for="img-1" className="nav-dot" id="img-dot-1"></label>
                        <label for="img-2" className="nav-dot" id="img-dot-2"></label>
                        <label for="img-3" className="nav-dot" id="img-dot-3"></label>
                    </li>
                </ul>
        </section>

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

        {/*SECAO DE GALERIA DE FOTOS*/}
        <section id="gallery">
                <div className="galeriaTitulo">
                    <h1> GALERIA - CONHEÇA A GENTE! </h1>
                </div>

                <ul className="listaGaleria">
                    <li className="itemGaleria">
                        <img src={r19}></img>
                    </li>

                    <li className="itemGaleria">
                        <img src={r15}></img>
                    </li>

                    <li className="itemGaleria">
                        <img src={r18}></img>
                    </li>

                    <li className="itemGaleria">
                        <img src={r11}></img>
                    </li>

                    <li className="itemGaleria">
                        <img src={r13}></img>
                    </li>

                    <li className="itemGaleria">
                        <img src={r14}></img>
                    </li>

                    <li className="itemGaleria">
                        <img src={r20}></img>
                    </li>

                    <li className="itemGaleria">
                        <img src={r24}></img>
                    </li>
                </ul>
        </section>

        {/*SECAO DE CONTATO COM CAMPOS PARA PREENCHIMENTO DE DADOS*/}
        <section id="submit">
            <div className="titulosSubmit">
                <h1>ENTRE EM CONTATO</h1>
            </div>

            <div className="camposSubmit">
                <h4 className="tituloCampos">Nome:</h4>
                <input type="text" className="NOME"></input>

                <h4 className="tituloCampos">E-mail:</h4>
                <input type="text" className="EMAIL"></input>

                <h4 className="tituloCampos">Telefone:</h4>
                <input type="text" className="TELEFONE"></input>

                <h4 className="tituloCampos">Descrição:</h4>
                <input type="text" className="DESCRICAO"></input>
            </div>

            <div className="botaoSubmit">
                <button>ENVIAR</button>
            </div>
        </section>
    </div>
    );
}