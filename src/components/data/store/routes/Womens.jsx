import { useSelector } from 'react-redux';
import { useState } from 'react';
import WomensItem from '../components/WomensItem'
import Filter from './Filter';


const Womens = () => {

  const items= useSelector((store)=> store.womens);
  const [filters, setFilters] = useState({ searchTerm: '', sortOrder: '' });

    const filteredItems = items
    .filter((item) =>
      `${item.item_name} ${item.company}`
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filters.sortOrder === 'HightoLow') {  // Descending (High to Low)
        return b.current_price - a.current_price;
      } else if (filters.sortOrder === 'LowtoHigh') {  //Ascending (Low to High)
        return a.current_price - b.current_price;
      }
      return 0;
    });

  return (
    <div className='products'>
     <main className="main">
      <Filter onFilterChange={setFilters}/> 
    <div className="items-container">
    {filteredItems.map((item =>
         <WomensItem key={item.id} item={item} />) )}
    </div>
  </main>
</div>  
  )
}

export default Womens
