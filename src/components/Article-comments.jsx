import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleComments } from "../../utils/api"
import '../styles/Comments.css'


const Comments = ({comments, setComments}) => {
    const { article_id } = useParams();
   

    
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

    if (comments.length === 0) {
        return (
            <div className="comment-section">
                <p>No comments yet.</p>
            </div>
        );
    }
    return(
        <div className="comment-section">
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