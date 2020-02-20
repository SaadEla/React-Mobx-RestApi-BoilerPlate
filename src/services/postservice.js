import axios from "axios";
import AddPostComponent from "../components/PostFolder/AddPostComponent";

export default {
    instance(){
        return axios.create()
    },
    
    getPosts(){
        return this.instance().get('https://jsonplaceholder.typicode.com/posts')
     },

    addPost(){

    }

}




