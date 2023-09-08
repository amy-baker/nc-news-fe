import React from "react";
import ArticleList from "../components/Article-list";
import Header from '../components/Header';
import Navbar from "../components/Topic-Nav";

const Articles = () => {
 return(
   <>
   <Header />
   <Navbar />
    <ArticleList />
    </>
 )
}


export default Articles;