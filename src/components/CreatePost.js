import React, {Component} from 'react';

class CreatePost extends Component{
  constructor(props){
    super(props)
    this.state = {
      'name':'',
      'title':'',
      'blog':''
    }
    this.addToList = this.addToList.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBlogChange = this.handleBlogChange.bind(this)
  }
  addToList = (e) => {
        e.preventDefault();
        this.setState({
          'name': e.target.value,
          'title': e.target.value,
          'blog': e.target.value
        });
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log(response, "Got it");
        })
        .catch(err => {
          console.log(err, "there may be an issue!");
        });
        this.setState({
          name: '',
          title: '',
          blog: ''
        });
    }

    handleNameChange(e){
      this.setState({
        name:e.target.value
      })
    }
    handleTitleChange(e){
      this.setState({
        title:e.target.value
      })
    }
    handleBlogChange(e){
      this.setState({
        blog:e.target.value
      })
    }


    render(){
      let formStyle={
          backgroundImage: 'linear-gradient(blue, #223A5E)',
          color: 'white'     
      }
      return(
      <div style={formStyle} >
        <form >
      <div className="form-group">
        <label>Your Name:</label>
        <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" placeholder="Name"></input>
      </div>
      <div className="form-group">
        <label>Title of Blog:</label>
        <input onChange={this.handleTitleChange} value={this.state.title} type="text" className="form-control" placeholder="Title of Blog"></input>
      </div>
      <div className="form-group">
        <label>Write your Blog here:</label>
        <textarea onChange={this.handleBlogChange} value={this.state.blog} className="form-control" rows="3"></textarea>
      </div>
      <button onClick={this.addToList} type="submit" className="Submit-button">Submit</button>
    </form>
        </div>
      )
    }
  }
      export default CreatePost;
