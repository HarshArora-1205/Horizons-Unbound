// Imports
import React from 'react';

// Footer Component
const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 px-10 py-10'>
        <div className="justify-between mx-auto gap-16 sm:flex">
            <div className="mt-16 basis-1/2 sm:mt-0">
                <h4 className="font-bold">
                    Horizons Unbound
                </h4>
                <p className='my-5'>
                    Join us on Horizons Unbound as we navigate the ever-evolving landscape of AI, exploring its promises, challenges, and the transformative power it holds for shaping our collective future.
                </p>
                <p>
                    © Horizons Unbound | 2023 | All Rights Reserved.
                </p>
            </div>
            <div className="mt-16 basis-1/4 sm:mt-0">
                <h4 className="font-bold">
                    Links
                </h4>
                <p className='my-5'>
                    Massa Orci Senectus
                </p>
                <p className='my-5'>
                    Some Random Link
                </p>
                <p>
                    Ullamcorper Vivamus
                </p>
            </div>
            <div className="mt-16 basis-1/4 sm:mt-0">
                <h4 className="font-bold">
                    Contact Us
                </h4>
                <p className='my-5'>
                    Massa Orci Senectus Ulle Buller Road
                </p>
                <p>
                    (333)425-6825
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;