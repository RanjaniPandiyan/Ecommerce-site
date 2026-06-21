import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";
import { removeWishlist } from "../redux/wishlistSlice";
function ExploreProducts({ id, images, name, price }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart.items);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isInCart = cartItem.some((item) => item.id === id);
  const likedItems = useSelector((state) => state.wishlist.items);
  const isLiked = likedItems.some((item) => item.id === id);
  const product = {
    id,
    images,
    name,
    price,
  };
  return (
    <div className="col">
      <div
        className="card hover-shadow h-100"
        onClick={() => navigate(`/products/${id}`)}
        data-aos="fade-up"
      >
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
              if (!isLiked) {
                if (isAuth) {
                  dispatch(addToWishlist(product));
                } else {
                  navigate("/login");
                }
              } else {
                dispatch(removeWishlist(id));
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <i
              className={isLiked ? "fa fa-heart text-danger" : "fa fa-heart-o"}
            ></i>
          </div>
        </div>

        <div className="card-body">
          <div className="text-dark" style={{ textDecoration: "none" }}>
            <h6 className="card-title ">
              <strong>{name}</strong>
            </h6>
            <p className="card-text">₹{price}</p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!isInCart) {
              if (isAuth) {
                dispatch(addToCart(product));
              } else {
                navigate("/login");
              }
            } else {
              dispatch(removeCart(id));
            }
          }}
          className={
            !isInCart
              ? "btn btn-primary w-70 m-3 rounded-pill"
              : "btn btn-success w-70 m-3 rounded-pill"
          }
        >
          <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>
          {""}
          {!isInCart ? "Add" : "Added"}
        </button>
      </div>
    </div>
  );
}

export default ExploreProducts;
