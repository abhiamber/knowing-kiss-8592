import { Route, Routes } from "react-router-dom"
import MealDeals from "./MealDeals"
import Home from "./Home"
import Singup from "./Signup"
import HotPicks from './HotPicks'
import Recepie from "./Recepie"
import KindMoments from "./KindMoments"


function AllRoutes(){


    return <div> 
    
    <Routes>
     
    <Route path="/"  element={<Home/>} ></Route>
    <Route path="/signup"  element={<Singup/>} ></Route>
    <Route path="/mealdeals"  element={<MealDeals/>} ></Route>
    <Route  path="/hotpicks"  element={<HotPicks/>}  ></Route>
    <Route  path="/recipes"  element={<Recepie/>} ></Route>
    <Route  path="/kindmoments"  element={<KindMoments/>} ></Route>



    
    </Routes>
    </div>
  

}
export default AllRoutes