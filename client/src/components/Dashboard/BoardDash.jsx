import React from 'react';
import axios from 'axios';

class BoardDash extends React.Component{

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
        console.log(this.state.password)
    };

    render(){
        
        return(
            <div>

            </div>
        )
 
    }
}

export default BoardDash;