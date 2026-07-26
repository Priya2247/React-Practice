import CardItem, { AddDiscount } from "./CardItem";
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
        console.log(Data.status);
        const jsonData= await Data.json();
        console.log(jsonData);
        const destructuredData = jsonData?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestaurantList(destructuredData);
        setFilteredList(destructuredData);
        
        // setTimeout(()=>{
        //     setRestaurantList(resList);
        //     setFilteredList(resList);
        // },3000);
        
    }
    
    useEffect(()=>{fetchData()},[]);
    const DiscountCard = AddDiscount(CardItem);

    
    return(
        <> 
          <div className="flex m-6 text-white text-shadow-gray-950 align-middle items-center justify-between">
            <div>

            <input value={searchText} placeholder="Search For Restaurants......" className="border-[1] rounded-sm border-gray-800 w-md mr-2 pl-2  text-black" onChange={(e)=> setSearchText(e.target.value)}></input>
            <button className="bg-orange-600 rounded-md px-4 py-1 mr-2 cursor-pointer"  onClick={()=>{
                if(searchText.trim() === ""){
                    setFilteredList(RestaurantList);
                    return;
                }
                console.log(searchText);
                const filteredList= RestaurantList.filter((res)=> res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredList(filteredList);
            }}>
                search
            </button> 

            </div>
             <button className="bg-linear-to-tl from-gray-600 to-yellow-600 px-4 py-2 mx-4 rounded-md cursor-pointer" onClick={()=>{
                const filteredList = RestaurantList.filter((Restaurant)=> Restaurant?.info?.avgRating>4.5);
                setFilteredList(filteredList);
                }}>
                    Top Restaurants
                </button>
            </div>

           <div className='flex flex-wrap'>
                {
                     RestaurantList.length===0 ? <div className="w-screen">
                          <h1 className="font-sans font-medium m-4 animate-bounce">Loading....</h1>
                           <div className="flex flex-wrap"> {Array(15).fill("").map((_,index) => <ShimmerUI key={index}></ShimmerUI>)}</div>
                        </div>
                     :
                     FilteredList.length===0 ? <h1>Search Not Found !!!</h1> 
                     :
                     FilteredList.map((Restaurant) => 
                        <Link key={Restaurant?.info?.id} to={'/restaurants/'+Restaurant?.info?.id}>{Restaurant?.info?.aggregatedDiscountInfoV3?.header ? <DiscountCard resData={Restaurant}/> : <CardItem  resData={Restaurant}/>}</Link>)
                }
            </div>
        </>
    );
}

export default Body;