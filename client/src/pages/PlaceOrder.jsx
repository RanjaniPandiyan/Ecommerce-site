function PlaceOrder() {
  return (
    <>
      <div className="container">
        <div className="row p-3">
          <div className="col-lg-8">
            <div className="card rounded mb-3 p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-0">
                  <p>Shipping Address:</p>
                </div>
                <div className="mb-0">
                  <button className="btn btn-outline-primary">Change</button>
                </div>
              </div>
              <p>Address Details</p>
            </div>

            <div className="card rounded p-4">Product Details</div>
          </div>

          <div className="col-lg-4">
            <div className="card rounded p-4">Order Total</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
