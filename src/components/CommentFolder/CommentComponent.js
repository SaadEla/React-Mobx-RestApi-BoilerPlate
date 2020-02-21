import React from 'react';
import  '../../css/Comment.css';
import CommentListComponent from './CommentListComponent';


function CommentComponent(props) {
  return (
    <div className="container">
    <div className="row">
      <div>
        <CommentListComponent store ={props.store} />
      </div>
    </div>
  </div>
  );
}

export default CommentComponent;
