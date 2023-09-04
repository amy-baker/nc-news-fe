import { useState, useEffect } from "react";
import { fetchAllArticles } from "../utils/api";
import '../src/styles/Articles.css'

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchAllArticles().then((articles) => {
            setArticles(articles)
        })
    }, []);

    const getDate = (date) => {
        return date.substring(0, 10)
    }

    return(
        <section className="container">
            {
                articles.map((article) => {
                return(
                    <article className='article' key={article.article_id}>
                        <h1 className='title'>{article.title}</h1>
                        <img className='image' src={article.article_img_url} />
                        <p>Published {getDate(article.created_at)}</p>
                    </article>
                )
            })}
        </section>
    )
}

export default ArticleList 