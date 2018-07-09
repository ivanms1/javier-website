import React from 'react';

const Contacto = () => (
    <div className="contacto section scrollspy" id="contacto">
        <h3>Contacto</h3>
        <form className="col s12">
            <div className="row">
                <div className="input-field col s12 m6">
                    <input id="name" type="text" className="validate black-text"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s12 m6">
                    <input id="email" type="email" className="validate black-text"/>
                    <label htmlFor="email">Email</label>
                    <span className="helper-text" data-error="Email Inválido" data-success="Email Válido"></span>
                </div>            
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea id="mensaje" className="materialize-textarea black-text"></textarea>
                    <label htmlFor="mensaje">Mensaje</label>
                </div>
            </div>
        </form>
    </div>
);

export default Contacto;