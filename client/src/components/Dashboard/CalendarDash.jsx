import React from 'react';
import axios from 'axios';
import Iframe from 'react-iframe'


class CalendarDash extends React.Component{

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
        console.log(this.state.password)
    };

    style = {
        embed: {
            paddingBottom: '75%'
        }
    }

    render(){
        
        return(
            <div>
                <a href='https://www.facebook.com/pg/aztreesplease.org/events/?ref=page_internal' target='_blank'><button className='btn btn-secondary w-100 mb-3 text-uppercase'>See Events on Facebook</button></a>
                <Iframe url="https://calendar.google.com/calendar/embed?src=aztreesplease%40gmail.com&ctz=America/Phoenix"
                width="100%"
                height='500px'
                id="myId"
                className=""
                display="initial"
                position="relative"
                />
            </div>
        )
 
    }
}

export default CalendarDash;