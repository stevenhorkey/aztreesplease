import React from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';

import './auth.css';

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

            axios.post('/api/auth/login',{
                email: this.state.email,
                password: this.state.password
            }).then(res => {
                console.log(res);
                localStorage.setItem('jwtToken', res.data.token);
                // Redirect to team page if success
                this.setState({
                    redirect: true
                })
            }).catch((err) => {
                console.log(err);
                this.setState({
                    message: 'There has been an issue with the system. Please contact Steven at code@stevenhorkey.com'
                });
            })
    }

    render(){
        if(this.state.redirect){
            return(
                <Redirect to='/team' />
            )
        } else{
            return(
                <div className='container p-5 text-justify'>
                
                <div className='white-modal col-md-6 p-5 mx-auto' id='login'>
                    <h1 className='text-center mb-5 text-uppercase display-3 mt-2'><strong>Login</strong></h1>
    
                    <div className=''>
                        <p className='mx-auto text-center'>Please login if you are a team member and would like to access additional content or <Link to={'/signup'}><a>sign up here</a></Link>...</p>
                        <form className='mx-auto'>
                            <input className='w-100 d-block my-3 p-1' type='text' name='email' onChange={this.handleChange} value={this.state.email} placeholder='Email' required/>
                            <input className='w-100 d-block my-3 p-1' type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='Password' required/>
                            <p className='w-100 d-block mb-3 p-1 text-center small text-red'>{this.state.message}</p>
                            <button className='w-100 d-block my-3 p-2' onClick={this.login.bind(this)}>Submit</button>
                        </form>
                    </div>
    
                </div>
                </div>
                
            )
        }
        
    }
}

export default Login;