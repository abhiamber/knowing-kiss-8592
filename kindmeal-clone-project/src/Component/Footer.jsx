import style from '../style/Footer.module.css'


function Footer(){



    return <div className={style.footer} >

    <div className={style.footerup} >

    <div className={style.general} >
    <p>General</p>

    <ul>
    <li>Home</li>
    <li>Sign Up</li>
    <li>Businesses / Restaurateurs</li>
    <li>Advertising</li>
    <li>About KindMeal.my</li>
    <li>Help & FAQ</li>
    <li>Terms & Conditions</li>
    <li>Inspiring Partners</li>
    <li>Lifestyle Ambassadors</li>
    <li>Jobs & Careers</li>
    <li>Contact Us</li>     
    </ul>    
    </div>

    <div className={style.Features } >
    <p>Features</p>
    <ul>
    
    <li>Meat-Free Deals</li>
    <li>Tasty Menus</li>
    <li>Kind Moments</li>
    <li>Meat-Free Recipes</li>
    <li>Member Recommendations</li>
    <li>Featured Restaurants</li>
    <li>Vegetarian & Vegan Directory</li>
    <li>Food Map</li>
    <li>Become A Superhero</li>
    <li>Vegan News & Vegetarian Articles</li>
    <li>Latest Comments</li>
    </ul>    
    </div>

    <div className={style.SocialMedia   } >

    <p>Social Media    </p>

    <ul  >
    
    <li>KindMeal Widget</li>
    <li>Facebook</li>
    <li>Twitter</li>
    <li>Instagram</li>
    
    </ul>
    
    </div>


    <div className={style.Mobile} >
        
    <p>Mobile</p>
    <ul>
    
    <li>iPhone & iPod App</li>
    <li>    Android App</li>
    </ul>

    <p>Exciting Promos    </p>

    <ul>
    <li>Gadhimai:Ending Mass Slaughter</li>
    <li>Free Meals</li>
    <li>Food Bloggers</li>
    <li>Uber CHIRP</li>
    <li>Jane Goodall Contest</li>
    <li>Win Digi iPhone 6</li>
    <li>Feed The Poor</li>
    <li>Win Superhero Gifts</li>
    <li>Win an iPad Mini 3</li>    
    </ul>    
    </div>


    <div className={style.PetFindermy} >

    <p>PetFinder.my</p>
    <ul>
    
    <li>Adopt A Pet</li>
    <li>Smartphone Apps</li>
    <li>WAGazine</li>
    <li>Discussion Forum</li>
    <li>Medical Fund</li>
    </ul>    
    </div>
    </div>

    <div className={style.copyright} >
    
    <p>Copyright © KindMeal.my, 2014 - 2022. All rights reserved.    </p>
    <p>This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.
    </p>
    
    </div>
    
    
    
    </div>


}

export default Footer