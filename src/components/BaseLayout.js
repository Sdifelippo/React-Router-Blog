import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';


class BaseLayout extends Component{
  render(){
    let navStyle={
backgroundImage: 'linear-gradient(blue, #223A5E)'    }
return (

  <div>
        <section style={navStyle}>
        <ul className="nav navbar">
          <li>
            <Button variant="raised"><NavLink to='/' activeStyle={{color:'white'}}>Home</NavLink></Button>
          </li>
          <li>
            <Button variant="raised"><NavLink to='/create' activeClassName='selected'>Create Post</NavLink></Button>
          </li>
          <li>
            <Button variant="raised"><NavLink to='/all' activeClassName='selected'>Show All</NavLink></Button>
          </li>
        </ul>
        </section>
        <section>
          {this.props.children}
        </section>
      </div>
)
}
}
export default BaseLayout;
