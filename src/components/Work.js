import React from 'react';

const Work = ({projects}) =>{
    return(
        <div className="work_container">
            <h1>Projects.</h1>
            <div className="projects_container">
                {projects.map(({id, url, imageSrc, title})=>(
                <div key={id} className="project">
                    <div className="image">
                        <a className="img_container" href={url}>
                            <img src={imageSrc} alt={title}></img>
                            <p className="title">{title}</p>
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Work