import { Link } from "react-router-dom"
import style from '../style/CardSection.module.css'



function CardSection(){



    return <div   className={style.section}>

    <div className={style.content} >
    <p>Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform</p>
    <h6 style={{fonSize:"10px",color:"grauwhite"}} >
    Brought to you by
    <Link  to="/https://www.petfinder.my/" > <img  src="https://www.kindmeal.my/images/logo-petfinder-v2.png" alt=""  width="300px"/> </Link>    
    </h6>
    <p>Instant coupon & dining. No upfront coupon payment, booking or printing.</p>
    </div>


    <div  className={style.Card} >
    
    <div>
    <img  src="https://www.kindmeal.my/images/intro_deal.png"  alt=""/>
    <h4>Get Great Deals</h4>
    <p>Show our FREE digital coupons to instantly enjoy exciting deals</p>
    
    </div>


    <div>
    <img  src="https://www.kindmeal.my/images/intro_kindmoment.png"  alt=""/>
    <h4>Share KindMoments</h4>
    <p>Spread the joy by sharing your yummy dining moments</p>
    
    </div>


    
    <div>
    <img  src="https://www.kindmeal.my/images/intro_menu.png"  alt=""/>
    <h4>Discover Delicious Food</h4>
    <p>Explore the latest exquisite offerings and creative menus</p>
    
    </div>


    
    <div>
    <img  src="https://www.kindmeal.my/images/intro_friends.png"  alt=""/>
    <h4>Meet Food Lovers</h4>
    <p>Make new, compassionate friends and share great food tips</p>
    
    </div>    
    </div>



    <p  style={{color:"darkgray",fontSize:"20px"}} >Any restaurant or cafe can join KindMeal, vegetarian or not, as long as the deals and menu featured are meat-free.
    Enjoy a great meat-free dining experience. Easily save animal lives, health, environment and money now!</p>


<div  className={style.button}>
<Link to="/signup" >
<h1  style={{marginBottom:"-20px"}} >Join KindMeal Now</h1>
<h4>Your Tasty Journey begins here</h4>   
</Link>
</div>


<div className={style.logo1} >

<h3  style={{fontSize:"25px",color:"GrayText"}} >Featured On</h3>

<img src="https://www.kindmeal.my/images/media-feature2.png"  alt="" />

</div>

    
    </div>

    
}
export default CardSection