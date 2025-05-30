import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const KidsItem= ({item})=>{

const dispatch= useDispatch(); // use when something changes like onClick or API handle 
//Logic: we check if my bag items ( contains arrays id of all card content )
//== my current card which is display on my home page if it 
//found then we display remove button or addtoBag buttons 
    
   const bagItem= useSelector(store=> store.bag);
   const elementFound= bagItem.indexOf(item.id) >=0;


//Add To back button ( handle click function code )   
const handleaddToBag= ()=>{      
 dispatch(bagActions.addTobag(item.id));
}

const handleRemove=()=>{
    dispatch(bagActions.removeFrombag(item.id));
}

return(
    <>
                  {/* Display Card on UI */}
     <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      
      {elementFound?
       <button type="button" className="btn btn-add-bag1"
       onClick={handleRemove} 
       > <AiFillDelete />Remove from bag</button>:
      
      <button 
      type="button" className="btn btn-success btn-add-bag" 
      onClick={handleaddToBag}
      > <GrAddCircle />Add to bag</button>
      } 

    </div>    
    </>
)

}
export default KidsItem;    