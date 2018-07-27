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
                url='https://drive.google.com/drive/folders/1utHQRovogfFscGu18VVT730_-J9FHADi'
                />
                <Card
                title='Fundraising & Events Committee'
                url='https://www.facebook.com/groups/tpfestival/about/'
                />
                <Card
                title='Garden Committee'
                url='https://www.facebook.com/groups/tpgardens/about/'
                />
                <Card
                title='Habitat Restoration Committee'
                url='https://www.facebook.com/groups/tprestoration/about/'
                />
            </div>
        )
    }
}

export default CommitteesDash;