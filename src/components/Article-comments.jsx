import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleComments } from "../../utils/api"
import '../styles/Comments.css'

const Comments = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchArticleComments(article_id).then((comments) => {
            setComments(comments)
        })
    }, [article_id])

    const getDate = (date) => {
        if (comments.length !== 0) {
         return date.slice(0, 10)
        }
     }

    return(
        <div className="comment-section">
       
            <h2>Comments</h2>
            {comments.map((comment) => {
                return(
                <section key={comment.comment_id}>
                <div className="comment-card">
            <p>{comment.body}</p>
            <section className="comment-details">
            <p>{comment.author}</p>
            <p>{getDate(comment.created_at)}</p>
            </section>
            </div>
            </section>
                )
            })}
        
        </div>
    )
}

export default Comments