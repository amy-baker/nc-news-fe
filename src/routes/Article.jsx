import React from "react";
import Header from '../components/Header';
import FullArticle from "../components/Full-article";
import Comments from "../components/Article-comments";


const Article = () => {
    return(
        <div>
        <Header />
        <FullArticle />
        <Comments />
        </div>
    )
}

export default Article