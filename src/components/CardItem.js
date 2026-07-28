import CLOUDINARY_URL from "../utils/constants";
import { useContext } from "react";
import UserContext from "./UserContext";

const CardItem = (props) =>{
    const resData=props?.resData?.info;
    console.log(props);
    
    return (
        <div className='w-60 h-100 m-3 p-2 bg-gray-300 rounded-sm'>
            <img className='card-img'  src={CLOUDINARY_URL+resData.cloudinaryImageId} alt='Ordering Food img' ></img>
            <h3 className="font-bold">{resData?.name}</h3>
            <h4>{resData?.costForTwo}</h4>
            <h4>{resData?.cuisines?.join(" ,")}</h4>
            <h4>{resData?.avgRating}</h4>
            <h6>{"Delivery in "+ resData?.sla?.slaString}</h6>
        </div>
    );
}


export const AddDiscount = (CardItem) => {

    return (props)=>{
        const resData = props?.resData?.info;
        return <div>
            <div className="absolute">
                <div className=" py=2 px-1 bg-green-600 text-white rounded-r-full shadow-bl shadow-gray-500">{resData?.aggregatedDiscountInfoV3?.header}</div>
            </div>
            <CardItem {...props}/>
        </div>
    }
}
export default CardItem;