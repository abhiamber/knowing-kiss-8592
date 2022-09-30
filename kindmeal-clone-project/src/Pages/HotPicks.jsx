import axios from "axios"
import { useEffect, useState } from "react"
import style from '../style/Hot.module.css'




function HotPicks(){

    let [data,setData]=useState([])

   async function getData(){

    await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood`)
    .then((res)=>{

        // console.log(res.data.meals)

            setData(res.data.meals)
    })
    .catch(err=>console.log(err))


    }

useEffect(()=>{
    getData()

},[])




    return     <div className={style.container}>
    
    {data? data.map(item=>{
        return <div  key={item.idMeal}  className={style.box}   >
          <img src={item.strMealThumb}  alt="" />
          <h3>{item.strMeal}</h3>
          <br/>
        </div>
    }):null}
    
    
    </div>

 


}
export default HotPicks