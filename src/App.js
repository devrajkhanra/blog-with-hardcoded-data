import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'The standard Lorem Ipsum passage, used since the 1500s',
      datetime: new Date().toDateString(),
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
      datetime: new Date().toDateString(),
      body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
      id: 3,
      title: 'The standard Lorem Ipsum passage, used since the 1500s',
      datetime: new Date().toDateString(),
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 4,
      title: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
      datetime: new Date().toDateString(),
      body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
  ])

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResult] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filteredResults = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchResult(filteredResults.reverse())

  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = new Date().toDateString()
    const newPost = { id, title: postTitle, datetime: datetime, body: postBody }
    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)
    navigate('/')
  }

  return (
    <div className="App radial-blue min-h-screen">
      <Header title='Blog' />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route exact path='/' element={<Home posts={searchResults} />} />
        <Route exact path='/post' element={<NewPost postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} handleSubmit={handleSubmit} />} />
        <Route exact path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
