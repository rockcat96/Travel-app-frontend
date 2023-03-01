import {Outlet} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./css/app.css"
import "milligram"


function App(){
  return(
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App