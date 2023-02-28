import {redirect} from "react-router-dom" //we want redirect user to be redirected to another page once they hit the url with the action
import url from "./url";

const generateCountryObject = async(request) => {
    //get the form data
    const formData = await request.formData()

    //construct new country
    return {
        name: formData.get("name"),
        cities: formData.get("cities"),
        month: formData.get("month"),
        days: formData.get("days"),
        url: formData.get("url")
    }
}

//CreateAction => create a todo from form submission to `/create`
export async function createAction({request}){
    
    const newCountry = await generateCountryObject(request)

    //send request to create route in the backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCountry)
    })

    //redirect back to index page
    return redirect("/")
}

//updateAction => update a todo from form submissions to `/update/:id`
export async function updateAction({ request, params }) {
  
    const updatedCountry = await generateCountryObject(request)

    // request to update route in backend
    await fetch(url + params.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCountry),
    });
  
    // redirect back to the index page
    return redirect("/");
  }

//deleteAction => delete a todo from form submissions to `/delete/:id/`
export async function deleteAction({params}){
    

    //send request to backend 
    await fetch(url + params.id + "/", {
        method: "delete",
    })

    //redirect back to show page 
    return redirect("/")
}
