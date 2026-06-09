import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Products() {
  const [product, setProduct] = useState(null);
  const [likedItems, setLikedItems] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        );
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product details:", err);
      }
    };
    if (id) getProduct();
  }, [id]);

  // Handle loading state gracefully while API resolves
  if (!product) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="row ">
        <div className="col-12 col-md-10 col-lg-12">
          <ProductCard
            id={product._id}
            images={product.image?.url}
            name={product.name}
            price={product.price}
            key={product._id}
            desc={product.description}
            liked={!!likedItems[product._id]}
            toggleLike={() =>
              setLikedItems((prev) => ({
                ...prev,
                [product._id]: !prev[product._id],
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
