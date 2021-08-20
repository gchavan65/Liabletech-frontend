import React from 'react'
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';
const Common = (props) => {
    return (
        <>
            <LightSpeed>
                <section id="header" className="d-flex align-items-center div1" >
                    <div className='container-fluid nav_bg'>
                        <div className='row'>
                            <div className='col-10 mx-auto'>
                                <div className='row'>
                                    <div className='col-md-6 pt-5-lg-0 order-2 order-lg-1 d-flex justify-content-center
                               flex-column '>
                                        <h1><strong>  {props.names} <span id='head1' >LiableTech</span></strong> </h1>
                                        <h4 className='my-3'>
                                          {props.info}
                                        </h4>
                                        <div className='mt-3'>
                                            <a href='Tel:+918329386658' className='btn-get-started'>
                                                <button type="button" class="btn btn-outline-primary" >{props.btname}</button>
                                            </a>S
                                        </div>
                                    </div>

                                    <div className='col-lg-6 order-1 header-img' >
                                        <Bounce>
                                            <img className='img-fluid animated' src={props.img} alt='no img' />
                                        </Bounce>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </LightSpeed>
        </>
    )
}

export default Common;
