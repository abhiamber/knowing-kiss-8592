import style from '../style/Amazing.module.css'
import { Link } from 'react-router-dom'

function Amazing(){



    return  <div  className={style.latestNewsSection}>

    <div  className={style.heading} >
    <div> 
       <h2>Amazing Superheroes</h2>
    </div>
    <div className={style.content} >
    <h3>Latest Buzz</h3>    
    <h3>. Lifestyle Ambassadors</h3>
    <h3> <Link to="/https://www.facebook.com/KindMeal.my"  style={{textDecoration:"none",color:"orange"}} > .  Win Gifts!</Link></h3>
    </div>
    </div>


    <div className={style.newsImage} >
    <div>
    <img src="https://www.kindmeal.my/photos/member/18/18595-m.jpg"   alt="" />
    <p>VegeLock</p>

    </div>

    <div>    <img src="https://www.kindmeal.my/photos/member/32/32883-m.jpg" alt="" />
    <p>DakshanKrishnamurthy</p>
    </div>


<div>  <img src="https://www.kindmeal.my/photos/member/32/32488-m.jpg" alt="" />
<p>AmyLoo</p>
</div>
  
<div>  <img  src="https://www.kindmeal.my/photos/item/0/152-1576-s.jpg" alt="" />
<p>LooBoonLan</p>
</div>
  
<div>
    <img src="https://www.kindmeal.my/photos/member/21/21698-m.jpg" alt="" />
    <p>KaRenChan2</p>
    </div>
    
    </div>

    
    
    </div>

}

export default Amazing