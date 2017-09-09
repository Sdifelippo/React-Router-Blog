import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

//import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './components/App'
import BaseLayout from './components/BaseLayout'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import ShowPost from './components/ShowPost'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/create' component={CreatePost} />
        <Route path='/all/:id' component={ShowPost} />
        <Route path='/all' component={PostList} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
