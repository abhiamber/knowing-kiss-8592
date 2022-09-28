import { Route, Routes } from "react-router-dom"
import MealDeals from "./MealDeals"
import Home from "./Home"
import Singup from "./Signup"


function AllRoutes(){


    return <div> 
    
    <Routes>
     
    <Route path="/"  element={<Home/>} ></Route>
    <Route path="/signup"  element={<Singup/>} ></Route>
    <Route path="/mealdeals"  element={<MealDeals/>} ></Route>


    
    </Routes>
    </div>
  

}
export default AllRoutes