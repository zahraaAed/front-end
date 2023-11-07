import { Link } from "react-router-dom";

const Arrows = () => {

  return (
    <section className="arrows">
      <Link to={"#"}><img src="../images/arrows/left.png" alt="left" /></Link>
        <img src="#" /><img src="#" /><img src="#" /> {/* carousel page indicator, three dots */}
      <Link to={"#"}><img src="../images/arrows/right.png" alt="right" /></Link>
    </section>
  );
};

export default Arrows;