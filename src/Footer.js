import React from 'react'

const Footer = () => {
    return (
        <footer className='static bottom-0 h-7 flex grow bg-indigo-800 justify-center text-indigo-100 min-w-full'>
            <h2>App &copy; {new Date().getFullYear()}</h2>
        </footer>
    )
}

export default Footer