import axios from "axios";

export default class PostService {
   static instance(){
        return axios.create()
    }
    
    static getPosts(){
        return PostService.instance().get('https://jsonplaceholder.typicode.com/posts')
     }

    static addPostServ(popo){
        console.log("%cArrived to PostService", "color: blue; font-size: 14px");
        console.log(popo)
        return PostService.instance().post('https://jsonplaceholder.typicode.com/posts', {popo})
    }

}




