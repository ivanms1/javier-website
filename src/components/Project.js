import React from 'react';
import M from 'materialize-css';

const Project = ({source}) => {
    document.addEventListener('DOMContentLoaded', () => {
        let elems = document.querySelectorAll('.materialboxed');
        let options = {
            onOpenStart: () => {
                let navbar = document.querySelector('.navbar-fixed');
                navbar.classList.add('hide')
            },
            onCloseStart: () => {
                let navbar = document.querySelector('.navbar-fixed');
                navbar.classList.remove('hide')
            }
        };
        M.Materialbox.init(elems, options);
      });

    return (
        <div className="project">
            <p>Project 1</p>
            <img className="materialboxed hoverable z-depth-3 responsive-img" src={source} alt=""/>
        </div>
    )
}

export default Project;