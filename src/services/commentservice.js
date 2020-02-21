import axios from "axios";

export default {
    instance(){
        return axios.create()
    },
    
    getComments(){
        return this.instance().get('https://jsonplaceholder.typicode.com/users')
     },

    deleteComment(id){
        console.log("%cArrived to commentservice", "color: blue; font-size: 14px");
        console.log(id)
        return this.instance().delete('https://jsonplaceholder.typicode.com/users/'+id)
     }
}




