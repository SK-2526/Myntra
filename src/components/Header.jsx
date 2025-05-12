import myimg from '/images/myntra_logo.webp'
import ActionBar from './ActionBar';
import {Link} from 'react-router-dom'

const Header= ()=>{
 return(
    <>
     <header>      
    <div className="logo_container">
      <Link to="/"><img className="myntra_home" src={myimg} alt="Myntra Home"/></Link>
    </div>
 
 {/* NAv Bar */}
    <nav className='nav_bar'> 
     
     <a href="">MENS</a>
     <a href="">WOMENS</a>
     <a href="">KIDS</a>
     <a href="">Hame & Living</a>
     <a href="">Beauty</a>
     <a href="">Studio <sup>New</sup></a>
    </nav>

    <div className='search_bar'>
     <span className='material-symbols-outlined search_icon'>search</span>
     <input className='search_input' type="text" placeholder='search for products, Brands'/>
    </div>

    <ActionBar />  
</header>
    </>
 )
}
export default Header