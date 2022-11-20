import React from 'react'

const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
    return (
        <div className='flex flex-col py-6 mx-5'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col bg-white rounded shadow-md p-5'>
                    <h3 className='font-normal text-4xl text-center text-amber-900'>Add a Post</h3>
                    <hr />
                    <label className='mt-3 font-thin text-3xl text-gray-700'>Title</label>
                    <input className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm' type='text' placeholder='Enter title' required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                    <label className='mt-3 font-thin text-3xl text-gray-700'>Body</label>
                    <textarea className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm' type='text' placeholder='Enter body' value={postBody} onChange={(e) => setPostBody(e.target.value)} />
                    <button className='mt-10 py-4 font-thin text-xl text-green-100 bg-green-700 rounded-lg w-32 shadow-md hover:font-normal hover:bg-green-500 hover:text-white hover:shadow-lg' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewPost