import React from 'react';
import '../../css/Post.css';


const PostDetailComponent = ({post}) => {
  //console.log("Props to DetailComponentPassed", post);
  if (post) {
    return (
        <div className="card">
        <div className="card-header bg-success mb-3">
            User : {post.id}
        </div>
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
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

