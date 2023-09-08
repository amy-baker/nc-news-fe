import React from "react";
import CodingArticles from "../components/Topic-Articles/Coding-list";
import Header from '../components/Header';
import Navbar from "../components/Topic-Nav";

const FilteredArticlesCoding = () => {
    return(
        <>
            <Header />
            <Navbar />
            <CodingArticles />
        </>
    )
}

export default FilteredArticlesCoding