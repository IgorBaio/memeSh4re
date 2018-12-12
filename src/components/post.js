import React, {Component} from 'react';
import "../post.css";
class Post extends Component{
    constructor(props){
        super(props)
        this.state = {
            likes: props.initialLikes
        }
    }
doLike(){
    this.setState({likes : this.state.likes + 1},()=>{
        console.log("doLike state",this.state)
    });
}
    render(){
        console.log(this.props);
        return(
        <div className={"post"}>
        <h3>{this.props.children}</h3>
        <small>{this.props.author}</small>
        <br/>
        <small>{this.props.time}</small>
        <div style={likeLine}>
        <p>Likes: {this.state.likes}</p>
        <button 
                onClick={this.doLike.bind(this)}
                style ={{
                    'backgroundColor': 'black',
                        'color': 'lightgreen',
                        'fontSize':16,
                        'fontWeight': 'bolder',
                        'borderRadius':10,
                        'padding':5
                    }}>Like</button>

      </div>
      </div>
        )
    }

}

const likeLine={
    'display':'flex',
    'justifyContent': 'space-around',
    'height': 40
}

export default Post;