import React from 'react'
import img1 from '../img/home.jpg'
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
const Home = () => {
    return (
        <>
           
                <section id="header" className="d-flex align-items-center div1" >
                    <div className='container-fluid nav_bg'>
                        <div className='row'>
                            <div className='col-10 mx-auto'>
                                <div className='row'>
                                    <div className='col-md-6 pt-5-lg-0 order-2 order-lg-1 d-flex justify-content-center
                               flex-column '>
                                        <h1><strong>   Grow your business with <span id='head1' >LiableTech</span></strong> </h1>
                                        <h4 className='my-3'>
                                            We are team of talanented developer making websites
                                        </h4>
                                        <div className='mt-3'>
                                            <a href='' className='btn-get-started'>
                                                <button type="button" class="btn btn-outline-primary" >Get Started</button>
                                            </a>
                                        </div>
                                    </div>
 
                                    <div className='col-lg-6 order-1 header-img' >
                                        <Bounce>
                                            <img className='img-fluid animated' src={img1} alt='no img' />
                                        </Bounce>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
           
        </>
    )
}

export default Home;
