import CardItem from "./CardItem";
import resList from "../utils/restaurantList";
import { useState } from "react";

const Body = () =>{
    const [RestaurantList,setRestaurantList]=useState(resList);
    return(
        <> 
            <button className="filter-btn" onClick={()=>{
                const filteredList=resList.filter((Restaurant)=> Restaurant.card.card.info.avgRating>4.5);
                console.log(filteredList);
                setRestaurantList(filteredList);
                }}>Top Restaurants</button>
            <div className='card-container'>
                {
                    RestaurantList.map((Restaurant) => 
                        <CardItem key={Restaurant.card.card.info.id} resData={Restaurant}/>)
                }
            </div>
        </>
    );
}

export default Body;