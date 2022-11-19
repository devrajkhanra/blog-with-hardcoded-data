import React from 'react'

const Header = ({ title }) => {
    return (
        <header className='bg-indigo-800 sticky-top-0 z-10'>
            <div className='max-w-4xl mx-auto p-4 flex justify-evenly items-center'>
                <h1 className='font-thin text-4xl text-indigo-100'>{title}</h1>
            </div>

        </header>
    )
}

export default Header