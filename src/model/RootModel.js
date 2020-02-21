import PostModel from "./PostModel";
import CommentModel from './CommentModel';

class RootModel {
    constructor() {
        this.postmodel = new PostModel(this)
        this.commentmodel = new CommentModel(this)
    }
}

export default RootModel;