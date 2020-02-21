import React from 'react';
import  '../../css/Post.css';
import PostList from './PostListComponent';
import AddPostComponent from './AddPostComponent';
import { observer, inject} from 'mobx-react';

class PostComponent extends React.Component  {
  //console.log("PostComponent", props);
  render(){
  return (
    <div className="dashboard container">
    <div className="row">
      <div className="col s12 m6">
        <PostList store ={this.props.store}/>
      </div>
      <div className="col s12 m5  addpost" >
        <AddPostComponent  store ={this.props.store} />
      </div>
    </div>
  </div>
  );
}
}

export default PostComponent;
