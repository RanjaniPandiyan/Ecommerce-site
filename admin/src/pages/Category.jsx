import { useState, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
function Category() {
  const [categories, setCategories] = useState([]);
  const [inputs, setInputs] = useState({ category: "" });
  const toastRef = useRef(null);
  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }
  const isDuplicate = categories.some(
    (item) =>
      item.category.toLowerCase().trim() ===
      inputs.category.toLowerCase().trim(),
  );

  const handleClick = async (e) => {
    //handles backend flow
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/category",
        inputs,
      );
      const toast = new window.bootstrap.Toast(toastRef.current);
      setCategories((prev) => [...prev, res.data]);
      toast.show();
    } catch (err) {
      console.error(err);
    }
    setInputs({ category: "" }); // for input clear after submission
  };
  useEffect(() => {
    async function getdata() {
      try {
        const res = await axios.get("http://localhost:5000/api/category");
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getdata();
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title mb-4">Category</h1>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleClick}>
                <div className="row d-flex jusitify-content-between">
                  <div className="col-md-6">
                    <div className="mb-3">
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
                        value={inputs.category}
                        onChange={handlechange}
                        placeholder="Enter Category"
                        required
                      />
                    </div>
                    {isDuplicate && (
                      <span className="text-danger">
                        Category already exists
                      </span>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isDuplicate}
                  >
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
            <div className="toast-body">Category Added Successfully</div>
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

export default Category;
