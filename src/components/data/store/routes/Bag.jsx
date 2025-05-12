import { useSelector } from 'react-redux';
import Bagitem from '../components/Bagitem';
import BagSummary from '../components/BagSummary'

const Bag= ()=>{

const bagItems = useSelector((state)=> state.bag);//to get items from bag
const items = useSelector((state)=> state.items); //all items 

//to get elements from bag via index
const finalItems= items.filter((item)=>{  
  const itemIndex= bagItems.indexOf(item.id); 
  return itemIndex >=0;
});

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
{/* Display all cards which is clicked by user via AddTOcard button  */}
          {finalItems.map(item => <Bagitem item={item} key={item.id}/>)}
        </div>
      
      <BagSummary />
      </div>
    </main>
    
 );

}
export default Bag