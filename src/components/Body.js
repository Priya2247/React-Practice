import CardItem from "./CardItem";
import resList from "../utils/restaurantList";
import { useState , useEffect } from "react";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router";
import ShimmerUI from "./Shimmer";
import OfflinePage from "./OfflinePage";





const Body = () =>{
    const [RestaurantList,setRestaurantList]=useState([]);
    const [FilteredList, setFilteredList]=useState([]);
    const [searchText, setSearchText]=useState("");

    const fetchData=async()=>{
        const Data=await fetch(SWIGGY_URL);
        const jsonData= await Data.json();

        const destructuredData = jsonData?.data?.cards.slice(3);

        setRestaurantList(destructuredData);
        setFilteredList(destructuredData);
        
        // setTimeout(()=>{
        //     setRestaurantList(resList);
        //     setFilteredList(resList);
        // },3000);
        
    }
    
    useEffect(()=>{fetchData()},[]);

    
    return(
        <> 
          <div className="filters">
            <button className="filter-btn" onClick={()=>{
                const filteredList = RestaurantList.filter((Restaurant)=> Restaurant?.card?.card?.info?.avgRating>4.5);
                setFilteredList(filteredList);
                }}>
                    Top Restaurants
            </button>

            <input value={searchText} onChange={(e)=> setSearchText(e.target.value)}></input>

            <button className="search-btn"  onClick={()=>{
                if(searchText.trim() === ""){
                    setFilteredList(RestaurantList);
                    return;
                }
                console.log(searchText);
                const filteredList= RestaurantList.filter((res)=> res?.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredList(filteredList);
            }}>
                search
            </button>
          </div>
           <div className='card-container'>
                {
                     RestaurantList.length===0 ? Array(15).fill("").map((_,index) => <ShimmerUI key={index}></ShimmerUI>)
                     :
                     FilteredList.length===0 ? <h1>Search Not Found !!!</h1> 
                     :
                     FilteredList.map((Restaurant) => 
                        <Link key={Restaurant?.card?.card?.info?.id} to={'/restaurants/'+Restaurant?.card?.card?.info?.id}><CardItem  resData={Restaurant}/></Link>)
                }
            </div>
        </>
    );
}

export default Body;