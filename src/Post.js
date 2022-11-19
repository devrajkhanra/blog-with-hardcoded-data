import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    return (
        <div className='flex flex-col mx-3 bg-white my-4 px-2'>
            <Link to={`/post/${post.id}`}>
                <h3 className='font-normal text-2xl text-gray-600'>{post.title}</h3>
                <p className='font-thin text-sm text-gray-900'>{post.datetime}</p>
            </Link>
            <hr />
            <p className='font-thin text-xl text-gray-600'>{
                (post.body).length <= 25 ? post.body : `${(post.body).slice(0, 25)} ...`}
            </p>
        </div>
    )
}

export default Post