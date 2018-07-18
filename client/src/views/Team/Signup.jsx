import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

import './auth.css';

class Login extends React.Component{

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        message: '',
        redirect: false
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    };

    validateEmail(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword(password){
        if(password.length > 5){
            return true;
        } else {
            return false;
        }
    }

    checkSubmit = (event) => {
        event.preventDefault();

        let email = this.state.email;
        let password = this.state.password;
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;

        if (this.validateEmail(email) && this.validatePassword(password) && firstName !== '' && lastName !== ''){
            this.signup();
        } else {
            this.setState({
                message: 'Please confirm that you have submitted a valid email, both your first and last name, and a password greater than 6 characters'
            })
        }

    }

    signup(){
        // Post input values to api and return appropriate response
        axios.post('/api/auth/signup',{
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }).then(res => {
            console.log(res);
            if(res.data.success){
                this.setState({
                    redirect: true
                })
            } else {
                this.setState({
                    message: res.data.msg
                })
            };
        }).catch(err => {
            console.log(err);
            this.setState({
                message: 'There has been an issue with the system. Please contact Steven at code@stevenhorkey.com'
            });
        })
    }

    render(){
        // Redirect to login if user created
        if(this.state.redirect){
            return(
                <Redirect to='/login' />
            )
        } else{
        // Render signup page if user has yet to create user or be logged in
            return(
                <div className='container p-5 text-justify'>
                
                <div className='white-modal col-md-6 p-5 mx-auto' id='signup'>
                    <h1 className='text-center mb-5 text-uppercase display-3 mt-2'><strong>Sign Up</strong></h1>
    
                    <div className=''>
                        <p className='mx-auto text-center'>Please sign up if you would like to access exclusive team member content or <Link to={'/login'}>login</Link>...</p>
                        <form className='mx-auto'>
                            <div className=''>
                                <span className=''>
                                    <input className='col-md-6 d-block my-3 p-1 float-left' type='text' name='firstName' onChange={this.handleChange} value={this.state.firstName} placeholder='John' required/>
                                    <input className='col-md-6 d-block my-3 p-1 float-right' type='text' name='lastName' onChange={this.handleChange} value={this.state.lastName} placeholder='Gardner' required/>
                                </span>
                                <input className='col-12 w-100 d-block my-3 p-1' type='text' name='email' onChange={this.handleChange} value={this.state.email} placeholder='johngardner@email.com' required/>
                                <input className='col-12 w-100 d-block my-3 p-1' type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='********' required/>
                                <p className='w-100 d-block mb-3 p-1 text-center small text-red'>{this.state.message}</p>
                                <button className='w-100 d-block my-3 p-2' onClick={e => {this.checkSubmit(e)}}>Sign Me Up</button>
                            </div>
                        </form>
                    </div>
    
                </div>
                </div>
                
            )
        }
        
    }
}

export default Login;