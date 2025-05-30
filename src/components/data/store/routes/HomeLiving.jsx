import { useSelector } from 'react-redux';
import HomeItem from '../components/HomeItem'

const HomeLiving = () => {
 
 const items= useSelector((store)=> store.home);
  
  return (
          <main>
    <div className="items-container">
    {items.map((item =>
         <HomeItem key={item.id} item={item} />) )}
    </div>
  </main>
  )
}

export default HomeLiving
