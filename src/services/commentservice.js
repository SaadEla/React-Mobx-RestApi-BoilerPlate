import axios from "axios";

export default {
    instance(){
        return axios.create()
    },
    
    getComments(){
        return this.instance().get('https://jsonplaceholder.typicode.com/users')
     }

}




