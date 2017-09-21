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
  let formStyle={
      backgroundImage: 'url(https://wallpapercave.com/wp/EKTo81t.jpg)',
      height: '1200px',
      TextDecoration: 'none',
      marginTop: '-10px',
  }

  let postTitle={
    color:'white'

  }
    let listStyle={
      display: 'table',
      height: 'auto',
      color: 'blue'
    }
    let bgImage={
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
      <div style={formStyle}>
      <div className={postTitle}>{list}</div>
    <div className="mui-divider"></div>
        </div>

    )
  }
}
export default PostList
