import React from 'react'
import {useState} from 'react'

const Contact = () => { 
    const [data, updatevalue] = useState({
        fname:'',
        mobno:'',
        email:'',
        message:'',
    })
    const update = (event)=>{
        const { value, name } = event.target;
        updatevalue ((privios)=>{
        return {  
             ...privios,
            [name]:value,}
        })
    }
    const formsubmit = (event)=>{
         event.preventDefault();
         
         alert(`Hi my name is ${data.fname} my phone no is ${data.phone} , my email is ${data.email} , i have query about ${data.message}`)
    }
    return (
     

        <>
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                        <h1 className='text-center'>Contact Us</h1>
                        <div className='container contact_div'>
                            <div className='row'>
                                <div className='col-md-6 mx-auto'>
                                <form onSubmit={formsubmit}> 
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                            <input value={data.fname} type="text" onChange={update} name='fname' type="name" className="form-control" id="exampleFormControlInput1" placeholder="Fullname"/>
</div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                            <input value={data.mobno} onChange={update} name='mobno' type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                            <input value={data.email} onChange={update} name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlTextarea1" className="form-label">Messange</label>
                                            <textarea value={data.message} onChange={update} name='message' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        <button type="submit" className="btn btn-outline-warning" >Submit</button>
                                        
                                </form>

                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
         
        </>
    )
}

export default Contact
