import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

class Login extends React.Component{

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

    login(event){
        event.preventDefault();

        // If password is correct, direct to proper google docs page.
        if(this.state.password === 'AZtreesplease#27'){
            this.setState({
                redirect : true
            })
            
        } else {
            this.setState({
                message: 'Incorrect password. Please try again or contact a Trees Please official for the correct login information.'
            })
            console.log(this.state.message);
        }
    }

    render(){
        if(this.state.redirect){
            return(
                <Redirect to='team-content' />
            )
        } else{
            return(
                <div id='login'>
                    <h1 className='text-center mb-5 text-uppercase display-3'><strong>Login</strong></h1>
    
                    <div className='row'>
                        <p className='mx-auto'>Please login if you are a team member and would like to access additional content...</p>
                        <form className='col-md-6 mx-auto'>
                            {/* <input className='w-100 d-block my-3 p-1' type='text' name='email' onChange={this.handleChange} value={this.state.email} placeholder='Email'/> */}
                            <input className='w-100 d-block my-3 p-1' type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='Password'/>
                            <p className='w-100 d-block mb-3 p-1 text-center small text-red'>{this.state.message}</p>
                            <button className='w-100 d-block my-3 p-2' onClick={this.login.bind(this)}>Submit</button>
                        </form>
                    </div>
    
                </div>
            )
        }
        
    }
}

export default Login;