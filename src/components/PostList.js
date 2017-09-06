import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class PostList extends Component {
  constructor(props) {
    super(props)
        this.state = {
          'blogList':[]
        }
      }

      componentDidMount(){
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
          .then(results => {
              return results.json();
            })
            .then((data) => {
              this.setState({
                blogList: data
              });
            });
      }
  }
}




export default PostList
