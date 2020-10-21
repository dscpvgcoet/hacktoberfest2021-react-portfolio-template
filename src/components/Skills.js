import React, { useState } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch, withRouter } from "react-router-dom";
import ProjectOne from "../Assests/Project1.png";
import ProjectTwo from "../Assests/Project2.png";
import ProjectThree from "../Assests/Project3.png";
import MajorProject from "./MajorProject";
import Project from "./project";
import "./skill.css";
const Skills = (props) => {
  const [data, setData] = useState([
    {
      source: ProjectOne,
      title: "Airbnb Clone",
      features: ["Can Send Details to host your hotel.","User authentication","Responsive","No Refresh Routing"],
      techs: ["Create-React-App","Redux","Firebase(authentication)","Router"],
      linktoproject: "https://github.com/Kabi4/airBNB",
    },
    {
        source: ProjectTwo,
        title: "HuLu Clone",
        features: ["Can view all type of movies rating.","Switch Between pages without lossing State.","Responsive."],
        techs: ["The Movie DataBase(TMDB)","Create-React-App","Redux","Router"],
        linktoproject: "https://github.com/Kabi4/HuluApp",
      },
      {
        source: ProjectThree,
        title: "Twitter Clone",
        features: ["Can View Others post.","Twitter authentication.","Can Post Your thoughts.","Can post multiple images."],
        techs: ["Create-React-App","Twiiter API","Fireabse(auth)","Router","Redux"],
        linktoproject: "https://github.com/Kabi4/Twitter-Clone",
      }
  ]);
  if(1===2){
      setData([]);
  }
  return (
    <BrowserRouter>
      <div className="skills">
        <h1 style={{textAlign: 'center'}}>Major Projects</h1>
        <div style={{display: "flex",justifyContent: "space-around"}}>
            <Link to="/skills/id=1"><MajorProject source={ProjectOne} name="Airbnb Clone" /></Link>
            <Link to="/skills/id=2"><MajorProject source={ProjectTwo} name="HuLu Clone" /></Link>
            <Link to="/skills/id=3"><MajorProject source={ProjectThree} name="Twitter Clone" /></Link>
        </div>
        <Switch>
          <Route path="/skills/id=:id" exact>
            <Project  projects={data}/>
          </Route>
          <Route path="/skills" exact>
            <h1>Please Select a project to view</h1>
          </Route>
          <Redirect to="/skills"/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default withRouter(Skills);
