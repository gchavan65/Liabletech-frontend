import React from 'react';
import Card from '../componets/Card'
import Sdata from '../componets/Sdata'

const Service = () => {
    return (
        <>
         <div className='my-5'>
             
                <div className='container-fluid mb-5 my-5 '>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                        <div className='row'>
                                <h1 className='text-center' >Our Services</h1>
                          {
                              Sdata.map((val, ind)=>{
                                return (  <Card
                                     imgsrc={val.imgsrc}
                                     title={val.title}
                                     info={val.info}
                                     key = {val.id} 
                                  />)
                              })
                          }
                        </div>  

                        </div>
                    </div>
                </div>
         </div>  
        </>
    )
}

export default Service
