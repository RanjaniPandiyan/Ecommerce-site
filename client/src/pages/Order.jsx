import { Link, useParams } from "react-router-dom";

function Order() {
  const { id } = useParams();
  return (
    <>
      {" "}
      <div className="container-fluid m-3 d-flex  justify-content-center ">
        <div
          className="row shadow-lg rounded-4 overflow-hidden bg-white"
          style={{ maxWidth: "1000px", width: "100%" }}
        >
          {/* GIF SIDE */}
          <div className="col-md-4 d-none d-md-flex align-items-center justify-content-center ">
            <img
              src="/images/delivery.gif"
              alt="login gif"
              className="img-fluid p-0"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* LOGIN FORM */}
          <div className="col-12 col-md-8 p-5">
            <h2 className="text-center mb-4 fw-bold">Shipping Address</h2>

            <form>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Enter Your Name</label>
                    <span className="text-danger">*</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Enter Phone Number</label>
                    <span className="text-danger">*</span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="91- 8765443212"
                      name="mobile"
                      required
                      pattern="[0-9]{2}-[0-9]{10}"
                    />
                  </div>
                </div>
                <div className="col col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Enter Shipping Address</label>
                    <span className="text-danger">*</span>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
              <div className=" d-flex justify-content-end">
                {" "}
                <Link to={`/placeorder/${id}`} className="btn btn-warning w-50">
                  Save
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
