import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
function Products() {
  const [likedItems, setLikedItems] = useState({});
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.products.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase(),
        );
        setProducts(filtered);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [category]);
  return (
    <main>
      <div className="mt-5 mb-5" style={{ fontFamily: "cursive" }}>
        <div className="text-black text-center mb-5">
          <h2>{category} Collection</h2>
        </div>
        <div
          className="container shadow"
          style={{ backgroundColor: "#ccffff", borderRadius: 30 }}
        >
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 p-2 pb-4">
            {products.map((items) => (
              <div className="col mt-3" key={items.id}>
                <ProductCard
                  product={items}
                  liked={likedItems[items.id]}
                  toggleLike={() =>
                    setLikedItems((prev) => ({
                      ...prev,
                      [items.id]: !prev[items.id],
                    }))
                  }
                />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center pb-3 pt-3">
            <p className="text-muted">No More Products Found...</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
