//import uuid from 'uuid/v1';
import { action, observable, decorate } from 'mobx';
import PostService from '../services/postservice';


 class PostModel {

 posts = [];

  loadpost = () => {
    PostService.getPosts()
    .then(res => {
      let respon = res.data.slice(0,10);
      this.posts = respon;
    });
  };

  addpost = () => {

  }


}

decorate(PostModel, {
  posts: observable,
  loadpost: action
});

export default PostModel;