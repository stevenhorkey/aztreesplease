import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer text-white text-center py-5">
                <div className="container">
                    <p className="m-0 gaegu text-center">Copyright &copy; Trees Please 2018 - 501(c)3 - Site by <a href='https://stevenhorkey.com' id='steven-site' target='_blank'>Steven Horkey</a></p>
                </div>
            </footer> 
        )
    }
}

export default Footer;