import { useState } from "react";
import { upvoteArticle, downvoteArticle } from "../../utils/api";
import '../styles/Article.css'

const HandleVotes = ({ article_id, article, setArticle }) => {


    const [err, setErr] = useState(false)
    const [vote, setVote] = useState(null)

    const handleUpvote = () => {
        if (article) {
        if (vote === null) {
      upvoteArticle(article_id).then(() => {
    setArticle({ ...article, votes: article.votes + 1 })
    setVote('up')
      })
     } else if (vote === 'down'){
        upvoteArticle(article_id).then(() => {
            setArticle({ ...article, votes: article.votes +2 })
            setVote('up')
     })
    } else if (vote === 'up') {
        downvoteArticle(article_id).then(() => {
            setArticle({ ...article, votes: article.votes - 1 })
            setVote(null)
        });
    };
      } else {
        setErr(true)
      }
    }
        
      

const handleDownvote = () => {
if (article) {
  if (vote === null) {
    downvoteArticle(article_id).then(() => {
      setArticle({ ...article, votes: article.votes - 1 });
      setVote('down');
    });
  } else if (vote === 'up') {
    upvoteArticle(article_id).then(() => {
      setArticle({ ...article, votes: article.votes - 2 });
      setVote('down');
    })
  } else if (vote === 'down') {
    upvoteArticle(article_id).then(() => {
        setArticle({ ...article, votes: article.votes + 1 });
        setVote(null);
  })
} else {
  setErr(true);
}
}
}

return(
    <>
     {err && <p className='error-message'>Unable to vote, try again later</p>}
     <div className='same-line'>
     <div className='comment-vote-intersect'>
      <h2 >Comments</h2>
      </div>
      <div className='vote-section'>
    <button className='vote-button' onClick={() => handleUpvote(article_id)}>
    <span className="material-symbols-outlined">
thumb_up
    </span>
    </button>
    <p className='votes'>{article.votes}</p>
    <button className='vote-button' onClick = {() => handleDownvote(article_id)}>
    <span className="material-symbols-outlined">
    thumb_down
    </span>
    </button>
    </div>
    </div>
 </>
)
}

export default HandleVotes