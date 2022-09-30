






    import axios from "axios"
import { useEffect, useState } from "react"
import style from '../style/Kind.module.css'


function KindMoments(){



    let [data,setData]=useState([])

   async function getData(){

    await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then((res)=>{

        console.log(res.data.categories )

            setData(res.data.categories)
    })
    .catch(err=>console.log(err))


    }

useEffect(()=>{
    getData()

},[])




    return <div className={style.container}>
    
    {data? data.map(item=>{
        return <div  key={item.idCategory}  className={style.box}   >
          <img src={item.strCategoryThumb}  alt="" />
          <h3>{item.strCategory}</h3>
          <br/>
          <p>{item.strCategoryDescription}</p>
        </div>
    }):null}
    
    
    </div>




}
export default KindMoments