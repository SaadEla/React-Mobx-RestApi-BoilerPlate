import React from 'react';
import '../../css/Post.css';

function AddPostComponent() {
  return (
    <div className="card">
      <div className="card-header">
        Add a Post
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <input type="text" className="form-control" id="body" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddPostComponent;
