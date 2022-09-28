import { useState ,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import style from '../style/Header.module.css'
import { AuthContext } from "../Context/AuthContext";



function Header() {
    let navigate=useNavigate()
    let {AuthState,handleLogOut}=useContext(AuthContext)


 let [display,setDisplay]=useState({display:"none"})
 let [displayShow,setDisplayShow]=useState(false)

  function handleSingupPopUp() {

    setDisplayShow(!displayShow)
    displayShow ? setDisplay({   display:"flex",width:"50%",height:"auto"}) : setDisplay({display:"none"})


  }


  return (
    <div className={style.headermain} >
      <div   className={style.header}  >
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.kindmeal.my/images/logo-kindmeal.png"
              alt=""
            />
          </Link>
        </div>

        <div className={style.twiterlogo}>
          <img
            src="https://www.kindmeal.my/images/follow_blog_grey.png"
            alt=""
          />
          <img
            src="https://www.kindmeal.my/images/follow_facebook_grey.png"
            alt=""
          />
          <img
            src="https://www.kindmeal.my/images/follow_twitter_grey.png"
            alt=""
          />
        </div>

        <div className={style.social} >
        {AuthState.isAuth? <p>{AuthState.token}</p> :<p>Login</p>
    }
          <p>Facebook</p>
          <p>Email</p>

          {AuthState.isAuth?  <p onClick={handleLogOut} style={{cursor:"pointer"}} >Logout</p>:<p onClick={handleSingupPopUp} style={{cursor:"pointer"}} > Singup</p>
        }
        </div>
      </div>

      <div className={style.popup} style={display} onClick={()=>handleSingupPopUp()} >
      <div  className="logoinsidepopup" >
      
      <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt=""  width="250px" />
      <h3>Join KindMeal For Free Now</h3>
      </div>
        <p  >Please select the type of membership to proceed</p>
        <div className={style.FoodLover} style={{display:"flex"}}
         onClick={()=>{
            
            handleSingupPopUp()
            navigate("/signup")}}
        
        >
          <div className="image">
            <img src="https://www.kindmeal.my/images/join_normal.png" alt="" />
          </div>
          <div className="content">
            <h3>FoodLover</h3>
            <p>
              Join FREE to enjoy yummy deals, share reviews & meet our community
              of compassionate food lovers.
            </p>
          </div>
        </div>

        <div className={style.Restaurant}  style={{display:"flex"}}
        
        onClick={()=>{
            handleSingupPopUp()
            navigate("/signup")}} 
        
        >
          <div className="image">
            <img src="https://www.kindmeal.my/images/join_shop.png" alt="" />
          </div>
          <div className="content">
            <h3>Restaurant / Shop Owner</h3>
            <p>
              List your food outlet, create exciting vegetarian deals & showcase
              your delicious menu for FREE. Enjoy our yummy deals, share reviews
              & meet food lovers too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
