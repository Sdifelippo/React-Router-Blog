import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';

class BaseLayout extends Component{
  render(){

  
return (
      <div>
        <nav className="nav navbar">
          <nav>
            <Button variant="raised"><NavLink to='/' >Home</NavLink></Button>

            <Button variant="raised"><NavLink to='/create' activeClassName='selected'>Create Post</NavLink></Button>

            <Button variant="raised"><NavLink to='/all' activeClassName='selected'>Show All Posts</NavLink></Button>
          </nav>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
)
}
}
export default BaseLayout;
