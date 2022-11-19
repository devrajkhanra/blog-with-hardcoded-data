import React from 'react'
import { Link } from 'react-router-dom'
// import { FaHome } from 'react-icons/fa'
import { MdHome, MdPostAdd } from 'react-icons/md'

const Nav = ({ search, setSearch }) => {
    return (
        <nav className='sm:flex justify-center items-center bg-gray-800'>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    className='pl-6 font-thin text-xl rounded-3xl outline-sky-200 hover:outline-sky-600'
                    type='text'
                    placeholder='Search post'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </form>
            <ul className='text-xl font-thin text-gray-500 flex justify-evenly items-center'>
                <li className='text-3xl px-3 hover:text-sky-600 hover:bg-white py-3'><Link to='/'><MdHome /></Link></li>
                <li className='text-3xl px-3 hover:text-sky-600 hover:bg-white py-3'><Link to='/post'><MdPostAdd /></Link></li>
                <li className='px-3 hover:text-sky-600 hover:bg-white py-3'><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav