import React from 'react';
import axios from 'axios';

class Card extends React.Component{

    render(){
        
        return(
            <div class="card mb-4">
                <a href={this.props.url} target='_blank'>
                    <div class="card-body text-center">
                        <h3>{this.props.title}</h3>
                    </div>
                </a>
            </div>
        )
 
    }
}

export default Card;