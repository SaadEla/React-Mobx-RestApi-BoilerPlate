import { action, observable, decorate } from 'mobx';
import PostService from '../services/postservice';
import uuid from 'uuid/v1';



 class PostModel {

 posts = [];

  loadpost = () => {
    PostService.getPosts()
    .then(res => {
      let respon = res.data.slice(95);
      this.posts = respon;
      console.log(res.data)
    });
  };

  addpost = (addedpost) => {
    console.log("%cArrived to PostModel", "color: blue; font-size: 14px");
    let popo = {
      'userId' : uuid(),
      'id' : uuid(),
      'title': addedpost.title,
      'body': addedpost.body
    }
    console.log(popo)
    PostService.addPostServ(popo)
    .then((response) => {
      console.log("%cSuccess", "color: blue; font-size: 14px");
      this.posts=[...this.posts, response.data.popo]
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
    //console.log('ana salit mn hona')
  };
}

decorate(PostModel, {
  posts: observable,
  loadpost: action,
  addpost: action
});

export default PostModel;