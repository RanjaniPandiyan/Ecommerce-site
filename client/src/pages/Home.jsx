import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import banner1 from "/images/kidsbanner.png";
import banner2 from "/images/menbanner.png";
import banner3 from "/images/toysbanner.png";
import banner4 from "/images/womenbanner.png";
import banner5 from "/images/travelbanner.png";
import ExploreProducts from "../components/ExploreProducts";

function Home() {
  const banners = [banner1, banner2, banner3, banner4, banner5];

  // FIX: data initialized to null for safe object checking
  const [data, setData] = useState(null);
  const [products, setProduct] = useState([]);
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get("/data.json");
        setData(res.data);

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/time`,
        );
        setProduct(response.data);

        const responses = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`,
        );
        const shuffle = [...responses.data]
          .sort(() => 0.5 - Math.random())
          .slice(0, 10);
        setArrivals(shuffle);
      } catch (err) {
        console.error("Error fetching homepage data:", err);
      }
    };
    fetchdata();
  }, []);

  // FIX: Displays spinner while products array waits to be loaded from the API
  if (products.length === 0) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const categories = [
    { key: "men", label: "Mens" },
    { key: "kids", label: "Kids" },
    { key: "women", label: "Womens" },
    { key: "travel", label: "Travel" },
    { key: "toys", label: "Toys" },
  ];

  return (
    <div id="home" className="w-100 overflow-hidden">
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
                style={{ height: 200 }}
                alt="Banner Image"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          aria-label="Previous"
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
          aria-label="Next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Quick Links Categories */}
      <div className="container mt-3">
        <div className="row row-cols-5 g-2 justify-content-center">
          {categories.map((cat) => (
            <div className="col text-center" key={cat.key}>
              <img
                src={data ? data[cat.key] : ""}
                className="rounded-circle object-fit-cover img-fluid"
                style={{ width: 100, height: 100 }}
                alt={cat.label}
              />
              <h6 className="text-dark mt-2 small text-truncate">
                {cat.label}
              </h6>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals Header */}
      <div className="mt-2 p-3">
        <h3 className="text-dark text-center" style={{ fontFamily: "georgia" }}>
          New Arrivals
        </h3>
      </div>

      {/* New Arrivals Grid */}
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 d-flex justify-content-center g-3">
          {/* FIX: renamed variable 'items' to singular 'item' */}
          {products.slice(0, 4).map((item) => (
            <ExploreProducts
              id={item._id}
              images={item.image?.url}
              name={item.name}
              price={item.price}
              key={item._id}
            />
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="container trust mt-5">
        <div className="row g-3">
          {[
            { icon: "fa-truck", text: "Free Delivery" },
            { icon: "fa-credit-card-alt", text: "100% Secure Payments" },
            { icon: "fa-paper-plane", text: "Easy Returns" },
            { icon: "fa-hourglass", text: "24/7 Support" },
          ].map((item, index) => (
            <div className="col-6 col-lg-3" key={index}>
              <div className="border-0 text-center p-3 h-100">
                <i className={`fa ${item.icon} fs-2 mb-2`}></i>
                <h6 className="mb-0">{item.text}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* You May Also Like Header */}
      <div className="container mt-5">
        <div className="p-3 d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <h3
            className="text-dark mb-2 mb-sm-0"
            style={{ fontFamily: "georgia" }}
          >
            You May Also Like
          </h3>
          <Link
            to="/category"
            className="btn text-dark"
            style={{ backgroundColor: "#ece9ff" }}
          >
            <b>
              View More{" "}
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </b>
          </Link>
        </div>

        {/* You May Also Like Grid */}
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 d-flex justify-content-center g-3 mb-5">
          {arrivals.map((item) => (
            <ExploreProducts
              id={item._id}
              images={item.image?.url}
              name={item.name}
              price={item.price}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
