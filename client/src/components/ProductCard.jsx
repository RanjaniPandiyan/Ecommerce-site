import { Link } from "react-router-dom";

function ProductCard({ ids, images, name, price, desc, liked, toggleLike }) {
  return (
    <>
      <div className="card mb-3 overflow-hidden">
        <div className="row g-0 h-100">
          <div className="col-md-5">
            <div
              className="img-wrapper"
              style={{ position: "relative", height: "500px" }}
            >
              <img
                src={images}
                className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                alt={name}
                style={{ display: "block" }}
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
                  className={
                    liked ? "fa fa-heart text-danger" : "fa fa-heart-o"
                  }
                ></i>
              </div>
            </div>
          </div>
          <div className="col-md-7 ">
            <div className="card-body">
              <h4 className="card-title fs-3">
                {name ? name.toUpperCase() : ""}
              </h4>
              <h5 className="card-text  my-3">₹{price}</h5>
              <p className="card-text ">{desc}</p>

              <div className="row d-flex justify-content-around">
                <div className="col">
                  <Link to={ids} className="btn btn-primary w-100 py-2">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                    Add to Cart
                  </Link>
                </div>

                <div className="col">
                  <Link to={ids} className="btn btn-warning w-100 py-2">
                    <i class="fa fa-shopping-basket" aria-hidden="true"></i> Buy
                    Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
