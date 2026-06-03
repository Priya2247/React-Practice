import CardItem from "./CardItem";
import resList from "../utils/restaurantList";

const Body = () =>{
    return(
        <> 
            <button className="filter-btn" >Top Restaurants</button>
            <div className='card-container'>
                {
                    resList.map((Restaurant) => 
                        <CardItem key={Restaurant.card.card.info.id} resData={Restaurant}/>)
        
                }
            </div>
        </>
    );
}

export default Body;