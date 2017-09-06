import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class BaseLayout extends Component{
  render(){
    let navStyle={
      'backgroundColor': 'black',

    }
return (

  <div>
        <section style={navStyle}>
        <ul className="nav navbar">
          <li>
            <NavLink to='/' activeStyle={{color:'red'}}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/create' activeClassName='selected'>Create Post</NavLink>
          </li>
          <li>
            <NavLink to='/all' activeClassName='selected'>Show All</NavLink>
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
