import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../redux/cartSlice";
import { addToWishlist, removeWishlist } from "../redux/wishlistSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import ExploreProducts from "./ExploreProducts";

function ProductCard({ id, images, name, price, desc }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === id);
  const likedItems = useSelector((state) => state.wishlist.items);
  const isLiked = likedItems.some((item) => item.id === id);
  const product = {
    id,
    images,
    name,
    price,
  };
  const [count, setCount] = useState(0);
  const [arrivals, setArrivals] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const responses = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`,
        );
        const shuffle = [...responses.data]
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        setArrivals(shuffle);
      } catch (err) {
        console.error("Error fetching homepage data:", err);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="card mb-3 overflow-hidden">
        <div className="row g-0 h-100">
          <div className="col-md-5">
            <div className="img-wrapper" style={{ position: "relative" }}>
              <img
                src={images}
                className="object-fit-contain border rounded"
                alt={name}
              />

              <div
                className="icon-img"
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isLiked) {
                    dispatch(addToWishlist(product));
                  } else {
                    dispatch(removeWishlist(id));
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={
                    isLiked ? "fa fa-heart text-danger" : "fa fa-heart-o"
                  }
                ></i>
              </div>
            </div>
          </div>
          <div className="col-md-7 ">
            <div className="card-body">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link
                      to="/"
                      className="text-info"
                      style={{ textDecoration: "none" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Product
                  </li>
                </ol>
              </nav>
              <h4 className="card-title fw-bolder">
                {name ? name.toUpperCase() : ""}
              </h4>

              <h5 className="card-text text-warning my-3">
                <b>₹{price}</b>
              </h5>
              <div className="text-dark">
                <h5 className="mt-2 ">Quantity:</h5>
              </div>
              <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 d-flex justify-content-around">
                <div className="col mt-2">
                  <div className=" w-100 py-2 d-flex justify-content-around">
                    <button className="btn" onClick={() => setCount(count + 1)}>
                      <i
                        className="fa fa-plus text-muted"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <span className="text-dark fs-5">{count}</span>
                    <button
                      className="btn"
                      onClick={() =>
                        setCount((prev) => (prev === 0 ? 0 : count - 1))
                      }
                    >
                      <i
                        className="fa fa-minus text-muted"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="col mt-2">
                  <button
                    className={
                      !isInCart
                        ? "btn btn-primary w-100 py-2 rounded-pill"
                        : "btn btn-success w-100 py-2 rounded-pill"
                    }
                    onClick={() => {
                      if (!isInCart) {
                        dispatch(addToCart(product));
                      } else {
                        dispatch(removeCart(id));
                      }
                    }}
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    {!isInCart ? "Add" : "Added"}
                  </button>
                </div>

                <div className="col mt-2">
                  <Link
                    to={`/order/${id}`}
                    className="btn btn-warning w-100 py-2 rounded-pill"
                  >
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>{" "}
                    Buy Now
                  </Link>
                </div>
              </div>
              <div ClassName="text-dark ">
                <h5 className="mt-5">Description:</h5>

                <p
                  className="card-text"
                  style={{ fontFamily: "georgia", lineHeight: 2 }}
                >
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="p-3 d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <h3
            className="text-dark mb-2 mb-sm-0"
            style={{ fontFamily: "georgia" }}
          >
            You May Also Like
          </h3>
          <Link
            to="/"
            className="btn text-dark"
            style={{ backgroundColor: "#ece9ff" }}
          >
            <b>
              View More{" "}
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </b>
          </Link>
        </div>

        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 d-flex justify-content-center g-3 mb-5">
          {arrivals.map((items) => (
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
    </>
  );
}

export default ProductCard;
