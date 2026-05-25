import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const toastRef = useRef(null);
  const [product, setProduct] = useState({ price: "" });
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`,
      );
      setProduct(res.data);
    };
    fetchdata();
  }, [id]);
  function handleChange(e) {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        product,
      );
      const toast = new window.bootstrap.Toast(toastRef.current);
      toast.show();
      setTimeout(() => {
        navigate("/vproduct");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title mb-4">Update Products</h1>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row d-flex jusitify-content-between">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="image" className="form-label text-dark">
                        Product Image
                      </label>
                      <div>
                        <img
                          src={product.image?.url}
                          style={{ width: 100, height: 100 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label
                        htmlFor="category"
                        className="form-label text-dark"
                      >
                        Category
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        value={product.category || ""}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="Name" className="form-label text-dark">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Name"
                        name="name"
                        value={product.name || ""}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="price" className="form-label text-dark">
                        Price
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        value={product.price || ""}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="form-label text-dark"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={product.description || ""}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div ref={toastRef} className="toast text-bg-success border-0">
          <div className="d-flex">
            <div className="toast-body">Product Updated Successfully</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
