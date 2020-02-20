import React from 'react';
import PostDetailComponent from './PostDetailComponent';
import { observer, inject} from 'mobx-react';
import '../../css/Post.css';


class PostListComponent extends React.Component  {

  componentDidMount(){
    this.props.store.postmodel.loadpost();
  }

  Lposts = this.props.store.postmodel.posts
  posta =  this.Lposts && this.Lposts.map( post => {
    return(
        <PostDetailComponent post={post} key={post.id} />
    )
  });
  render(){
    return (
      <div className="PostListComponent">
        {this.posta ? this.posta : <p>No post found</p>}
      </div>
    )
  };

}

export default inject("store")(observer(PostListComponent));





