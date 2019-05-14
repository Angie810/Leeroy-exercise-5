import React, {Component} from 'react';
import {Switch, Route,Link} from 'react-router-dom';
import Home from './Home';
import amazon from './amazon.png';
import google from './google.png';
import apple from './apple.png';
import tesla from './tesla.jpg';
import facebook from './facebook.png';
import leeroy from './leeroy.jpg';



class Company extends Component{
    render(){
        return(
    
        <div class="container">
        <h2>The Greatest Companies In The World:</h2>
        <img src={leeroy} className="Picture"/>
        <img src={amazon} className="Picture"/>
        <img src={google} className="Picture"/>
        <img src={apple} className="Picture"/>
        <img src={tesla} className="Picture"/>
        <img src={facebook} className="Picture"/>
          
        </div>
    
        )
    }
}
export default Company;