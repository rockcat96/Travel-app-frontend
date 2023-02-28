import { Link, useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = (props) => {
  const post = useLoaderData();

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.cities}</h2>
      <h2>{post.month}</h2>
      <h2>{post.days}</h2>
      <img src={post.url} alt={post.name} width="500" height="600"/>
      <div style={{ textAlign: "center" }}>
        <h2>Update this Country</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input type="text" name="name" placeholder="Country name" defaultValue={post.name}/>
          <input type="text" name="cities" placeholder="Cities that you want to visit" defaultValue={post.cities}/>
          <input type="text" name="month" placeholder="The ideal month/s to visit this country" defaultValue={post.month}/>
          <input type="text" name="days" placeholder="Number of days to visit this country" defaultValue={post.days}/>
          <input type="text" name="url" placeholder="Image url of this country" defaultValue={post.url}/>
          <button>Update {post.name}</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
          <button>Delete this Country</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;