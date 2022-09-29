import { useEffect, useState } from "react"
import axios from 'axios'


function MealDeals(){
let [data,setData]=useState([])



   async function getData(){

    let key="da04427490fc41aea388dae1a6eb4135"

    await axios.get(`https://api.spoonacular.com/recipes/716429/information?apiKey=${key}`)
   .then((res)=>{

    console.log(res.data)
    setData(res.data)
   })

   .catch((err)=>console.log(err))

    }

    useEffect(()=>{

     getData()

    },[])

    return <div>
    <h2>MealDeals</h2>
     <img src={data.image} alt="" />
    
    </div>

}
export default MealDeals