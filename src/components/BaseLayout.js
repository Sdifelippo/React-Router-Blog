import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

class BaseLayout extends Component{
  render(){


return (
  <Container>
  <div id="sidebar">
  <div class="mui--text-light mui--text-display1 mui--align-vertical">THIS IS THE PUPPY BLOG</div>
</div>
<div id="content" class="mui-container-fluid">
</div>
      <div>
        <nav className="nav navbar">
          <nav>
            <Button color='primary'><NavLink to='/' >Home</NavLink></Button>

            <Button ><NavLink to='/create' activeClassName='selected'>Create Post</NavLink></Button>

            <Button ><NavLink to='/all' activeClassName='selected'>Show All Posts</NavLink></Button>
          </nav>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
      </Container>
)
}
}
export default BaseLayout;
