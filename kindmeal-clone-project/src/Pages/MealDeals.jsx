/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom"
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
  abhi="Whole30"
}
// console.log(abhi)


  let [data, setData] = useState([]);
  let [item,setItem]=useState(abhi)
  let [page,setPage]=useState(inittialValue)


  let ref=useRef(null)

  async function getData() {
    // let key = "915e9a9b1dfd44cd9d2566032da7f5eb";
    // let key2="d28ef1bc4f3c49c2af604ba1075e472e"
    let key3="66992366aeb3479ca4024dd1e9a4c662"
    // let key4="5318de1dc92041388302c621904dcb3f"

    await axios
      .get(
        `https://api.spoonacular.com/food/search?query=${item}&titleMatch&diet=Whole30&offset=${page}&number=15&apiKey=${key3}`
      )
      .then((res) => {
        console.log(res.data.searchResults[0].results);
        ref.current=res.data.searchResults[0].totalResults
        setData(res.data.searchResults[0].results);
      })

      .catch((err) => console.log(err));
  }



  function handleSubmit(e){
    e.preventDefault()
    getData()
  }

  useEffect(() => {
    getData();
  }, [page ]);



  useEffect(()=>{

    setSearchParams({page,item})

  },[page,item])

  // console.log( inittialValue)

  return (
    <div className={style.container} >

    <div  className={style.form}>

    <form onSubmit={handleSubmit} >
    <input placeholder="Seacrh By Name" onChange={(e)=>setItem(e.target.value)}  />    

    <input type="submit" value="Search Deals" />
    
    </form>
    
    </div>

    <div>
    <button disabled={page===1}  onClick={()=>setPage(page-1)} >Prev</button>
    <button>{page}</button>
    <button disabled={page===ref.current} onClick={()=>setPage(page+1)}  >Next</button>
    
    </div>


    <div className={style.card} >
    
    {data.length!==0? data.map(item=>{
        
        return   <Link to={`/mealdeals/${item.name}`} key={item.id} style={{ textDecoration: "none",color:"teal",fontSize:"22px"}}> <div    >
        
        <img src={item.image} alt="" className={style.mainImage}/>
        <p   >{item.name}</p>
        <img src="https://www.kindmeal.my/images/icon_egg.png" alt=""/>
        <img src="https://www.kindmeal.my/images/icon_egg.png"  alt=""/>
        <img src="https://www.kindmeal.my/images/icon_alcohol_disabled.png" alt="" />
        
        </div>
        </Link>

    }):<h3>items not available</h3>}
    
    </div>


    </div>
  );
}
export default MealDeals;
