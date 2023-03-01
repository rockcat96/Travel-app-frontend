import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom"

const Index = (props) => {
  const countries = useLoaderData()
  // For each post in the array render a Post component


  return <>
  <div style={{textAlign: "center"}} className="create_form">
    <Form action="/create" method="post" className="form">
        <input type="text" name="name" placeholder="Country name"/>
        <input type="text" name="cities" placeholder="Cities that you want to visit"/>
        <input type="text" name="month" placeholder="The ideal month/s to visit this country"/>
        <input type="text" name="days" placeholder="Number of days to visit this country"/>
        <input type="text" name="url" placeholder="Image url of this country"/>
        <button>Create New Country</button>
    </Form>
  </div>

  <div className="list">
  {countries.map((post) => <Post post={post} key={post.id} />)}
  </div>
  </>;
};

export default Index;;