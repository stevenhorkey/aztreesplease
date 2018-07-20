import React from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';

class CommitteesDash extends React.Component{

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
                title='Committee Documents'
                url='#'
                />
                <Card
                title='Committee 1'
                url='#'
                />
                <Card
                title='Committee 2'
                url='#'
                />
                <Card
                title='Committee 3'
                url='#'
                />
            </div>
        )
    }
}

export default CommitteesDash;