import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class PostList extends Component {
  constructor(props) {
    super(props)
        this.state = {
          'List':[]
        }
      }

      componentDidMount(){
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
          .then(results => {
              return results.json();
            })
            .then((data) => {
              this.setState({
                List: data
              });
            });
      }
render(){
    let listStyle={
      display: 'table',
      height: 'auto'
    }
    let bgImage={
      backgroundImage: 'url(https://wallpapercave.com/wp/EKTo81t.jpg)',
      height: 'auto',
      width: 'auto'
    }

    console.log(this.state.List);
    let blogs = this.state.List
    let list = blogs.map((post) => {
      return(
        <div style={bgImage}>
        <div key={post._id} style={listStyle}>
          <NavLink to={`/all/${post._id}`}>{post.title}</NavLink>
        </div>
        </div>
      )
    })
    return(
      <div >
      {list}
      </div>
    )
  }
}
export default PostList
