import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
 
  return (
    <div className="country">
      <Link to={`/post/${post.id}`}>
        <img src={post.url} alt={post.name} width="500px"/>
        <h1>{post.name}</h1>
      </Link>
      <h2>{post.month}</h2>
    </div>
  );
};

export default Post
