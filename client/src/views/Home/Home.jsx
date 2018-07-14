import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './Home.css';

import farmImg from '../../assets/images/tp-garden.jpg'

class Home extends Component{
    render(){
        return(
            <Fragment>
                <section className="page-section about clearfix">
                    <div className="container">
                        <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={farmImg} alt=""/>
                        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                            <span className="section-heading-upper">Planting Seeds</span>
                            <span className="section-heading-lower">of Awareness</span>
                            </h2>
                            <p className="mb-3 text-center">Welcome to Trees Please! Check us out at our FREE Community Garden!
                            </p>
                            <div className="intro-button mx-auto">
                            <a className="btn btn-primary btn-xl raleway" href="#visit">Visit Us Today!</a>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    </section>
    
                    <section className="page-section mission">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-9 mx-auto">
                            {/* <!-- Begin MailChimp Signup Form --> */}
                            <div id="mc_embed_signup">
                            <form action="https://aztreesplease.us18.list-manage.com/subscribe/post?u=8b8558edea2e538667a9cdd65&amp;id=aa92ea29ea" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate px-3" target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll">
                            <label htmlFor="mce-EMAIL" className='text-center text-uppercase raleway email-title'>Subscribe to our mailing list</label>
                            <p className='email-p'>Stay updated with events, workshops, volunteer opportunties, and garden fun!</p>
                            <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email address" required/>
                                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                <div id='asdf' aria-hidden="true"><input type="text" name="b_8b8558edea2e538667a9cdd65_aa92ea29ea" tabIndex="-1" value=""/></div>
                                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button mx-auto raleway"/></div>
                                </div>
                            </form>
                            </div>
    
                            {/* <!--End mc_embed_signup--> */}
                            <div className="mission-inner text-center rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">AZ Trees Please</span>
                                <span className="section-heading-lower">Our Mission</span>
                            </h2>
                            <p className="mb-0">To support native desert habitat restoration, sustainable living practices, and community interdependence through education and action! We are strong believers in the importance of environmental stewardship, the impact we have on it within our communities, the importance of growing and eating from local sources, and promoting the healing of our planet and its people. We do this through community gardening, horticultural/animal therapy, creative expression, stewardship, and service. At-risk (special needs, handicapped, elderly, low income, displaced children, and mentally challenged) members of our community are our priority! </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
    
                    <section className="page-section contact clearfix" id='visit'>
                    <div className="container">
                        <div className="intro row">
                        <iframe id='map' className='col-md-6 mb-3' width='100%' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1687.4224163150823!2d-110.99428765475753!3d32.23534424073014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d67133f792d4ff%3A0x76a5fea736028016!2sTrees+Please!5e0!3m2!1sen!2sus!4v1527123655219" frameBorder="0" allowFullScreen></iframe>
                        <div className='col-md-6'>
                            <div id='contact-info' className="intro-text left-0 text-center bg-faded p-5 rounded text-center">
                            <h2 className="section-heading mb-4">
                            <span className="section-heading-upper">Get In Touch</span>
                            <span className="section-heading-lower">With Us</span>
                            </h2>
                            <p className='text-center'>1315 W Speedway Blvd, Tucson, AZ 85745</p>
                            <p className='text-center'>(574) 315-5172</p>
                            <p className='text-center'>info@aztreesplease.org</p>
                            
                            <div className="intro-button mx-auto">
                            <a className="btn btn-primary btn-xl text-black" href="mailto:info@aztreesplease.org">Email Us</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Home;