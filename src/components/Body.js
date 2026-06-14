import CardItem from "./CardItem";
import resList from "../utils/restaurantList";
import { useState } from "react";

const Body = () =>{
    const [RestaurantList,setRestaurantList]=useState(resList);
    const [searchText, setSearchText]=useState("");
    return(
        <> 
          <div className="filters">
            <button className="filter-btn" onClick={()=>{
                const filteredList=resList.filter((Restaurant)=> Restaurant.card.card.info.avgRating>4.5);
                console.log(filteredList);
                setRestaurantList(filteredList);
                }}>Top Restaurants</button>
            <button className="search-btn" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></button>
            </div>
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