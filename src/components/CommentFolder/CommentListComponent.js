import React from 'react';
import CommentDetailComponent from './CommentDetailComponent';
import { observer, inject} from 'mobx-react';
import '../../css/Post.css';


class CommentListComponent extends React.Component  {

  componentDidMount(){
    this.props.store.commentmodel.loadcomment();
  }
  render(){
    console.log("%cRender CommentListComponent", "color: green; font-size: 20px")
    return (
      <div className="CommentListComponent">
        {
          this.props.store.commentmodel.comments ? 
          this.props.store.commentmodel.comments && this.props.store.commentmodel.comments.map( comment => {
          return(
              <CommentDetailComponent store ={this.props.store} comment={comment} key={comment.id} />
          )
        }) 
        : 
        <p>No comment found</p>}
      </div>
    )
  };

}

export default inject("store")(observer(CommentListComponent));





