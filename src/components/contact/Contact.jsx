import React from 'react';
import './contact.css'

export default function Contact() {

    return (
        <div className="main">
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