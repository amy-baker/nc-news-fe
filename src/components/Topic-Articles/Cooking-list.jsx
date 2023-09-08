import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchArticlesByTopic } from "../../../utils/api";
import "../../styles/Article.css"

const CookingArticles = () => {
    const [cookingArticles, setCookingArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArticlesByTopic('cooking').then((response) => {
            setCookingArticles(response);
            setIsLoading(false)
        })
    }, [])

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
                cookingArticles.map((article) => {
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

export default CookingArticles;