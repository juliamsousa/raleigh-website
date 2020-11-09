import React from 'react';

export default function Content() {
    
    return (
    /* SECAO SOBRE */ 
        <div className="main">
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
        </div>
    );
}