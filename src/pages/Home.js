import "./Home.css";

const Home = () => {
  //we can fetch data here if we decided to make the page dynamic
  return (
    <div className="Home">
      <p className="quote">Welcome to The Sweet Blooms Kitchen, where every bite is a reminder of the warmth of home and the charm of something made with love.</p>
      <section className="homeLinks"><button>visit menu</button><button>Best-sellers</button></section>
      <p className="arrows">arrow component goes here</p>
    </div>
  )
}

export default Home;