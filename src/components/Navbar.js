import React from 'react';
import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.sidenav');
    let options = {};
    M.Sidenav.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('.tooltipped');
    let options = {
      enterDelay: 400,
      outDuration: 1,
      margin: -5
    };
    M.Tooltip.init(elems, options);
  });

  return (
  <React.Fragment>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper white">
            <a href="/" className="black-text home">Javier</a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="md-18 material-icons black-text">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="black-text tooltipped" data-position="bottom" data-tooltip="Instagram" href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a className="black-text tooltipped" data-position="bottom" data-tooltip="Youtube" href="/"><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a className="black-text tooltipped" data-position="bottom" data-tooltip="Facebook" href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a className="black-text" href="/">Trabajo</a></li>
              <li><a className="black-text" href="/">Perfil</a></li>
              <li><a className="black-text" href="/">Contacto</a></li>
            </ul>
          </div>
        </nav>
    </div>
    <ul className="sidenav" id="mobile-demo">
      <li><a href="/">Trabajo</a></li>
      <li><a href="/">Perfil</a></li>
      <li><a href="/">Contacto</a></li>
    </ul>
  </React.Fragment>
  )
}

export default Navbar;