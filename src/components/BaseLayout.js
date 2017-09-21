import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

class BaseLayout extends Component{
  render(){

    let sideTitle={
      color: 'white'
    }
//https://www.muicss.com/docs/v1/react/buttons
return (
  <Container>
  <div style={sideTitle} id="sidebar">THIS IS THE PUPPY BLOG</div>

<div id="content" className="mui-container-fluid">
</div>
      <div>
        <nav className="nav navbar">
          <nav>
            <Button className="mui-btn"><NavLink to='/' >Home</NavLink></Button>

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
