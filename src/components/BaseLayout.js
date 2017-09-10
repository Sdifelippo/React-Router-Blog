import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';


class BaseLayout extends Component{
  render(){
    let navStyle={
backgroundImage: 'linear-gradient(blue, #223A5E)'    }
    let nav={}
return (

  <div>
        <section style={navStyle}>
        <nav className="nav navbar">
          <nav>
            <Button variant="raised"><NavLink to='/' >Home</NavLink></Button>
          </nav>
          <nav>
            <Button variant="raised"><NavLink to='/create' activeClassName='selected'>Create Post</NavLink></Button>
          </nav>
          <nav>
            <Button variant="raised"><NavLink to='/all' activeClassName='selected'>Show All</NavLink></Button>
          </nav>
        </nav>
        </section>
        <section>
          {this.props.children}
        </section>
      </div>
)
}
}
export default BaseLayout;
