import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

import './auth.css';

class Dashboard extends React.Component{

    state = {
        password: '',
        message: '',
        display: '',
        redirect: false
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
        console.log(this.state.password)
    };

    renderDashboardSection(section) {
        // switch (section) {
        //   case 'board':
        //     return <BoardDash />;
        //   case 'volunteers':
        //     return <VolunteerDash />;
        //   case 'members':
        //     return <MembersDash />;
        //   case 'committees':
        //     return <CommitteesDash />;
        //   default:
        //     return <CalendarDash />;
        // }
    }

    render(){
        
        return(
            <div className='container bg-white text-justify pt-5 px-0'>
            <div className='white-modal mx-auto' id='Dashboard'>
                <h1 className='text-center mb-5 text-uppercase display-5'><strong>Team Dashboard</strong></h1>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">{this.props.user.firstName} {this.props.user.lastName}</a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-uppercase">Menu</span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarsExample01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" name='calendar'>Calendar <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" name='board'>Board</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" name='members'>Members</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" name='committees'>Committees</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" name='volunteers'>Volunteers</a>
                            </li>
                        </ul>
                    </div>

                </nav>
                <div className='p-5'>
                        <p>{this.props.user.firstName}</p>
                        {this.renderDashboardSection(this.state.display)}
                </div>

                </div>
            </div>
            
        )
 
    }
}

export default Dashboard;