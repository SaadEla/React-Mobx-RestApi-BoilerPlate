import React from 'react';
import '../../css/Comment.css';


const PostDetailComponent = (props) => {
  const { comment } = props;
  if (comment) {
    return (
        <div className="card">
        <div className="card-header bg-info mb-3">
            Full name : {comment.name} {comment.username}
        </div>
        <div className="card-body">
            <h5 className="card-title">
              --{comment.address.street}--{comment.address.suite}--{comment.address.city}--{comment.phone}--{comment.company.name}--{comment.company.catchPhrase}
            </h5>
        </div>
        </div>

    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}



export default PostDetailComponent;

