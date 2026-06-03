import CLOUDINARY_URL from "../utils/constants";

const CardItem = (props) =>{
    const resData=props.resData;
    
    return (
        <div className='card-item'>
            <img className='card-img'  src={CLOUDINARY_URL+resData.card.card.info.cloudinaryImageId} alt='Ordering Food img' ></img>
            <h3>{resData.card.card.info.name}</h3>
            <h4>{resData.card.card.info.cuisines.join(" ,")}</h4>
            <h4>{resData.card.card.info.avgRating}</h4>
            <h6>{resData.card.card.info.sla.slaString}</h6>
        </div>
    );
}

export default CardItem;