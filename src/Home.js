import React from 'react'
import Feed from './Feed'


const Home = ({ posts }) => {
    return (
        <div className='mb-auto'>
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p className=''>No posts yet!</p>
            )}
        </div>
    )
}

export default Home