import style from '../style/Yummylicious.module.css'
import { Link } from 'react-router-dom'

function Yummylicious(){



    return  <div  className={style.latestNewsSection}>

    <div  className={style.heading} >
    <div> 
       <h2>Discover Restaurants</h2>
    </div>
    <div className={style.content} >
    <h3>Vegetarian Directory</h3>    
    <h3>. Restaurant Menu </h3>
    <h3> <Link to="/https://www.facebook.com/KindMeal.my"  style={{textDecoration:"none",color:"rgb(116, 114, 111)"}} > . Food Map</Link></h3>
    </div>
    </div>


    <div className={style.newsImage} >
    <div>
    <img src="https://www.kindmeal.my/photos/item/0/598-8528-s.jpg"   alt="" />
    <p>Vegan Sugar Free Black Sesame Ice Cream</p>

    </div>

    <div>    <img src="https://www.kindmeal.my/photos/item/0/126-6530-s.jpg" alt="" />
    <p>Vegetarian Spring Rolls with Tea 水仙茶卷</p>
    </div>


<div>  <img src="https://www.kindmeal.my/photos/item/0/541-7203-s.jpg" alt="" />
<p>Acar</p>
</div>
  
<div>  <img  src="https://www.kindmeal.my/photos/item/0/152-1576-s.jpg" alt="" />
<p>Gintonica</p>
</div>
  
<div>
    <img src="https://www.kindmeal.my/photos/item/0/626-9564-s.jpg" alt="" />
    <p>Story of My Life</p>
    </div>
    
    </div>

    
    
    </div>

}

export default Yummylicious