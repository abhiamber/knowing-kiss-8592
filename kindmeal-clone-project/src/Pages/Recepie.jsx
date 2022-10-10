import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {useSearchParams } from "react-router-dom"
import style from '../style/MealsDeals.module.css'


function getValueFromURL(value){
  // console.log(value)
  value=Number(value)

  if(value<=0 &&  typeof value==="number"){
    value=1
  }

  if(!value){
    value=1
  }

  return value

}

function MealDeals() {
  let [searchParams, setSearchParams] = useSearchParams()

  let inittialValue=getValueFromURL(searchParams.get("page"))
let abhi=searchParams.get("item")
if(!abhi){
  abhi="pasta"
}
// console.log(abhi)


  let [data, setData] = useState([]);
  let [item,setItem]=useState(abhi)
  let [page,setPage]=useState(inittialValue)


  let ref=useRef(null)

  async function getData() {
    // let key = "915e9a9b1dfd44cd9d2566032da7f5eb";
    // let key2="d28ef1bc4f3c49c2af604ba1075e472e"
    // let key3="66992366aeb3479ca4024dd1e9a4c662"
    let key4="5318de1dc92041388302c621904dcb3f"



    

     
    await axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${item}&offset=${page}&number=30&maxFat=25&includeIngredients=cheese&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&apiKey=${key4}`
    )
      .then((res) => {
        console.log(res.data.results);
        // console.log(res.data.results.usedIngredients)
        ref.current=res.data.totalResults
        setData(res.data.results);
      })

      .catch((err) => console.log(err));
  }



  function handleSubmit(){
    getData()
  }

  useEffect(() => {
    getData();
  }, [page]);



  useEffect(()=>{

    setSearchParams({page,item})

  },[page,item])

  // console.log( inittialValue)
  if(data){
    // console.log(data.analyzedInstructions)

  }


  return (
    <div className={style.container} >
    <input placeholder="Search Here"  value={item} onChange={(e)=> setItem(e.target.value)} />
    <button  onClick={handleSubmit} >Search</button>
  <br/>
<button disabled={page===1} onClick={()=>setPage(page-1)} >Prev</button>
<button   >{page}</button>
<button  onClick={()=>setPage(page+1)}  disabled={page===ref.current} >Next</button>



  <div className="receipe"  style={{display:"grid",gridTemplatesColumn:"200px 200px"}}>


  {data? data.map(item=>{

    return  <div key={item.id} >
    
    <img src={item.image} alt="" />
    <h4>{item.title}</h4>
     <h4>readyInMinutes-{item.readyInMinutes}</h4>

     <div>  
     
     
     </div>

     <div>

     </div>

    
    
    </div>
  }):null}


  
  
  </div>




    </div>
  );
}
export default MealDeals;
