import React, {Component} from 'react';

class ShowPost extends Component{
  constructor(props) {
    super(props);
    this.state = {
      'AllBlogs': {}
    }
  }

  componentDidMount() {
        const { id } = this.props.match.params;
        const link=`https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
        fetch(link).then(results => results.json())
      .then(data => {
        console.log('here is the data:',data);
        this.setState({
          AllBlogs:data
        })
      })
  }
  render(){
    console.log(this.state.AllBlogs);
    let formStyle={
        backgroundImage: 'linear-gradient(blue, #223A5E)',
        color: 'white'
    }
    let {AllBlogs} = this.state
    return(
      <div style={formStyle}>
        <h1>{AllBlogs.title}</h1>
        <h3>Posted by:{AllBlogs.name}</h3>
          <p>{AllBlogs.blog}</p>
      </div>
    )

  }
}

  export default ShowPost;
