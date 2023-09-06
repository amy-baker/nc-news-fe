import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import FullArticle from "../components/Full-article";
import Comments from "../components/Article-comments";
import HandleVotes from "../components/Voting";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";


const Article = () => {

    const { article_id } = useParams();
    const [article, setArticle] = useState({})


    useEffect(() => {
        fetchArticleById(article_id).then((response) => {
            setArticle(response);
        });
    }, [article_id]);

    return(
        <div>
        <Header />
        <FullArticle />
        <HandleVotes article_id={article_id} article={article} setArticle={setArticle} />
        <Comments  article_id={article_id}/>
        </div>
    )
}

export default Article