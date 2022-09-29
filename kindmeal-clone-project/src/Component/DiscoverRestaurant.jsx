import style from '../style/Discover.module.css'
import {Link}  from 'react-router-dom'


function  DiscoverRestaurant(){



    return  <div  className={style.latestNewsSection}>

    <div  className={style.heading} >
    <div> 
       <h2>Yummylicious Moments</h2>
    </div>
    <div className={style.content} >
    <h3>Secret Recipes</h3>    
    <h3>.  Member Hot Picks</h3>
    <h3> <Link to="/https://www.facebook.com/KindMeal.my"  style={{textDecoration:"none",color:"rgb(116, 114, 111)"}} > .  Photo Moments</Link></h3>
    </div>
    </div>


    <div className={style.newsImage} >
    <div>
    <img src="https://www.kindmeal.my/photos/moment/24/24454-47170-s.jpg"   alt="" />
    <p>Good Food By Gan</p>
    <p>YeeHuanGan</p>

    </div>

    <div>    <img src="https://www.kindmeal.my/photos/moment/24/24446-47144-s.jpg" alt="" />
    <p>Ador Cafe</p>
    <p>ChewLengLeng</p>
    </div>


<div>  <img src="https://www.kindmeal.my/photos/moment/24/24440-47121-s.jpg" alt="" />
<p>Japanese Fusion Delights</p>
<p>William21</p>
</div>
  
<div>  <img  src="https://www.kindmeal.my/photos/moment/24/24438-47116-s.jpg" alt="" />
<p>A Delicious KindMoment</p>
<p>CindyChang</p>
</div>
  
<div>
    <img src="https://www.kindmeal.my/photos/moment/24/24437-47115-s.jpg" alt="" />
    <p>A Delicious KindMoment</p>
    <p>karenkhong</p>
    </div>
    
    </div>

    
    
    </div>

}

export default DiscoverRestaurant