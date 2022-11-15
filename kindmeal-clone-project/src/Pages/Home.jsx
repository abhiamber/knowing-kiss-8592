import { useEffect, useRef, useState } from "react";
import data from "../data.json";
import style from '../style/Home.module.css'
import LatestNews from '../Component/LatestNews'
import DiscoverRestaurant from '../Component/DiscoverRestaurant'
import Yummylicious from '../Component/Yummylicious'
import Amazing from '../Component/Amazing'
import CardSection from '../Component/CardSection'

let { food, logo } = data;

function Home() {
  let [index, setIndex] = useState(0);
  let ref = useRef(null);

  

  useEffect(() => {
    return clearInterval(ref.current);
  }, []);

  function getImage() {
    ref.current = setInterval(() => {
      setIndex((prev) => {

        if (prev > 5) {
          prev=0
        }
        // console.log(prev)
        return prev + 1});
    }, 4500);
  }

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className={style.container}>
    <div className={style.postercontainer} >
      <div className={style.poster}>
        <div className={style.food}>
          <img src={food[index].url} alt="" />
          <p>{food[index].title}</p>
        </div>

        <div className={style.foodlogo}>
        <img src={logo[index].url} alt="" />

        </div>
      </div>

      <div className={style.posterpiece}>
        {food.map((item) => {
          return <div key={item.id}  className={style.mapData} >        
          <img src={item.url} alt=""  />
          </div>

        })}
      </div>
      </div>

<LatestNews/>
<DiscoverRestaurant/>
<Yummylicious/>
<Amazing/>
<CardSection/>

     

    </div>
  );
}
export default Home;
