import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [category, setCategory] = useState(0);
  const [product, setProduct] = useState(0);
  useEffect(() => {
    const getproduct = async () => {
      const res = await axios.get("http://localhost:5000/api/products/count");
      setProduct(res.data);
    };
    const getCategory = async () => {
      const res = await axios.get("http://localhost:5000/api/category/count");
      setCategory(res.data);
    };
    getproduct();
    getCategory();
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row row-cols-sm-6 row-cols-lg-4">
            <div className="col">
              <div className="card" style={{ backgroundColor: "#EABBFC" }}>
                <div className="card-body pt-3 p-3">
                  <h5 className="fw-semibold">No.Of.Categories</h5>
                  <div className="d-flex align-items-center justify-content-center pt-3">
                    <h4 className="fw-semibold mb-0">{category}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card overflow-hidden"
                style={{ backgroundColor: "#BBFCDD" }}
              >
                <div className="card-body pt-3 p-3">
                  <h5 className="fw-semibold">No.Of.Products</h5>
                  <div className="d-flex align-items-center justify-content-center pt-3">
                    <h4 className="fw-semibold mb-0">{product}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
