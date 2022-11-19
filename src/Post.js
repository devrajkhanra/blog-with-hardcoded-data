import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <div className='flex flex-col mx-7 w-50 bg-gradient-to-r from-indigo-50 to-blue-50 my-4 px-2 rounded shadow-lg hover:shadow-2xl hover:from-white hover:to-white'>
            <Link to={`/post/${post.id}`}>
                <h3 className='font-normal text-2xl text-gray-600 pt-2 hover:text-gray-800'>{post.title}</h3>
                <p className='font-bold text-sm text-gray-900'>{post.datetime}</p>
            </Link>
            <hr />
            <p className='font-thin text-xl text-gray-700 pb-2'>{
                (post.body).length <= 25 ? post.body : `${(post.body).slice(0, 25)} ...`}
            </p>
        </div>
    )
}

export default Post