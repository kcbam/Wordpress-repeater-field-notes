import React from 'react';
//import faker from 'faker';
const CommentDetails = (props) => {
    return(
        <div className="comment">
          <a href="/" className="avatar">
            <img src={ props.image} alt="avatar"  />
          </a>
          <div className="content">
            <a href="/" className="author">
              {props.author}
            </a>
            <div className="metadata">
              <span className="date">{props.date}</span>
            </div>
            <div className="text">
              {props.blogText}
            </div>
          </div>
        </div>
    );
}
export default CommentDetails;