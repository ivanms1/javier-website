import React from  'react';
import Project from './Project';

const Portfolio = () => {
    let img = ['./images/pic2.jpg', './images/pic4.jpg', './images/pic2.jpg', './images/pic4.jpg']
    let projects = [];
    for(let i = 0; i < 4; i++){
        projects.push(<Project source={img[i]}/>)
    }
    return (
        <div className="portfolio">
            {projects}
        </div>
    )
}

export default Portfolio;