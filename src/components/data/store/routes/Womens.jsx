import { useSelector } from 'react-redux';
import WomensItem from '../components/WomensItem'


const Womens = () => {

  const items= useSelector((store)=> store.womens);
  console.log("WOMENS DATA",items);
  return (
     <main>
    <div className="items-container">
    {items.map((item =>
         <WomensItem key={item.id} item={item} />) )}
    </div>
  </main>
  )
}

export default Womens
