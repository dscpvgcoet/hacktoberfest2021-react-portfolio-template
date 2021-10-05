import React from 'react'
import { Redirect, withRouter } from 'react-router-dom';
import "./project.css";

const Project = (props) => {
    
    return (
        <div className="project">
            {(props.match.params.id!=='1'&&props.match.params.id!=="2"&&props.match.params.id!=="3") && <Redirect to="/"/>}
            <div style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent:"space-around"}}>
                <h2>{props.projects[Number(props.match.params.id)-1].title}</h2>
                <img alt="proejct" src={props.projects[Number(props.match.params.id)-1].source}/>{/*You Can will always your fetch for the dynami routing but for sample i have done simple data pass */}
            </div>
            <div>
            <h4>Features</h4>
                {props.projects[Number(props.match.params.id)-1].features.map((ele,index)=><p key={index}>- {ele}</p>)}
            <h4>Techs used</h4>
                {props.projects[Number(props.match.params.id)-1].techs.map((ele,index)=><p key={index}>- {ele}</p>)}
            <a target="_blank" rel="noopener noreferrer" href={props.projects[(props.match.params.id)-1].linktoproject} >To Project and see live</a>
            </div>
        </div>
    )
}

export default withRouter(Project)
