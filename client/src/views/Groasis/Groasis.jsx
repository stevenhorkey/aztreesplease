import React from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

import grow1 from '../../assets/images/groasis/grow1.jpg';
import grow2 from '../../assets/images/groasis/grow2.jpg';
import grow3 from '../../assets/images/groasis/grow3.jpg';
import grow4 from '../../assets/images/groasis/grow4.jpg';
import grow5 from '../../assets/images/groasis/grow5.jpg';
import grow6 from '../../assets/images/groasis/grow6.png';
import grow7 from '../../assets/images/groasis/grow7.png';
import grow8 from '../../assets/images/groasis/grow8.png';
import grow9 from '../../assets/images/groasis/grow9.png';

const style = {
    'width': '100%',
    // 'paddingBottom': '100%'
}

class Groasis extends React.Component{

    render(){

        return(
            <div id='groasis'>
                <h1 className='text-center mb-5 text-uppercase display-3'><strong>Groasis Waterboxx ©</strong></h1>

                <div className='row mb-4'>
                    <img className='col-md-4' src={grow6}/>
                    <div className='text-center my-5 font-weight-bold col-md-4'>
                        <h3>Triple 90 Benefits</h3>
                        <br/>
                        <div>
                            <div>90% cheaper than irrigation</div>
                            <div>90% less water than irrigation</div>
                            <div>90% survival rate</div>
                        </div>
                    </div>
                    <img className='col-md-4' src={grow7}/>
                </div>


                <div className='text-center mb-3'>
                    <a href='https://www.dropbox.com/sh/tbqw0rw4xxbbc77/AACkUJ8OwlxzFMftKnBaXA9Sa?dl=0' target='_blank'>
                        <button>
                            <h3>45 Scientific Documents on Groasis Water-saving Technology</h3>
                            <div>View Here</div>
                        </button>
                    </a>
                </div>

                <div>
                    <p>
                    The Waterboxx is an instrument that collects water by catching rainwater, produces and catches water from condensation. The Waterboxx distributes the collected water over an extended period, to the tree growing in the center of the Waterboxx. Furthermore, it stimulates the capillary formation of the soil; prevents the evaporation of groundwater; steadies the temperature around the roots; fights competitive weeds near the planted tree; and can even prevent damage by rodents. In this way, the Groasis Waterboxx stimulates optimal growth of young trees fragile in the desert heat. ​
                    </p>
                </div>

                <div>
                    <p>
                    The Waterboxx is new to the southwest desert, and we foresee other conservation groups and the municipalities placing large orders of the product, as our ground water levels and the water from the Colorado River are threatening a rationing of Tucson’s water by the year 2020. The Waterboxx will remedy the issue of desertification and low survival rates of newly planted shade trees.  ​
                    </p>
                </div>

                <div className='row'>
                    <button className='col-md-4'>
                        <a href='https://storage.googleapis.com/wzukusers/user-28372889/documents/5abe3f7203155T2QbGF1/Groasis%20Purchase%20Form.docx' target='_blank'>
                            <div className='' style={style}>
                                <h3>Groasis Purchase Form</h3>
                                <div>Please Email Your Order</div>
                            </div>
                        </a>
                    </button>
                    <div className='text-center my-5 col-md-4'>
                        <div className='font-weight-bold' style={style}>
                            <div>Anti-desertification</div>
                            <div>Reusable ten times</div>
                            <div>Made from polypropylene (plastic)</div>
                            <div>9-12 months to establish trees</div>
                            <div>Organic way of growing</div>
                            <div>Deep rooting system</div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <img src={grow9} style={style}/>
                    </div>
                </div>

                <div className='text-center mb-3'>
                    
                </div>

                <div className='row my-3'>
                    <div className='text-center col-lg-6 card py-3'>
                        <YouTube
                            videoId={'EXcw7BCOGaU'}                  // defaults -> null
                            id={'grow-vid-1'}                       // defaults -> null
                            className='yt-vid'                // defaults -> null
                            containerClassName={'youtube-vid'}       // defaults -> ''
                        />
                    </div>
                    <div className='text-center col-lg-3 col-md-6 card py-3'>
                        <YouTube
                            videoId={'gM1A8zygBcY'}                  // defaults -> null
                            id={'grow-vid-2'}                       // defaults -> null
                            className='yt-vid'                // defaults -> null
                            containerClassName={'youtube-vid'}       // defaults -> ''
                        />
                    </div>
                    <div className='text-center col-lg-3 col-md-6 card py-3'>
                        <YouTube
                            videoId={'XxGwxTD7E0Q'}                  // defaults -> null
                            id={'grow-vid-3'}                       // defaults -> null
                            className='yt-vid'                // defaults -> null
                            containerClassName={'youtube-vid'}       // defaults -> ''
                        />
                    </div>
                </div>

                <img className='col-sm-12' src={grow1}/>
                <img className='col-sm-12' src={grow2}/>
                <img className='col-sm-12' src={grow3}/>
                <img className='col-sm-12' src={grow4}/>
                <img className='col-sm-12' src={grow5}/>

                

            </div>
        )
    }
}

export default Groasis;