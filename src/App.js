import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import PostComponent from './components/PostFolder/PostComponent';
import CommentComponent from './components/CommentFolder/CommentComponent';


class App extends React.Component  {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
              <Route exact path='/' component={HomeComponent} />
              <Route path='/Post'><PostComponent store ={this.props.store}/></Route>
              <Route path='/Comment'><CommentComponent store ={this.props.store}></CommentComponent></Route>
            </Switch>
        </div>
      </BrowserRouter>
    );
}
}

export default App;
