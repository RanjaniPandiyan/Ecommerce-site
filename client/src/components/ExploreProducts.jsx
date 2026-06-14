import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";
import { removeWishlist } from "../redux/wishlistSlice";
function ExploreProducts({ id, images, name, price, liked, toggleLike }) {
  const dispatch = useDispatch();
  const product = {
    id,
    images,
    name,
    price,
  };
  return (
    <div className="col">
      <div className="card hover-shadow h-100" data-aos="fade-up">
        <div className="img-wrapper" style={{ position: "relative" }}>
          <img
            src={images}
            className="card-img-top p-2 w-100"
            alt={name}
            style={{
              height: "250px",
              objectFit: "cover",
            }}
          />
          <div
            className="icon-img"
            onClick={(e) => {
              e.stopPropagation();
              if (!liked) {
                dispatch(addToWishlist(product));
              } else {
                dispatch(removeWishlist(id));
              }
              toggleLike();
            }}
            style={{ cursor: "pointer" }}
          >
            <i
              className={liked ? "fa fa-heart text-danger" : "fa fa-heart-o"}
            ></i>
          </div>
        </div>

        <div className="card-body">
          <Link
            to={`/products/${id}`}
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <h6 className="card-title">{name}</h6>
            <p className="card-text">₹{price}</p>
          </Link>
        </div>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="btn btn-primary w-70 m-3 rounded-pill"
        >
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
        </button>
      </div>
    </div>
  );
}

export default ExploreProducts;
