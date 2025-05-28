import { useSelector } from 'react-redux';
import MensItems from '../components/MensItem'


const Mens = () => {
  const items= useSelector((store)=> store.mens);

  return (
      <main>
    <div className="items-container">
    {items.map((item =>
         <MensItems key={item.id} item={item} />) )}
    </div>
  </main>
  )
}

export default Mens
