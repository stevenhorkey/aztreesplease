import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import BoardDash from '../../components/Dashboard/BoardDash';
import MembersDash from '../../components/Dashboard/MembersDash';
import VolunteersDash from '../../components/Dashboard/VolunteersDash';
import CommitteesDash from '../../components/Dashboard/CommitteesDash';
import CalendarDash from '../../components/Dashboard/CalendarDash';

import './auth.css';

class Dashboard extends React.Component{

    state = {
        password: '',
        message: '',
        display: '',
        redirect: false
    }

    logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    handleNav = event => {
        event.preventDefault();
        const name = event.target.name;
        this.setState({
            display: name
        });
        console.log(this.state.display);
    };

    renderDashboardSection(section) {
        switch (section) {
          case 'board':
            return <BoardDash user={this.props.user} />;
          case 'volunteers':
            return <VolunteersDash user={this.props.user} />;
          case 'members':
            return <MembersDash user={this.props.user} />;
          case 'committees':
            return <CommitteesDash user={this.props.user} />;
          default:
            return <CalendarDash user={this.props.user} />;
        }
    }

    render(){
        
        return(
            <div className='container bg-white text-justify pt-5 px-0'>
            <div className='white-modal mx-auto' id='Dashboard'>
                <h1 className='text-center mb-5 text-uppercase display-5'><strong>Team Dashboard</strong></h1>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand raleway" href="#">{this.props.user.firstName} {this.props.user.lastName}</a>
                    <button className="navbar-toggler collapsed ml-auto mr-3" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-uppercase raleway">Menu</span>
                    </button>
                    <span onClick={this.logout} className='text-uppercase raleway text-white cursor-pointer'>Logout <i class="fas fa-sign-out-alt"></i></span>

                    <div className="navbar-collapse collapse" id="navbarsExample01">
                        <ul className="navbar-nav mr-auto raleway">
                            <li className="nav-item active" onClick={this.handleNav}>
                                <a className="nav-link" href="/calendar" name='calendar'>Calendar <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item" onClick={this.handleNav}>
                                <a className="nav-link" href="/board" name='board'>Board</a>
                            </li>
                            <li className="nav-item" onClick={this.handleNav}>
                                <a className="nav-link" href="/members" name='members'>Members</a>
                            </li>
                            <li className="nav-item" onClick={this.handleNav}>
                                <a className="nav-link" href="/committee" name='committees'>Committees</a>
                            </li>
                            <li className="nav-item" onClick={this.handleNav}>
                                <a className="nav-link" href="/volunteers" name='volunteers'>Volunteers</a>
                            </li>
                        </ul>
                    </div>

                </nav>
                <div className='p-5'>
                    {this.renderDashboardSection(this.state.display)}
                </div>

                </div>
            </div>
            
        )
 
    }
}

export default Dashboard;