import { Link } from "react-router-dom";

function ExploreProducts({ images, name, price }) {
  return (
    <div className="col">
      <div className="card hover-shadow h-100">
        <img
          src={images}
          className="card-img-top p-3 w-100"
          alt={name}
          style={{
            height: "250px",
            objectFit: "contain",
          }}
        />

        <div className="card-body">
          <h6 className="card-title">{name}</h6>

          <p className="card-text text-center">₹{price}</p>

          <Link to="/" className="btn btn-primary w-100">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
