import React, { Component } from 'react';
import {Link,HashRouter} from 'react-router-dom';
import './App.css';
import info from './components/info';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <HashRouter>
		      <ul className="App-nav">
		      	<li>
		      		<Link to="/home">首页</Link>
		      	</li>
		      	<li>
		      		<Link to="/classify">分类</Link>
		      	</li>
		      	<li>
		      		<Link to="/shopcart">购物车</Link>
		      	</li>
		      	<li>
		      		<Link to="/user">个人中心</Link>
		      	</li>
		      </ul>
		  	</HashRouter>
	  	</div>
    );
  }
}

export default App;
