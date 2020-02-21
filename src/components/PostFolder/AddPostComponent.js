import React from 'react';
import '../../css/Post.css';
import { observer, inject} from 'mobx-react';

class AddPostComponent extends React.Component {

   handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  addPost = (e)=>{
    e.preventDefault();
    console.log("%cFired fromaddPostComponent", "color: blue; font-size: 14px");
    this.props.store.postmodel.addpost(this.state)

  }
  render(){
    return (
      <div className="card">
        <div className="card-header">
          Add a Post
        </div>
        <div className="card-body">
          <form onSubmit={this.addPost}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="title" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <input type="text" className="form-control" id="body" onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
}
}

export default inject("store")(observer(AddPostComponent));

