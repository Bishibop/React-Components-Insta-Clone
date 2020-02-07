import React from 'react';

const LikeSection = props => {
  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <i
            className={`fa${props.isLiked ? 's' : 'r'} fa-heart`}
            onClick={props.likeToggle}
            // Pass down the setters, you can define this function here
            // onClick={() => {
            //   if (props.isLiked) {
            //     props.setIsLiked(false);
            //     props.setLikes(props.likes - 1);
            //   } else {
            //     props.setIsLiked(true);
            //     props.setLikes(props.likes + 1);
            //   }
            // }}
          />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">
        {props.likes}
        &nbsp;likes
      </p>
    </div>
  )
};

export default LikeSection;
