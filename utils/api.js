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

export { fetchAllArticles, fetchTopics, fetchArticlesByTopic }