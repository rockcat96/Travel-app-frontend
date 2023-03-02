import {useLoaderData, Form } from "react-router-dom";

// destructuring the props needed to get our post, including router prop match
const Show = (props) => {
  const post = useLoaderData();


  return (
    <div className="show">

      <div className="show_img">
        <img src={post.url} alt={post.name} width="500" height="600"/>
      </div>
      
      <div className="show_country">
        <h1>{post.name}</h1>
        <h2><span className="bold">Cities: </span>{post.cities}</h2>
        <h2><span className="bold">Best time to visit: </span>{post.month}</h2>
        <h2><span className="bold">Number of days to visit: </span>{post.days}</h2>
      </div>
      
      <div className="update_form">

        <h2>Update this Country</h2>

        <Form action={`/update/${post.id}`} method="post" className="form">
          <input type="text" name="name" placeholder="Country name" defaultValue={post.name}/>
          <input type="text" name="cities" placeholder="Cities that you want to visit" 
          defaultValue={post.cities}/>
          <input type="text" name="month" placeholder="The ideal month/s to visit this country" defaultValue={post.month}/>
          <input type="text" name="days" placeholder="Number of days to visit this country" defaultValue={post.days}/>
          <input type="text" name="url" placeholder="Image url of this country" defaultValue={post.url}/>
          <button>Update {post.name}</button>
        </Form>
          
        <Form action={`/delete/${post.id}`} method="post" className="form-delete">
          <button>Delete this Country</button>
        </Form>

      </div>

    </div>
  );
};

export default Show;