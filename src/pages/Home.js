import "./Home.css";
import{ Link } from 'react-router-dom';
import '../pages/Navbar.css'

const Home = () => {
  //we can fetch data here if we decided to make the page dynamic
  return (
    
   
    <div className="home">
      <p className="home-quote">Welcome to The Sweet Blooms Kitchen, where every bite is a reminder of the warmth of home and the charm of something made with love.</p>
      <div className="home-links">
        <button  className="visit-menu-button"><Link className="visit-menu-link" to='/categories'>Visit Menu</Link></button>
        <button className="best-sellers-button"><Link className="best-seller-link" to='/about'>Best-Sellers</Link></button>
        </div>
    </div>

  )
}

export default Home;