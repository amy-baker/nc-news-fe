import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import '../styles/Article.css'


const FullArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetchArticleById(article_id).then((response) => {
            setArticle(response);
        })
    }, [article_id])
    
    const getDate = (date) => {
       if (article.length !== 0) {
        return date.slice(0, 10)
       }
    }

   

    return(
        <div className="full-article">
            <p className="topic">{article.topic}</p>
            <p className="date">{getDate(article.created_at)}</p>
            <h1 className="title">{article.title}</h1>
            <h3 className='author'>{article.author}</h3>
            <img className='image'src={article.article_img_url} alt={`image related to ${article.topic}`}/>
            <p className='text'>{article.body}</p>
            <p className='votes'>{article.votes} votes</p>
            <p className='comments'>{article.commentCount} comments</p>
        </div>
    )
}

export default FullArticle