import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';


class BaseLayout extends Component{
  render(){
let navStyle={
  backgroundImage: 'linear-gradient(blue, #223A5E)',
  textDecoration: 'none'
}
let headStyle={
  color:'white',
  fontSize:'3rem',
  display: 'flex',
  justifyContent: 'space-evenly',
  textDecoration: 'none'

}
let navNavbar={
  display: 'flex',
  justifyContent: 'space-evenly',
  textDecoration: 'none'

}

return (

  <div>

        <section style={navStyle}>
        <header style={headStyle}>React blog</header>
        <nav className="nav navbar">
          <nav>
            <Button variant="raised"><NavLink to='/' >Home</NavLink></Button>

            <Button variant="raised"><NavLink to='/create' activeClassName='selected'>Create Post</NavLink></Button>

            <Button variant="raised"><NavLink to='/all' activeClassName='selected'>Show All Posts</NavLink></Button>
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
