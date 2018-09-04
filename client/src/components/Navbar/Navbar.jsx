import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';

import donateImg from '../../assets/images/donate-button.png';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Trees Please</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> <span id='menu-text'>Menu</span>
                    </button>
                    
                    <span id='nav-icons' className='d-inline-flex'>
                    <span><a className="nav-link js-scroll-trigger" href="https://www.facebook.com/aztreesplease.org/"><i alt='Facebook' className="fab fa-facebook"></i></a></span>
                    <span><a className="nav-link js-scroll-trigger" href="https://calendar.google.com/calendar/embed?src=aztreesplease%40gmail.com&ctz=America/Phoenix"><i alt='Calendar' className="far fa-calendar-alt"></i></a></span>
                    <span><a className="nav-link js-scroll-trigger" href="mailto:info@aztreesplease.org"><i alt='Email' className="fas fa-envelope"></i></a></span>
                    <span><a className="nav-link js-scroll-trigger" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BJWK8PC586A38" target='_blank'><img width='70px' src={donateImg}/></a></span>
                    </span>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="/">Home
                            <span className="sr-only">(current)</span>
                        </a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" target='_blank' href="https://signup.com/go/TvVUDfX">Sign Up</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" target='_blank' href="https://calendar.google.com/calendar/embed?src=aztreesplease%40gmail.com&ctz=America/Phoenix">Events</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="/programs">Programs</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="/highlights">Highlights</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="/donations">Donations</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="/staff">Staff & Bios</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="/jobs">Jobs & Internships</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="https://drive.google.com/drive/folders/1utHQRovogfFscGu18VVT730_-J9FHADi?usp=sharing">Garden Documents</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="/purity-painting">Purity Painting & Finishing</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="/groasis">Groasis Waterboxx</a>
                        </li>
                        <li className="nav-item px-lg-4">
                        <a className="nav-link text-uppercase text-expanded" href="/team">Team Page</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;