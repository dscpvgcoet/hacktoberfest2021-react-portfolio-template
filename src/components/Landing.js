import React from 'react';
import Header from './header'
import Home from './home';
import Work from './Work';
import Contact from './Contact';

import data from './yourdata';

const Landing = ()=>{
    return(<div className="App">
    <Header name={data.name} contactEmail = {data.contactEmail}></Header>
      <Home name={data.landingPageName} paragraph = {data.landingPagePara} authorImage={data.landingPageImage}></Home>
      <Work projects={data.projects}></Work>
      <Contact contactEmail = {data.contactEmail} contactPara= {data.contactPara} socialLinks = {data.social}></Contact>
    </div>)
}

export default Landing