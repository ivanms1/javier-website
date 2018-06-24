import React from 'react';
import M from 'materialize-css';
import Navbar from './Navbar';

const PageOne = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.parallax');
        let options = {};
        M.Parallax.init(elems, options);
      });
    return(
        <React.Fragment>
            <Navbar/>
            <div className="parallax-container">
                <div className="parallax"><img alt="" src="./images/pic1.jpg"/></div>
            </div>
        </React.Fragment>
    )
}

export default PageOne;