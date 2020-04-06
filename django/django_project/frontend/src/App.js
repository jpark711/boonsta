import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route } from  'react-router-dom'
import  CustomersList  from  './CustomersList'
import  CustomerCreateUpdate  from  './CustomerCreateUpdate'
import  './App.css';


/* Under "navbar-nav" 
<a  className="nav-item nav-link"  href="/">MEMOS</a> 
*/

const  BaseLayout  = () => (
<div  className="container-fluid">
    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
        <a  className="navbar-brand"  href="/">Boonsta Beta v0.2.0</a>
        <button  className="navbar-toggler"  type="button"  data-toggle="collapse"  data-target="#navbarNavAltMarkup"  aria-controls="navbarNavAltMarkup"  aria-expanded="false"  aria-label="Toggle navigation">
        <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse"  id="navbarNavAltMarkup">
        <div  className="navbar-nav">
        </div>
    </div>
    </nav>
    <div  className="content">
        <Route  path="/"  exact  component={CustomersList}  />
        <Route  path="/customer/:pk"  component={CustomerCreateUpdate}  />
        <Route  path="/customer/"  exact  component={CustomerCreateUpdate}  />
    </div>
</div>
)

class  App  extends  Component {

render() {
    return (
    <BrowserRouter>
        <BaseLayout/>
    </BrowserRouter>
    );
}
}
export  default  App;
