import React from 'react';
import '../../css/Comment.css';
import { observer, inject} from 'mobx-react';


const PostDetailComponent = (props) => {
  const { comment } = props;
  function deleteComment(id){
    console.log("%cFired CommentDetailComponent", "color: blue; font-size: 14px");
    props.store.commentmodel.deleteComment(id);
  };
  if (comment) {
    return (
        <div>
          <div className="card">
            <div className="card-header bg-info mb-3">
                Full name : {comment.name} {comment.username}
                <button type="button" className="close round-btn-outline-danger" aria-label="Close" onClick={ () => {deleteComment(comment.id)} }>
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="card-body">
                <h5 className="card-title">
                  --{comment.address.street}--{comment.address.suite}--{comment.address.city}--{comment.phone}--{comment.company.name}--{comment.company.catchPhrase}
                </h5>
            </div>
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


export default inject("store")(observer(PostDetailComponent));

