import { Link } from "react-router-dom";
import axios from "axios";
function ProductList({ category, name, image, id, setProduct }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setProduct((Prev) => Prev.filter((items) => items.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img src={image} className="rounded-2" width="42" height="42" />
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center gap-2">
            <p className="mb-0 fw-normal">{category}</p>
          </div>
        </td>
        <td>
          <p className="mb-0 fw-normal">{name}</p>
        </td>
        <td>
          <div className="dropdown dropstart">
            <Link
              to="#"
              className="text-muted"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti ti-dots fs-5"></i>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link
                  className="dropdown-item d-flex align-items-center gap-3"
                  to={`/eproduct/${id}`}
                >
                  <i className="fs-4 ti ti-edit"></i>Edit
                </Link>
              </li>
              <li>
                <button
                  className="dropdown-item d-flex align-items-center gap-3"
                  onClick={handleDelete}
                >
                  <i className="fs-4 ti ti-trash"></i>Delete
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </>
  );
}

export default ProductList;
