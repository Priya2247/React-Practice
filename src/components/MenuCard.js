import { useState } from "react";
import CLOUDINARY_URL from "../utils/constants";
const MenuCard = ({MenuData}) =>{
    const menu = MenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1);
    const [openIndex, setOpenIndex] = useState(null);
    const [openItemIndex, setOpenItemIndex] = useState(null);
    return (
        <div className="font-semibold">
            { 
                menu.map((category, index)=>(
                    <div key={index} className="w-8/12 my-1.5 p-1.5 mx-auto bg-gray-300 rounded-sm cursor-pointer">

                        <h1 className="text-xl text-center" onClick={()=>setOpenIndex(openIndex==index?null:index)}>{category.card.card.title}</h1>
                        {openIndex==index &&
                           category.card.card.itemCards.map((item)=>(
                                <div key={item.card.info.id}>
                                    <p className="m-2 p-2 border border-white bg-white" onClick={()=>setOpenItemIndex(openItemIndex==null?item.card.info.id:null)}>{item.card.info.name}</p>
                                    {
                                        openItemIndex === item.card.info.id &&
                                        <div className="flex justify-between m-2 p-2">
                                            <div>
                                                <p>{item.card.info.description}</p>
                                                <p>{"Price : $"+item.card.info.price/100}</p>
                                            </div>
                                            <img className="w-1/4 rounded-md" src={CLOUDINARY_URL+item.card.info.imageId}/>
                                        </div>
                                    }
                                </div>
                           ))
                        }
                        
                    </div>))
            }
        </div>
    )
}

export default MenuCard;