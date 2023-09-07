import { useState } from "react";
import { postComment } from "../../utils/api";


const CommentAdder = ({article_id, newComment, setNewComment, setComments }) => {

const [posting, setPosting] = useState(false);
const [idCounter, setIdCounter] = useState(1)

const handleSubmit = (event) => {
    event.preventDefault();
    setPosting(true);

    const optimisticRender = {
        author: "happyamy2016",
        body: newComment,
        created_at: new Date().toISOString(),
        comment_id: idCounter
    }

    setIdCounter(idCounter + 1);
    setComments((existingComments) => [optimisticRender, ...existingComments]);



    postComment(article_id, newComment).then((response) => {
        setNewComment("");
        setPosting(false)
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
            setNewComment(e.target.value);
        }} required>

     </textarea>
        <button type="submit" disabled={posting}>
        {posting ? "Posting..." : "Post"}
        </button>
        </form>
    </div>
)
}

export default CommentAdder