import { useEffect, useState } from "react"
import { useParams } from "react-router";

import { RESTAURANT_URL} from "../utils/constants";
import ShimmerUI from "./Shimmer";
import CLOUDINARY_URL from "../utils/constants";
import IsVeg from "./IsVeg";
import MenuCard from "./MenuCard";


const MenuPage = () =>{
    const [MenuList,setMenuList]=useState([]);
    const {resID}=useParams();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const menuData = await fetch(RESTAURANT_URL+resID);
        console.log("Status:", menuData.status);
        const json= await menuData.json();
        console.log(json);
        setMenuList(json); 
        
    }

    const MenuItems = MenuList?.data?.cards?.[2];

    return(
        MenuList.length==0? <div className="flex justify-center mt-8"><ShimmerUI/></div>
           :
        <div>
            <div className="flex flex-col items-center my-4 font-sans font-semibold text-stone-800">
                <h1 className="mb-2 text-2xl">{MenuItems?.card?.card?.info?.name}</h1>
                    <img className="mx-auto w-3/12 rounded-2xl shadow-b shadow-gray-500" src={CLOUDINARY_URL+ MenuItems?.card?.card?.info?.cloudinaryImageId} ></img>
                <h2 className="mt-2">{MenuItems?.card?.card?.info?.locality +", "+ MenuItems?.card?.card?.info?.areaName}</h2>
                <h2>{"Rating"+" "+MenuItems?.card?.card?.info?.avgRatingString+'⭐'}</h2>
                <h2>{MenuItems?.card?.card?.info?.costForTwo}</h2>
                <IsVeg veg={MenuItems?.card?.card?.info?.veg}/>
            </div>
            <MenuCard MenuData={MenuList}/>
        </div>
    );
}

export default MenuPage;