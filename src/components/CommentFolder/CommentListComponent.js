import React from 'react';
import CommentDetailComponent from './CommentDetailComponent';
import { observer, inject} from 'mobx-react';
import '../../css/Post.css';


class CommentListComponent extends React.Component  {

  componentDidMount(){
    this.props.store.commentmodel.loadcomment();
  }

  Lcomments = this.props.store.commentmodel.comments
  commenta =  this.Lcomments && this.Lcomments.map( comment => {
    return(
        <CommentDetailComponent comment={comment} key={comment.id} />
    )
  });
  render(){
    return (
      <div className="CommentListComponent">
        {this.commenta ? this.commenta : <p>No comment found</p>}
      </div>
    )
  };

}

export default inject("store")(observer(CommentListComponent));





