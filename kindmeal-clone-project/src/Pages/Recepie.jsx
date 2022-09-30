import axios from "axios"
import { useEffect } from "react"



function Recepie(){

function getData(){
    let key = "da04427490fc41aea388dae1a6eb4135";
    let item="pasta"
    let page=1
let url='https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=456%2C987%2C321'

    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=${key}`)
    .then((res)=>{

        console.log(res)
    })
    .catch((err)=>console.log(err))
}


    useEffect(()=>{

        getData()

    },[])

    

return <div>



Recepie



</div>

}

export default Recepie