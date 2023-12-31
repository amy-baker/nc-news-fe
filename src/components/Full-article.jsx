import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import '../styles/Article.css'



const FullArticle = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticleById(article_id).then((response) => {
            setArticle(response);
            setIsLoading(false)
        })
    }, [article_id])
    
    const getDate = (date) => {
        if (article && article.created_at) {
            return date.slice(0, 10);
        }
        return "";
    }

    if (isLoading) {
        return(
            <h2>Loading...</h2>
        )
    }

            return(
        <article className="full-article">
        <div className='topic-banner'>
            <p className="topic">{article.topic}</p>
            </div>
            <h1 className="full-title">{article.title}</h1>
            <div className='article-details'>
            <h3 className='author'>{article.author}</h3>
            <h3 className="date">{getDate(article.created_at)}</h3>
            </div>
            <img className='image'src={article.article_img_url} alt={`image related to ${article.topic}`}/>
            <p className='text'>{article.body}</p>
            <p className='comments'>{article.commentCount} comments</p>
        </article>
    )
}

export default FullArticle
