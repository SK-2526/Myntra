import { useSelector } from 'react-redux';
import KidsItem from '../components/KidsItem'

const Kids = () => {
  
    const items= useSelector((store)=> store.kids);

  return (
          <main>
    <div className="items-container">
    {items.map((item =>
         <KidsItem key={item.id} item={item} />) )}
    </div>
  </main>
  )
}

export default Kids
