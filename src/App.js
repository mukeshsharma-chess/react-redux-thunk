import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/navbar';
import postForm from './Component/demo/postForm';
import signUp from './Component/signUp/signUp';
import allPost from './Component/demo/allPost';
import ShowData from './Component/signUp/showData';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <Route exact path="/" component={postForm} />
            <Route path="/signup" component={signUp} />
            <Route path='/allpost' component={allPost} />
            <Route path ='/showdata' component= {ShowData} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;