import axios from 'axios';

const base_url = 'https://nc-news-amy-2.onrender.com/api';

const fetchAllArticles = () => {
    return axios.get(`${base_url}/articles`).then((response) => {
        return response.data;
    })
}

const fetchTopics = () => {
    return axios.get(`${base_url}/topics`).then((response) => {
        const topicArray = response.data.map((topicObject) => topicObject.slug);
        return topicArray;
    })
}
const fetchArticlesByTopic = (topic) => {
    return axios.get(`${base_url}/articles?topic=${topic}`).then((response) => {
        return response.data
    })
}

const fetchArticleById = (id) => {
    return axios.get(`${base_url}/articles/${id}`).then((response) => {
        const article = response.data.article[0]
        return axios.get(`${base_url}/articles/${id}/comments`).then((response) => {
            const comments = response.data;
            article.commentCount = comments.length;
            return article;
        })
    })
    }


const fetchArticleComments = (id) => {
    return axios.get(`${base_url}/articles/${id}/comments`).then((response) => {  
        return response.data
    })
}

const upvoteArticle = (id) => {
    return axios.patch(`${base_url}/articles/${id}`, { inc_votes : 1 } ).then((response) => {
        return response.data
    })
} 

const downvoteArticle = (id) => {
    return axios.patch(`${base_url}/articles/${id}`, {
        inc_votes : -1 }).then((response) => {
            return response.data
        })
}

const postComment = (id, comment) => {
    return axios.post(`${base_url}/articles/${id}/comments`, {username: "happyamy2016", body : comment }).then((response) => {
        return response.data
    })
} 

export { fetchAllArticles, fetchTopics, fetchArticlesByTopic, fetchArticleById, fetchArticleComments, upvoteArticle, downvoteArticle, postComment }