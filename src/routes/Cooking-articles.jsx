import React from "react";
import CookingArticles from "../components/Topic-Articles/Cooking-list";
import Header from '../components/Header';
import Navbar from "../components/Topic-Nav";

const FilteredArticlesCooking = () => {
    return(
        <>
            <Header />
            <Navbar />
            <CookingArticles />
        </>
    )
}

export default FilteredArticlesCooking