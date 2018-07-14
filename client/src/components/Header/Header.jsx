import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

class Header extends Component{
    render(){
        return(
            <h1 className="site-heading text-center text-white d-none d-lg-block">
                <span className="site-heading-upper text-primary mb-3 gaegu">Community Garden and Habitat Restoration</span>
                <span className="site-heading-lower"><a href='/'>Trees Please</a></span>
            </h1>  
        )
    }
}

export default Header;