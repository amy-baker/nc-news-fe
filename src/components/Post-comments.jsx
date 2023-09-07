import { useState } from "react";
import { postComment } from "../../utils/api";


const CommentAdder = ({article_id, newComment, setNewComment}) => {
// const [newComment, setNewComment] = useState("");
const [posting, setPosting] = useState(false);


const handleSubmit = (event) => {
    event.preventDefault();
    if(newComment.trim() === '') {
        alert('Comment cannot be empty');
        return;
    }
    setPosting(true);

    // let optimisticRender = {
    //     author: "happyamy2016", body: newComment
    // }
    
    // setComments((prevComments) => [optimisticRender, ...prevComments]);


    postComment(article_id, newComment).then(() => {
        // setComments([optimisticRender, ...comments]);
        // console.log(optimisticRender, "<<optimistic render")
        // console.log(...comments, "<< ...comments")
         
        setNewComment("");
        setPosting(false)
        alert('comment posted') //placeholder bc struggling with optimistic render
    }).catch((err) => {
        console.error('error posting comment', err);
        setPosting(false)
    })
}

return(
    <div className="comment-post">
        <h3>Add Comment:</h3>
        <form onSubmit={handleSubmit}>
        <textarea id='newComment'
        value={newComment}
        onChange={(e) => {
            setNewComment(e.target.value)
        }}>

     </textarea>
        <button type="submit" disabled={posting}>
        {posting ? "Posting..." : "Post"}
        </button>
        </form>
    </div>
)
}

export default CommentAdder