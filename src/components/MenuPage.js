import { useEffect, useState } from "react"
import { useParams } from "react-router";

import resList from "../utils/restaurantList"
import { RESTAURANT_URL} from "../utils/constants";
import ShimmerUI from "./Shimmer";


const MenuPage = () =>{
    const [MenuList,setMenuList]=useState([]);
    const {resID}=useParams();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const menuData = await fetch(RESTAURANT_URL+resID);
        console.log("Status:", menuData.status);
        const json=await menuData.json();

        console.log(json);
        setMenuList(json); 
        
    }

    const MenuItems = MenuList?.data?.cards[4]?.groupedCard?.cardGroupedMap?.regular?.cards?.slice(1);

    return(
        <div>
            <h1>{MenuList?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <h2>{MenuList?.data?.cards[2]?.card?.card?.info?.city}</h2>
            {/* <ul> Menu Items
                {
                    MenuItems.map((item) => <li>{item?.card?.card?.categories?.title}</li>)
                }
            </ul> */}
        </div>
    );
}

export default MenuPage;