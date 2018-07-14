import React from 'react';

import amanda from '../../assets/images/amanda.png';
import GA from '../../assets/images/ga.png';
import adrian from '../../assets/images/adrian.png';
import steven from '../../assets/images/me&pig.jpg';

class Staff extends React.Component{
    render(){
        return(
            <div id='staff'>
                <h1 className='text-center mb-5 text-uppercase display-3'><strong>Staff & Bios</strong></h1>

                <div className='text-left'>
                    <div className='row'>
                        <div class="card mb-4 w-100">
                            <div class="card-body text-center">
                                <img width='200px' src={amanda}/>
                                <div className='mt-4'>
                                    <h3>Amanda N Bickel, BSAS, MSAC - President, Garden Manager</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="card mb-4 w-100">
                            <div class="card-body text-center">
                                <img width='200px' src={GA}/>
                                <div className='mt-4'>
                                    <h3>Gabriel P Davila, BSB - Vice President - Director of Parks Clean-up</h3>
                                    <br/>
                                    <h3>Angel Coronado - Special Needs Coordinator</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="card mb-4 w-100">
                            <div class="card-body text-center">
                                <img width='200px' src={adrian}/>
                                <div className='mt-4'>
                                    <h3>Adrian J Marks, BSBA, MSA - Treasurer, Project Manager - Purity Painting Journeyman</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="card mb-4 w-100">
                            <div class="card-body text-center">
                                <img width='200px' src={steven}/>
                                <div className='mt-4'>
                                    <h3>Steven Horkey, University of Arizona Cognitive & Computer Science Student - Full Stack Web Developer - Web Design Intern</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Staff;