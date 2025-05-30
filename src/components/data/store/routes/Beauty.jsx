import BeautyItem from '../components/BeautyItem'
import { useSelector } from 'react-redux';

const Beauty = () => {
  
  const items= useSelector((store)=> store.beauty);
  
  return (
    <main>
    <div className="items-container">
    {items.map((item =>
         <BeautyItem key={item.id} item={item} />) )}
    </div>
  </main>
  )
}

export default Beauty
