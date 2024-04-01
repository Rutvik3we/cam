import React, { Component } from 'react';
import logo from './Images/logo.jpg';
import '../Components/css/Home.css';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
//import Login from './Login';


import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
//import { useHistory } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

export class NavbarCom extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
  window.location.href = '/login';}
 
  render() {
   
   
    return (
      <Router>
        
      <nav class="navbar navbar-expand-lg navbar-dark  static-top" style={{backgroundColor:"skyblue"}}>
      <div class="container">
        
        <a class="navbar-brand" href="/home">
          <img src={logo} alt="..." height="100"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
          
            <li class="nav-item">
              
              <a class="nav-link active" id="Home" aria-current="page" href="/profile">Profile</a>
              
            </li>
           
              <button class="btn btn-primary"  onClick={this.handleLogout} >
                Logout
              </button>

             
            
          </ul>
        </div>
        
      </div>
    
    </nav>
    
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
       
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={img1} class="d-block w-100" alt="..."/>
           
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={img2} class="d-block w-100" alt="..."/>
            
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..."/>
           
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 
      <div class="card" className="text" style={{width: "18rem"}}>
  <img src={logo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <a href="https://www.google.com/"><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></a>
  </div>
</div>


     
   
              
    </Router>
    
    
    )
  }
}

export default NavbarCom
