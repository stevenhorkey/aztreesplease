import React from 'react';
import YouTube from 'react-youtube';

class Groasis extends React.Component{
    render(){
        return(
            <div id='groasis'>
                <h1 className='text-center mb-5 text-uppercase display-3'><strong>Groasis Waterboxx ©</strong></h1>

                <div className='text-center my-5 font-weight-bold'>
                    <h3>Triple 90 Benefits</h3>
                    <br/>
                    <div>
                        <div>90% cheaper than irrigation</div>
                        <div>90% less water than irrigation</div>
                        <div>90% survival rate</div>
                    </div>
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

                <div className='text-center my-5'>
                    <div>
                        <div>Anti-desertification</div>
                        <div>Reusable ten times</div>
                        <div>Made from polypropylene (plastic)</div>
                        <div>9-12 months to establish trees</div>
                        <div>Organic way of growing</div>
                        <div>Deep rooting system</div>
                    </div>
                </div>

                <div className='text-center'>
                    <button>
                        <h3>Groasis Purchase Form</h3>
                        <div>Please Email Your Order</div>
                    </button>
                </div>

                <div className='text-center'>
                    {/* <YouTube
                        videoId={'cw7BCOGaU'}                  // defaults -> null
                        id={string}                       // defaults -> null
                        className='col'                // defaults -> null
                        containerClassName={string}       // defaults -> ''
                        opts={obj}                        // defaults -> {}
                        onReady={func}                    // defaults -> noop
                        onPlay={func}                     // defaults -> noop
                        onPause={func}                    // defaults -> noop
                        onEnd={func}                      // defaults -> noop
                        onError={func}                    // defaults -> noop
                        onStateChange={func}              // defaults -> noop
                        onPlaybackRateChange={func}       // defaults -> noop
                        onPlaybackQualityChange={func}    // defaults -> noop
                    /> */}
                </div>

            </div>
        )
    }
}

export default Groasis;