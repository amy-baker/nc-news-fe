import { useState, useEffect } from "react";
import { fetchAllArticles } from "../../utils/api";
import '../styles/Articles.css'
import { Link } from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchAllArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false);
        })
    }, []);

    const getDate = (date) => {
        return date.substring(0, 10)
    }

    if (isLoading) {
        return(
            <h2>Loading...</h2>
        )
    }
    return(
        <section className="container">
            {
                articles.map((article) => {
                return(
                   
                    <article className='article' key={article.article_id}>
                    <Link className='link' to={`/articles/${article.article_id}`}>
                        <h1 className='title'>{article.title}</h1>
                        <img className='image' src={article.article_img_url} alt={`image related to ${article.topic}`}/>
                        <p>Published {getDate(article.created_at)}</p>
                        </Link>
                    </article>
                    
                )
            })}
        </section>
        
    )
}

export default ArticleList