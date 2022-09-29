import style from '../style/Latestnews.module.css'
import {Link}  from 'react-router-dom'

function LatestNews(){


    

    return <div  className={style.latestNewsSection}>

    <div  className={style.heading} >
    <div> 
       <h2>Latest News & Videos</h2>
    </div>
    <div className={style.content} >
    <h3>Save Lives with Your Blog</h3>    
    <h3>. News & Articles </h3>
    <h3> <Link to="/https://www.facebook.com/KindMeal.my"  style={{textDecoration:"none",color:"rgb(116, 114, 111)"}} > . Follow Our Facebook</Link></h3>
    </div>
    </div>


    <div className={style.newsImage} >
    <div>
    <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/307583882_5740056329387938_8686180043837495004_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=8024bb&_nc_ohc=EpA93b8Qy7sAX-i9ff4&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8BN50NAJKEGUEDMU7YrJ_d8RlU9YQ2vjcSmZDR1dNVgg&oe=633A00FC"   alt="" />
    <p>Indulge In Bings Banting''s Decadent Desserts Of Bingsu, Cub..</p>

    </div>

    <div>    <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/302450409_1447446119095671_650723446000958095_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=ksp6O1xUXLIAX-JRuNS&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT_YjIg6GLP99RntFqoNhAakGcKMveUZ_Vbs96I0zaq3hg&oe=63397C80" alt="" />
    <p>Ethel The Tortoise''s Bedtime Routine 🐢</p>
    </div>


<div>  <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/304779427_454113786736771_1344955773046935629_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=IIpGL-F38DYAX9XgIEC&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9f5z2KCcTf5KQCrREW8oGIYeYlMOOMy8m9_czOVkoy-A&oe=633ADE6D" alt="" />
<p>Watch Sally''s Incredible Transformation</p>
</div>
  
<div>  <img  src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/74671980_573691586712442_6808626047337103360_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=PQqO7lMlEmMAX9vFzOm&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9qAr0SUfIZopMak2hR9kwAhVbzILhErGSrFCHCEwAS7Q&oe=633A48D7" alt="" />
<p>Nature''s Miracle Orphans: Orphan Koala Plays With Carer</p>
</div>
  
<div>
    <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/299563258_384697190303446_2038493280203195929_n.jpg?stp=dst-jpg_s720x720&_nc_cat=111&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=hBktGk0BERQAX9k15eF&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8Rr32fPtAmaYL63xhZBNM5371Irkp3MMmxbE342RqzMQ&oe=6339CFC6" alt="" />
    <p>Unlikely Animal Friendships 🐻‍❄️</p>
    </div>
    
    </div>

    
    
    </div>
}

export default LatestNews