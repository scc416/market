import banner1 from "../banners/1.jpeg";
import banner2 from "../banners/2.jpeg";
import banner3 from "../banners/3.jpeg";
import banner4 from "../banners/4.jpeg";
import banner5 from "../banners/5.jpg";
import "./Carousell.css";

const Carousell = () => {
  return (
    <div className="carousell">
      <img src={banner1} alt="" />
      <img src={banner2} alt="" />
      <img src={banner3} alt="" />
      <img src={banner4} alt="" />
      <img src={banner5} alt="" />
    </div>
  );
};

export default Carousell;
