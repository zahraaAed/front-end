// import "./Slider.css";
import left from "./Arrows/left.png";
import right from "./Arrows/right.png";

export default function ButtonSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? right : left} />
    </button>
  );
}