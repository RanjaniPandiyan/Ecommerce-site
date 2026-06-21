import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ExploreProducts from "../components/ExploreProducts";
export default function Category() {
  const [categorys, setCategory] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  const [sort, setSort] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const handleClick = (categorys) => {
    setSelectCategory(categorys);
  };
  const filterProducts =
    selectCategory === ""
      ? arrivals
      : arrivals.filter((items) => items.category === selectCategory);
  const handleChange = (e) => {
    setSort(e.target.value);
  };
  let finalProduct = [...filterProducts];
  if (sort === "high") {
    finalProduct.sort((a, b) => b.price - a.price);
  } else if (sort === "low") {
    finalProduct.sort((a, b) => a.price - b.price);
  } else if (sort === "new") {
    finalProduct.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else {
    finalProduct;
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/category`,
        );
        setCategory(response.data);
        const responses = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`,
        );
        const shuffle = [...responses.data].sort(() => 0.5 - Math.random());
        setArrivals(shuffle);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <aside
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column" style={{ fontFamily: "georgia" }}>
              <li className="nav-item ">
                <h5 className="text-muted"> Category</h5>
              </li>
              <li className="nav-item ms-3">
                <div
                  className={`category-link text-dark p-3 fs-6  ${
                    selectCategory === "" ? "active" : ""
                  }`}
                  onClick={() => handleClick("")}
                >
                  All
                </div>
              </li>
              {categorys.map((cat) => (
                <li className="nav-item ms-3" key={cat._id}>
                  <div
                    className={`category-link text-dark p-3 fs-6 ${
                      selectCategory === cat.category ? "active" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectCategory(cat.category);
                      handleClick(cat.category);
                    }}
                  >
                    {cat.category}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link
                    to="/"
                    className="text-warning"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Collections
                </li>
              </ol>
            </nav>
          </div>
          <div className="sort-sticky d-flex justify-content-end">
            <div className="p-2">
              <h6>Sort By </h6>
            </div>
            <div>
              <select className="form-select" onChange={handleChange}>
                <option selected value="">
                  Recommended
                </option>
                <option value="new">What's New</option>
                <option value="low">Price : Low to High</option>
                <option value="high">Price : High to Low</option>
              </select>
            </div>
          </div>

          <div className="row row-cols-2 row-cols-lg-4 row-cols-sm-2 row-cols-md-4      d-flex justify-content-center g-3 mb-4 mt-3">
            {finalProduct.map((item) => (
              <ExploreProducts
                id={item._id}
                images={item.image?.url}
                name={item.name}
                price={item.price}
                key={item._id}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
