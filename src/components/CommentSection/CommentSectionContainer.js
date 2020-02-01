// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [formComment, setFormComment] = useState({
      username: "Nicholas Mullen",
      text: ""
    });

  function submitComment(event) {
    setComments(comments.concat(formComment));
    setFormComment({
      username: "Nicholas Mullen",
      text: ""
    });
    event.preventDefault();
  }

  function changeComment(event) {
    setFormComment({
      username: "Nicholas Mullen",
      text: event.target.value
    });
  }

  return (
    <div>
      {comments.map(comment => 
        <Comment key={comment.username + Math.random()} comment={comment} />
      )}
      <CommentInput
        submitComment={submitComment}
        changeComment={changeComment}
        comment={formComment.text}
      />
    </div>
  );
};

export default CommentSection;
