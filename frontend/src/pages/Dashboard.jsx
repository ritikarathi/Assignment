import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // redirect if not logged in
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // GET products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/products",
        authHeader
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ADD product (ADMIN only)
  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/products",
        {
          name,
          description,
          price,
          quantity,
        },
        authHeader
      );

      setName("");
      setDescription("");
      setPrice("");
      setQuantity("");

      fetchProducts();
    } catch (err) {
      alert("Add failed (Admin only)");
    }
  };

  // DELETE product (ADMIN only)
  const deleteProduct = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/products/${id}`,
        authHeader
      );

      fetchProducts();
    } catch (err) {
      alert("Delete failed (Admin only)");
    }
  };

  // logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="navbar">
        <h2>Inventory System</h2>

        <div>
          <span style={{ marginRight: "10px" }}>{role}</span>
          <button onClick={logout}>Logout</button>
        </div>
      </div>

      {/* ADD PRODUCT (ONLY ADMIN) */}
      {role === "ROLE_ADMIN" && (
        <form className="product-form" onSubmit={addProduct}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button type="submit">Add Product</button>
        </form>
      )}

      {/* PRODUCT LIST */}
      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">

            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>₹ {p.price}</p>
            <p>Qty: {p.quantity}</p>

            {/* DELETE ONLY ADMIN */}
            {role === "ROLE_ADMIN" && (
              <button onClick={() => deleteProduct(p.id)}>
                Delete
              </button>
            )}

          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;