import React from 'react'
import { MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Missing = () => {
    return (
        <div className='text-4xl font-thin text-orange-400 flex flex-col justify-center items-center py-6'>
            <p>404 Page not found</p>
            <Link to='/'>
                <p className='flex justify-center items-center hover:text-gray-700 font-normal p-3 hover:bg-orange-400 rounded m-3'><MdHome />Home</p>
            </Link>
        </div>

    )
}

export default Missing