import React from 'react';
 import Fade from 'react-reveal/Fade';


const Card = (props) => {
    return (
        <>
            <Fade>

                <div className="card mt-5 mx-auto border-mute" style={{width:'400px'} }>
                    <img src={props.imgsrc} className="card-img-top" alt="No imges" style={{ width: '400px' } }/>
                    <div className="card-body  "style={{ width: '400px' } }>
                        <h4 className="card-title font-weight-bold">{props.title}</h4>
                        <p className="card-text">{props.info}</p>
                            <a href="#" className="  btn btn-outline-primary">Click me</a>
                        </div>
</div>

            

            </Fade>
        </>
    )
}

export default Card
