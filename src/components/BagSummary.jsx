
//It contains right side of the bag page : calculation part 
import { useSelector } from 'react-redux';

const BagSummary=()=>{

const bagItemsIds = useSelector((state)=> state.bag);      //to get items from bag
// const items = useSelector((state)=> state.items); //all items 


const items = useSelector((state) => [
  ...state.items,
  ...state.mens,
  ...state.womens,
  ...state.kids,
  ...state.beauty,
  ...state.home
]);

//to get elements from bag via index
const finalItems= items.filter((item)=>{  
  const itemIndex= bagItemsIds.indexOf(item.id); 
  return itemIndex >=0;
});  

//Calculation Part of each card 
const CONVENIENCE_FEES = 99;
  let totalItem = bagItemsIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  

return (

    <div className="bag-summary">
     <div className="bag-details-container">
      <div className="price-header">PRICE DETAIL ( {totalItem} )</div>
        
       <div className="price-item">
        <span className="price-item-tag">Total MRP</span>
        <span className="price-item-value">₹{totalMRP}</span>     
       </div>

       <div className="price-item">
        <span className="price-item-tag">Discount On MRP</span>
        <span className="price-item-value1">₹{totalDiscount}</span>     
       </div>

       <div className="price-item">
        <span className="price-item-tag">Convenience Fee</span>
        <span className="price-item-value">₹99</span>     
       </div>
       <hr/>

       <div className="price-footer">
       <span className="price-item-tag">Total Amount</span>
       <span className="price-item-value">₹{finalPayment}</span>
       </div>
     </div>

     <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
    </button>

    </div>
    )
}

export default BagSummary