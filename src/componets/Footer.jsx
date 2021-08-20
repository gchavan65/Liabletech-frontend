import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear
    return (
        <>
        <footer className='footer'>
            <p>© {year}  <strong>LiableTech</strong>All rights reserved  | Terms & Conditions</p> 
        </footer>
            
        </>
    )
}

export default Footer
