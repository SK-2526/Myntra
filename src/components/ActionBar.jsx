import {
    UserIcon,
    HeartIcon,
    ShoppingBagIcon,
  } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';  
import {Link} from 'react-router-dom'
  
  const ActionBar = () => {

   const bag= useSelector(store=> store.bag)

    return (
      <div className="w-58 bg-white flex-wrap">
        <div className="flex justify-around flex-wrap items-center py-1">
          
          <div className="flex flex-col items-center ">
            <UserIcon className="h-6 w-6 text-gray-700 text-black" />
            <span className="text-xs mt-1 text-gray-700">Profile</span>
          </div>
          
          <div className="flex flex-col items-center">
            <HeartIcon className="h-6 w-6 text-gray-700" />
            <span className="text-xs mt-1 text-gray-700">Wishlist</span>
          </div>
          
          <div className="flex flex-col items-center relative">
            <Link to='/bag'>
            
  <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
  <span className="text-xs mt-1 text-gray-700 ">Bag</span>
  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[13px] px-1.5 py-0.5 rounded-full">
  {bag.length}
  </span>
            </Link>
          </div>
        
        </div>
      </div>
    );
  };
  
  export default ActionBar;
  