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
backgroundImage: 'linear-gradient(white, #223A5E)',
      'height': '150px',
      'padding':' 20px',
      'color': 'white'
    }
    console.log(this.state.List);
    let blogs = this.state.List
    let list = blogs.map((post) => {
      return(
        <div key={post._id} style={listStyle}>
          <NavLink to={`/all/${post._id}`}>{post.title}</NavLink>
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
