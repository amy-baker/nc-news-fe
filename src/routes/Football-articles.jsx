import React from "react";
import FootballArticles from "../components/Topic-Articles/Football-list";
import Header from '../components/Header';
import Navbar from "../components/Topic-Nav";

const FilteredArticlesFootball = () => {
    return(
        <>
            <Header />
            <Navbar />
            <FootballArticles />
        </>
    )
}

export default FilteredArticlesFootball