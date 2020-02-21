import React from 'react';
import PostDetailComponent from './PostDetailComponent';
import { observer, inject} from 'mobx-react';
import '../../css/Post.css';


class PostListComponent extends React.Component  {

  componentDidMount(){
    //console.log("%ccomponentDidMount", "color: green; font-size: 20px")
    this.props.store.postmodel.loadpost();
  }

/*componentDidUpdate(prevProps){

  console.log( `%ccomponentDidUpdate${prevProps===this.props} `, "color: green; font-size: 20px")

}
shouldComponentUpdate(nextProps, nextState){
  console.log("shouldComponentUpdate", "color: green; font-size: 20px")
  console.log("okok",this.props.store.postmodel.posts.length , nextProps.store.postmodel.posts.length)
}


componentWillUnmount(){
  console.log("%ccomponentWillUnmount", "color: green; font-size: 20px")
}*/

  render(){
    console.log("%cRender PostListComponent", "color: green; font-size: 20px")
    return (
      <div className="PostListComponent">
        { this.props.store.postmodel.posts ? this.props.store.postmodel.posts && this.props.store.postmodel.posts.map( post => {
            return(
                <PostDetailComponent post={post} key={post.id} />
            )
          }) 
          : 
          <p>No post found</p>
        }
      </div>
    )
  };

}

export default inject("store")(observer(PostListComponent));





