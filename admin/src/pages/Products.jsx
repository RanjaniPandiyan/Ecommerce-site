import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function Products() {
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const fileInputRef = useRef(null);
  const [input, setInput] = useState({
    category: "",
    name: "",
    price: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    setInput((values) => ({ ...values, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    async function getdata() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/category`,
        );
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getdata();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      Object.keys(input).forEach((key) => {
        formData.append(key, input[key]);
      });

      formData.append("image", image);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/products`,
        formData,
      );

      const toast = new window.bootstrap.Toast(toastRef.current);
      toast.show();
      setTimeout(navigate("/"), 1000);
      setInput({
        category: "",
        name: "",
        price: "",
        description: "",
      });

      setImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title mb-4">Add Products</h1>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row d-flex jusitify-content-between">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label
                        htmlFor="category"
                        className="form-label text-dark"
                      >
                        Category
                      </label>
                      <select
                        className="form-select"
                        id="category"
                        name="category"
                        onChange={handleChange}
                      >
                        <option value="">Categories</option>
                        {categories.map((items) => (
                          <option value={items.category} key={items._id}>
                            {items.category}
                          </option>
                        ))}
                      </select>
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
                        value={input.name}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
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
                        value={input.price}
                        onChange={handleChange}
                        placeholder="Enter Price"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <label htmlFor="image" className="form-label text-dark">
                        Upload Product Image
                      </label>
                      <input
                        type="file"
                        name="image"
                        ref={fileInputRef}
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
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
                        value={input.description}
                        onChange={handleChange}
                        placeholder="Enter Sub Category"
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
            <div className="toast-body">Product Added Successfully</div>
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

export default Products;
