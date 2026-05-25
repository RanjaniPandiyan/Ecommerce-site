import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

function ViewProduct() {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoad(true);
        const res = await axios.get("http://localhost:5000/api/products");
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false);
      }
    };
    FetchData();
  }, []);
  if (!load) {
    return (
      <div>
        <img src="./images/backgrounds/loader.gif" />
      </div>
    );
  }
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title mb-4">View Products</h1>
          <div className="card">
            <div className="card-body">
              <table className="table text-nowrap mb-0 align-middle">
                <thead className="text-dark fs-4">
                  <tr>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Product</h6>
                    </th>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Category</h6>
                    </th>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Product Name</h6>
                    </th>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Action</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(product) &&
                    product.map((items) => (
                      <ProductList
                        key={items._id}
                        id={items._id}
                        image={items.image?.url}
                        category={items.category}
                        name={items.name}
                        setProduct={setProduct}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
