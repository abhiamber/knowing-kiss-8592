import {Link} from 'react-router-dom'
import style from '../style/Navbar.module.css'

function Navbar(){

   
return <div className={style.Navbar}>

<ul>

<li> <Link  to="/" >Home</Link> </li>

<li> <Link  to="/mealdeals" >Meal Deals</Link> </li>
<li> <Link  to="/kindmoments" >KindMoments</Link> </li>
<li> <Link  to="/hotpicks" >Hot Picks</Link> </li>
<li> <Link  to="/recipes" >Recipes</Link> </li>
<li> <Link  to="/directory" >Directory</Link> </li>
<li> <Link  to="/articles" >Articles</Link> </li>
<li> <Link  to="/help" >Help</Link> </li>



</ul>



</div>

}
export default Navbar