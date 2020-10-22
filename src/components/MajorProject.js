import React from 'react';
import "./MajorProject.css";
const MajorProject = (props) => {
    return (
        <div className="majorproject">
            <img alt="majorProject" src={props.source} />
            <h2>{props.name}</h2>
        </div>
    )
};

export default MajorProject;
