//import uuid from 'uuid/v1';
import { action, observable, decorate } from 'mobx';
import CommentService from '../services/commentservice';


 class CommentModel {

 comments = [];

  loadcomment = () => {
    CommentService.getComments()
    .then(res => {
      let respon = res.data.slice(0,5);
      this.comments = respon;
    });
  };
  
  deleteComment = (id) => {
    console.log("%cArrived to fromaddPostComponent", "color: blue; font-size: 14px");
    console.log(id)
    CommentService.deleteComment(id)
    .then(res => {
      console.log("%cSucces", "color: blue; font-size: 14px");
      this.comments = this.comments.filter((yy)=>{return yy.id!==id});
      console.log(res)

    });
  };

}

decorate(CommentModel, {
    comments: observable,
    loadcomment: action
});

export default CommentModel;