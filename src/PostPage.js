import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <div className='m-5 bg-white p-3 flex flex-col rounded'>
            {post &&
                < >
                    <div className='flex flex-row justify-center items-center'>
                        <h2 className='mx-2 font-normal text-2xl text-gray-600 pt-2 hover:text-gray-800'>{post.title}</h2>
                        <p className='font-thin text-sm mx-2'>{post.datetime}</p>
                        <button className='text-3xl text-red-800 outline-1 hover:text-red-500 hover:rounded-full hover:bg-red-200' onClick={() => handleDelete(post.id)}><MdDelete /></button>
                    </div>
                    <hr />
                    <p className='font-thin text-xl py-2 text-gray-700 '>{post.body}</p>
                </>
            }
            {!post &&
                <>
                    <h2>Well the post is not found!</h2>
                    <p>
                        <Link to='/'><button>Return to HomePage</button></Link>
                    </p>
                </>
            }
        </div>
    )
}

export default PostPage