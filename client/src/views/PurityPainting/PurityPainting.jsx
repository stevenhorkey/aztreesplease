import React from 'react';

import './PurityPainting.css';

import pp1 from '../../assets/images/purityPainting/ANTIQUE-TABLE-FLOWERS.jpg';
import pp2 from '../../assets/images/purityPainting/CLOUDS--VENETIAN.jpg';
import pp3 from '../../assets/images/purityPainting/DOOR-GLAZE.jpg';
import pp4 from '../../assets/images/purityPainting/EXTERIOR-11750-E-BRAODWAY.jpg';
import pp5 from '../../assets/images/purityPainting/EXTERIOR.jpg';
import pp6 from '../../assets/images/purityPainting/F.jpg';
import pp7 from '../../assets/images/purityPainting/FACTORY-REFINISH.jpg';
import pp8 from '../../assets/images/purityPainting/FAUX-AND-FLORAL.jpg';
import pp9 from '../../assets/images/purityPainting/FAUX-FIREPLACE.jpg';
import pp10 from '../../assets/images/purityPainting/FULL-CRACKLE.jpg';
import pp11 from '../../assets/images/purityPainting/GLAZE-DOOR.jpg';
import pp12 from '../../assets/images/purityPainting/GLAZE-LEATHER-DOOR.jpg';
import pp13 from '../../assets/images/purityPainting/MANDALA-PIANOS.jpg';
import pp14 from '../../assets/images/purityPainting/MARBLE-STAIRCASE.jpg';
import pp15 from '../../assets/images/purityPainting/VENETIAN-PLASTER-ORANGE---Copy---Copy.jpg';
import pp16 from '../../assets/images/purityPainting/WATER-MOSAIC---Copy---Copy.jpg';

const images = [pp1,pp2,pp3,pp4,pp5,pp6,pp7,pp8,pp9,pp10,pp11,pp12,pp13,pp14,pp15,pp16];

class PurityPainting extends React.Component{

    
    
    render() {

        
        return (
            <div id='purity-painting'>
                <h1 className='text-center mb-5 text-uppercase display-3'><strong>Purity Painting & Finishing</strong></h1>

                <div className='text-center my-3'>
                    <h3>ALL PROFITS GO TOWARDS FUNDING TREES PLEASE!</h3>
                    <p>
                    Our Purity Painting and Finishing team does more than just painting! We have 20+ years experience with custom interior & exterior painting, carpentry, landscaping & irrigation, HVAC, electrical, as well as other home repairs & rehabs! Beautiful custom built fountains and mosaics are a favorite!  ​
                    </p>
                </div>
                <div className='text-center'>
                    <h3>
                    To receive a quote, or if you want additional information, please contact one of our representatives below.
                    </h3>
                </div>

                <div className='mt-4'>
                    <p className='text-center'>
                      Adrian Marks, Primary Operator <br/>
                      520-308-0222 <br/>
                      adrian@aztreesplease.org <br/>
                    </p>
                    <p className='text-center'>
                      Amanda Bickel, PR Rep <br/>
                      ​574-315-5172 <br/>
                      amanda@aztreesplease.org <br/>
                    </p>
                </div>


                
                {images.map((element,key) => {
                  return(
                    <div className='card col-md-12 col-sm-6 py-3'>
                      <img className='' src={element}/>
                    </div>
                  )
                })}
                
            </div>
        )
    }
}

export default PurityPainting;