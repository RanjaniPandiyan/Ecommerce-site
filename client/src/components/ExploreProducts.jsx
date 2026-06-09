import { Link } from "react-router-dom";

function ExploreProducts({ id, images, name, price, liked, toggleLike }) {
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

          <Link to="/" className="btn btn-primary w-100">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
