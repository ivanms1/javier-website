import React from  'react';
import Project from './Project';

const Portfolio = () => {
    let projects = [];
    for(let i = 0; i < 4; i++){
        projects.push(<Project/>)
    }
    return (
        <div className="portfolio">
            {projects}
        </div>
    )
}

export default Portfolio;