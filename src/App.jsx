// import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Articles from './routes/Articles';
import Article from './routes/Article'
import FilteredArticlesCoding from './routes/Coding-articles';
import FilteredArticlesCooking from './routes/Cooking-articles';
import FilteredArticlesFootball from './routes/Football-articles';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Articles />}></Route>
      <Route path="/articles/:article_id" element={<Article />} />
      <Route path="/articles/coding" element={< FilteredArticlesCoding />}></Route>
      <Route path="/articles/cooking" element={< FilteredArticlesCooking />}></Route>
      <Route path="/articles/football" element={< FilteredArticlesFootball />}></Route>
    </Routes>
    </>
  )
}

export default App
