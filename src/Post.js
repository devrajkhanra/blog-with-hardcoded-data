import React from 'react'

const Post = ({ post }) => {
    return (
        <>
            <h3 className='font-thin text-2xl'>{post.title}</h3>
            <p className='font-thin'>{post.body}</p>
            <br />
        </>
    )
}

export default Post