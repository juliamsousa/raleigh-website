import React from 'react';
import r19 from '../../assets/640X640/R19.jpg';
import r15 from '../../assets/640X640/R15.jpg';
import r18 from '../../assets/640X640/R18.jpg';
import r11 from '../../assets/640X640/R11.jpg';
import r13 from '../../assets/640X640/R13.jpg';
import r14 from '../../assets/640X640/R14.jpg';
import r20 from '../../assets/640X640/R20.jpg';
import r24 from '../../assets/640X640/R24.jpg';

export default function Gallery() {

    return (
    /* SECAO SOBRE */ 
        <div className="main">
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
        </div>
    );
}