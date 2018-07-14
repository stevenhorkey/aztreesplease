import React from 'react';

import donateImg from '../../assets/images/donate-button.png';

class Donations extends React.Component{
    render(){
        return(
            <div id='donations'>
                <h1 className='text-center mb-5 text-uppercase display-3'><strong>Donations</strong></h1>

                <div className='text-center mb-5'>
                <a className="nav-link js-scroll-trigger" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BJWK8PC586A38" target='_blank'><img width='200px' src={donateImg}/></a>
                </div>

                <div>
                    <h3>Trees Please is always in need of the following items:</h3>
                    <br/>
                    <ul>
                        <li>BUILDING MATERIALS</li>       
                        <li>GARDEN TOOLS</li>      
                        <li>ANIMAL FEED (GOAT SWEET FEED & CHICKEN CRUMBLE)</li>
                        <li>CONSTRUCTION TOOLS</li>       
                        <li>ART SUPPLIES</li>       
                        <li>STORAGE CONTAINERS</li>       
                        <li>SEEDS</li>       
                        <li>HAY (ALFALFA & STRAW)</li> 
                        <li>TREES, BUSHES, CACTI</li>       
                        <li>SOIL</li>       
                        <li>COMPOST BUCKETS</li>       
                        <li>HOSES & ATTACHMENTS</li>     
                        <li>VEHICLES</li>    
                        <li>IRRIGATION SUPPLIES</li>       
                        <li>POSTS</li>       
                        <li>BEAMS</li>     
                        <li>SEATING</li>   
                        <li>PLAYGROUND EQUIPMENT</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Donations;