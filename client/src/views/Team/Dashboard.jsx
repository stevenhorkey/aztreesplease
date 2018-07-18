import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

import './auth.css';

class Dashboard extends React.Component{

    state = {
        password: '',
        message: '',
        redirect: false
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
        console.log(this.state.password)
    };

    componentDidMount(){
        console.log(this.props)
        
    }

    

    render(){
        
        return(
            <div className='container p-5 text-justify'>
            
            <div className='white-modal col-md-6 p-5 mx-auto' id='Dashboard'>
                <p>{this.props.user.firstName}</p>

            </div>
            </div>
            
        )
 
    }
}

export default Dashboard;