import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Products', path: '/products'},
        {id: 3, name: 'Orders', path: '/orders'},
        {id: 4, name: 'Contact Us', path: '/contactus'},
      ]
    return (
        <>
            <nav className='bg-purple-200 w-full'>
               
            <div className="h-6 w-6 text-blue-500 md:hidden " onClick={() => setOpen(!open)}>
            {
                     open ?
                     <XMarkIcon />
                     : 
                    <Bars3Icon />
                }
            </div>

                <ul className={`md:flex justify-center absolute duration-500 ease-in-out md:static w-full ${open ? 'top-6' : 'top-[-120px]'}`}>
                    {
                        routes.map ( route => <Link route={route} key={route.id}></Link>)
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar;