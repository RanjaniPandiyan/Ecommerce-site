import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import banner1 from "/images/kidsbanner.png";
import banner2 from "/images/menbanner.png";
import banner3 from "/images/toysbanner.png";
import banner4 from "/images/womenbanner.png";
import banner5 from "/images/travelbanner.png";
import ExploreProducts from "../components/ExploreProducts";
// import { Link } from "react-router-dom";
function Home() {
  const banners = [banner1, banner2, banner3, banner4, banner5];
  const [data, setData] = useState([]);
  const [products, setProduct] = useState([]);
  //axios
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("/data.json");
        setData(res.data);
        const response = await axios.get(
          "http://localhost:5000/api/products/time",
        );
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);
  const categories = [
    { key: "men", label: "Mens" },
    { key: "kids", label: "Kids" },
    { key: "women", label: "Womens" },
    { key: "travel", label: "Travel" },
    { key: "toys", label: "Toys" },
  ];
  return (
    <div id="home">
      {/* Banners */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {banners.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={img}
                className="d-block w-100 object-fit-cover"
                style={{ height: 200, backgroundSize: "cover" }}
                alt="..."
                key={index}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Quick Links */}
      <div className="row row-cols-md-5 row-cols-sm-5 g-0 d-flex justify-content-center p-4">
        {categories.map((cat) => (
          <div className="col text-center" key={cat.key}>
            <img
              src={data ? data[cat.key] : ""}
              className="rounded-circle object-fit-cover"
              style={{ width: 100, height: 100 }}
            />

            <h6 className="text-dark mt-2">{cat.label}</h6>
          </div>
        ))}
      </div>
      {/* New arrivals */}
      <div className="mt-2 p-3">
        <h3 className="text-dark text-center" style={{ fontFamily: "georgia" }}>
          New Arrivals
        </h3>
      </div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 d-flex justify-content-center g-3">
        {products.map((items) => (
          <ExploreProducts
            id={items._id}
            images={items.image?.url}
            name={items.name}
            price={items.price}
            key={items._id}
          />
        ))}
      </div>
      {/* Promo Banners */}
      <div className="mt-2 p-3">
        <h3 className="text-dark text-center" style={{ fontFamily: "georgia" }}>
          Category
        </h3>
      </div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 d-flex justify-content-center g-3">
        {products.map((items) => (
          <ExploreProducts
            id={items._id}
            images={items.image?.url}
            name={items.name}
            price={items.price}
            key={items._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
