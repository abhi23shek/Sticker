import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file

function Home() {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const navigate = useNavigate();

  // Fetch categories and store in session storage
  useEffect(() => {
    const fetchCategories = async () => {
      const storedCategories = sessionStorage.getItem("categories");
      if (storedCategories) {
        setCategories(JSON.parse(storedCategories));
      } else {
        try {
          const response = await fetch(
            "https://productdiplay.onrender.com/api/categories"
          );
          const data = await response.json();
          setCategories(data);
          sessionStorage.setItem("categories", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      }
    };
    fetchCategories();
  }, []);

  // Fetch products and store in session storage
  useEffect(() => {
    const fetchProducts = async () => {
      const storedProducts = sessionStorage.getItem("products");
      if (storedProducts) {
        const parsedProducts = JSON.parse(storedProducts);
        setProducts(parsedProducts);
        setFilteredProducts(parsedProducts);
      } else {
        try {
          const response = await fetch(
            "https://productdiplay.onrender.com/api/sticker"
          );
          const data = await response.json();
          setProducts(data);
          setFilteredProducts(data);
          sessionStorage.setItem("products", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };
    fetchProducts();
  }, []);

  // Filter products when category or search query changes
  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => String(product.category_id) === String(selectedCategory)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products]);

  // Get category name by category ID
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  // Handle product selection
  const handleProductSelect = (product) => {
    setInputText(product.name);
    setSelectedProduct(product); // Store the selected product
    setSearchQuery("");
    setIsEditing(false); // Disable editing when a new product is selected
  };

  // Handle print sticker button click
  const handlePrintSticker = () => {
    if (!selectedProduct) {
      alert("Please select a product first.");
      return;
    }

    const trimmedText = inputText.replace(/\s*-\s*/g, "-");
    const formattedText = trimmedText.replace(/-/g, "\u2011");

    // Pass both the text and category_id to the /page route
    navigate(
      `/page?text=${encodeURIComponent(formattedText)}&category_id=${
        selectedProduct.category_id
      }`
    );
  };

  // Handle print label button click
  const handlePrintLabel = () => {
    if (!selectedProduct) {
      alert("Please select a product first.");
      return;
    }

    // Pass category name, product name, and quantity to the /label route
    navigate(
      `/label?categoryName=${encodeURIComponent(
        getCategoryName(selectedProduct.category_id)
      )}&productName=${encodeURIComponent(
        selectedProduct.name
      )}&quantity=${encodeURIComponent(selectedProduct.quantity)}`
    );
  };

  const handleAdminClick = () => {
    navigate("/manage");
  };

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(true); // Enable editing
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-right">
          <button className="admin-button" onClick={handleAdminClick}>
            Admin
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        {/* Search and Input Section */}
        <div className="search-section">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="search-bar"
          />
          <div className="input-container">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter product name"
              className="input-box"
              disabled={!isEditing} // Disable input by default
            />
            <button onClick={handleEditClick} className="edit-button">
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* Category Selector */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-selector"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Product List */}
        <div className="product-list-container">
          <h3>Products List</h3>
          <ul className="product-list">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className="product-item"
                >
                  <div className="product-name">{product.name}</div>
                  <div className="product-details">
                    <span>
                      Category: {getCategoryName(product.category_id)}
                    </span>
                    <span>Quantity: {product.quantity}</span>
                  </div>
                </li>
              ))
            ) : (
              <p>No products found</p>
            )}
          </ul>
        </div>

        {/* Print Buttons */}
        <div className="print-buttons">
          <button onClick={handlePrintSticker} className="print-button">
            Print Sticker
          </button>
          <button onClick={handlePrintLabel} className="print-button">
            Print Label
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
