import React, {Component} from 'react';
import Post from './components/post';
import PostCreator from './components/postCreator';

const postArray = [
{
  content:'',
  time:'16:12',
  author: "",
  initialLikes: 2
},{
  content:'É',
  time:'12:16',
  author: "",
  initialLikes: 0
},{
  content:'FODA',
  time:'12:26',
  author: "",
  initialLikes: 0
},{
  content:'PRA',
  time:'12:26',
  author: "",
  initialLikes: 0
},{
  content:'PORRA',
  time:'12:26',
  author: "",
  initialLikes: 0
}

]


class App extends Component {
      constructor(){
        super();
        this.state ={
          posts: postArray
      }
    }

    insertPost(post){
      const myPosts = this.state.posts;
      myPosts.unshift(post);
      this.setState({posts: myPosts});
    }

    render(){
      console.log(this.props.onCreate)
      return(
        <div>
          <h1>Minha Rede Social</h1>

            <PostCreator onCreate={this.insertPost.bind(this)} />

          {this.state.posts.map((post,i) =>{
            console.log(i);
            return (
            <Post
              key={i}
              post={post}
              author={post.author}
              initialLikes={post.initialLikes}
              time= {post.time}>
              {post.content}</Post>
            )
          })}
          
         
          
          
        


        </div>

      )
    }


}

export default App;