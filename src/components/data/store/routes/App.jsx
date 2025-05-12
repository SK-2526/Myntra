
// import './App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import Fetchitem from '../components/fetchItem';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner'
import { useEffect, useState } from 'react';

function App() {

   const fetchStatus=  useSelector((store)=> store.fetchStatus);
  //udated
  // const [showSpinner, setShowSpinner] = useState(true);
  // const [spinnerStart, setSpinnerStart] = useState(null);


  // useEffect(() => {
  //   if (fetchStatus) {
  //     // Start spinner
  //     setShowSpinner(true);
  //     setSpinnerStart(Date.now());
  //   } else if (!fetchStatus && spinnerStart !== null) {
  //     // Ensure spinner lasts at least 2s
  //     const elapsed = Date.now() - spinnerStart;
  //     const delay = Math.max(0, 2000 - elapsed);

  //     const timer = setTimeout(() => {
  //       setShowSpinner(false);
  //       setSpinnerStart(null); // reset
  //     }, delay);
  //   return () => clearTimeout(timer);
  //   }
  // }, [fetchStatus]);
  
  return ( 
   <>
  < Header /> 
  <Fetchitem />
  {fetchStatus.CurrentlyFatching? <LoadingSpinner /> : <Outlet/> }
  <Footer />
</>
  )
}

export default App
