import React from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';

class MembersDash extends React.Component{

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
        console.log(this.state.password)
    };

    render(){
        
        return(
            <div>
                <Card
                title='Member Documents'
                url='#'
                />
                <Card
                title='Member 1'
                url='#'
                />
                <Card
                title='Member 2'
                url='#'
                />
                <Card
                title='Member 3'
                url='#'
                />
            </div>
        )
 
    }
}

export default MembersDash;