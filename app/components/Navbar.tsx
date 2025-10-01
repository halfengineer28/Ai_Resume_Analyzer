import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to={"/"} >
                <p className='text-gradient font-bold text-2xl'>Resumind</p>
            </Link>
            <Link to={"/upload"} className='primary-button w-fit'>
                Upload Resume

            </Link>

        </nav>
    )
}

export default Navbar
