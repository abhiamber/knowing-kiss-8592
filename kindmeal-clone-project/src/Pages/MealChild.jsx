import {useParams} from  'react-router-dom'
import axios from 'axios';
import { useState ,useEffect} from 'react';
function MealChild(){
let [data,setData]=useState()
    let {id}=useParams()

// console.log(id)

    async function getData() {
            // let key = "da04427490fc41aea388dae1a6eb4135";
    // let key2="d28ef1bc4f3c49c2af604ba1075e472e"
    // let key3="66992366aeb3479ca4024dd1e9a4c662"
    let key4="5318de1dc92041388302c621904dcb3f"
    
        await axios
          .get(
            `https://api.spoonacular.com/recipes/complexSearch?id=${id}&maxFat=25&includeIngredients=cheese&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&apiKey=${key4}`
          )
          .then((res) => {
            // console.log(res.data.results);
            setData(res.data.results);
          })
    
          .catch((err) => console.log(err));
      }
    
    
    
    
      useEffect(() => {
        getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id]);
    
    if(data===undefined){

      return <h2>......Loading</h2>
    }

return <div style={{marginTop:"50px"}} >



  {data? data.map(item=>{
    return <div  key={item.id} style={{display:"flex",margin:"30px"}} >

    <div>

    <img  src={item.image} alt="" />
    <h2>{item.creditsText}</h2>
    <h3>{item.title}</h3>
    <p> Price : {item.pricePerServing}</p>
    <h3>
    Nutrition: {`${item.nutrition.nutrients[0].name}  ${item.nutrition.nutrients[0].amount}  ${item.nutrition.nutrients[0].unit}`} 
    
    </h3>

    <p>Like {item.aggregateLikes}</p>
    <p>HealthScore  :{item.healthScore}</p>    
    <div/>
    
    <div>
    
    {item.nutrition.nutrients.map(item=>{

      return <span  key={item.name} style={{fontSize:"20px",textAlign:"center"}} >
      
      <span style={{fontSize:"25px"}} >{item.name} -  </span>
      <span>{item.amount} </span>
      <span>{item.unit}    ,</span>
      </span>
      
    })}
    
    </div>
    
    </div>
    
    </div>

  }):null}


</div>

}

export default MealChild