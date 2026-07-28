import { useState } from "react";
import CLOUDINARY_URL from "../utils/constants";
const MenuCard = ({MenuData}) =>{
    const menu = MenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1);
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="font-semibold">
            { 
                menu.map((category, index)=>(
                    <div key={index} className="w-7/12 my-1.5 p-1.5 mx-auto bg-gray-200 rounded-sm cursor-pointer">
                        <div className="flex justify-between px-4" onClick={()=>setOpenIndex(openIndex==index? null : index)}>
                            <h1 className="text-xl " >{category?.card?.card?.title}</h1>
                            <div>{openIndex==index?'▲' : '▼'}</div>
                        </div>
                        {openIndex === index &&
                           category?.card?.card?.itemCards?.map((item)=>(
                                <div key={item?.card?.info?.id} className="mx-3 border-b-gray-400" >
                                    <div className="flex justify-between p-2 bg-white border-b border-b-gray-200">
                                        <div className="w-8/12">
                                            <p className="text-xl">{item?.card?.info?.name}</p>
                                            <p className="text-xl">{"Price : ₹"+item?.card?.info?.price/100}</p>
                                            <p className="text-sm">{item?.card?.info?.description}</p>
                                        </div>
                                        <img className="w-4/12 rounded-md" src={CLOUDINARY_URL+item?.card?.info?.imageId}/>
                                    </div>
                                </div>
                           ))
                        }
                        
                    </div>))
            }
        </div>
    )
}

export default MenuCard;