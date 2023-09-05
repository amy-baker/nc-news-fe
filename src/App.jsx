// import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Articles from './routes/Articles';
import Article from './routes/Article'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Articles />}></Route>
      <Route path="/articles/:article_id" element={<Article />} />
    </Routes>
    </>
  )
}

export default App
