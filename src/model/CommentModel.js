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

}

decorate(CommentModel, {
    comments: observable,
    loadcomment: action
});

export default CommentModel;