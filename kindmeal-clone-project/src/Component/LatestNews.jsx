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
    <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/311147322_213792134314736_7920632023119986791_n.jpg?stp=dst-jpg_s720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=yGegr7NAc5AAX-GE8mS&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT-m4xvjcWeTujTIVaYPxmVIOsQ5vA-nAuEtKaoSl4dcEg&oe=6349E5E3"   alt="" />
    <p>Indulge In Bings Banting''s Decadent Desserts Of Bingsu, Cub..</p>

    </div>

    <div>    <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/301323692_1088259611796501_2028673963294828706_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=lwQEw_Wi-XQAX_mDbKF&_nc_oc=AQlLLs4uOXE3HC_FRouSzLLflUZ3h13_j_OcsGg9hCGh0adac4Ba-J8PCuEnUNpnT7U&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT_qQO717BGj2_6fAMhCeTKDRnWOP2WBy6meQODJuTGj4g&oe=634A0618" alt="" />
    <p>Ethel The Tortoise''s Bedtime Routine 🐢</p>
    </div>


<div>  <img src="https://external-xsp1-2.xx.fbcdn.net/emg1/v/t13/8873276028810936010?url=https%3A%2F%2Fapicms.thestar.com.my%2Fuploads%2Fimages%2F2022%2F10%2F09%2F1769728.jpg&fb_obo=1&utld=com.my&stp=c0.5000x0.5000f_dst-emg0_p647x647_q75&ccb=13-1&oh=06_Aapz50rmsACG2MiS1IQea2F-MeFzRu8AhPI6vVPxtux_Pg&oe=63460CAF&_nc_sid=834697" alt="" />
<p>Watch Sally''s Incredible Transformation</p>
</div>
  
<div>  <img  src="https://scontent-xsp1-2.xx.fbcdn.net/v/t15.5256-10/30818136_1699851283426698_5099162624680001536_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=ad6a45&_nc_ohc=Z0INi3k3GsIAX_1w5d2&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT8N7yaIvrVlaKbEVfjI2UbfU30jey0rmuwtGuoNjDD3rQ&oe=6348E239" alt="" />
<p>Nature''s Miracle Orphans: Orphan Koala Plays With Carer</p>
</div>
  
<div>
    <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-6/310857346_5761938663866371_800643201383545547_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&ccb=1-7&_nc_sid=8024bb&_nc_ohc=yADopeoj_Q4AX8oBzno&_nc_ht=scontent-xsp1-2.xx&edm=ALdPpPkEAAAA&oh=00_AT9_lJHhKtQmKpx8Rem3AICvIFVHu8DDJW77OOqb6GUggQ&oe=63491F70" alt="" />
    <p>Unlikely Animal Friendships 🐻‍❄️</p>
    </div>
    
    </div>

    
    
    </div>
}

export default LatestNews