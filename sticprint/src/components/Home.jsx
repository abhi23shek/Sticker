// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css"; // Import the CSS file

// function Home() {
//   const [inputText, setInputText] = useState("");
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productResponse = await fetch(
//           "https://productdiplay.onrender.com/api/products/name"
//         );
//         const productsData = await productResponse.json();
//         setProducts(productsData);
//         setFilteredProducts(productsData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (searchQuery) {
//       const filtered = products.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//     } else {
//       setFilteredProducts(products);
//     }
//   }, [searchQuery, products]);

//   const handleProductSelect = (productName) => {
//     setInputText(productName);
//     setSearchQuery("");
//     setFilteredProducts(products);
//   };

//   const handlePrint = () => {
//     const trimmedText = inputText.replace(/\s*-\s*/g, "-");
//     const formattedText = trimmedText.replace(/-/g, "\u2011");
//     navigate(`/page?text=${encodeURIComponent(formattedText)}`);
//   };

//   return (
//     <div className="container">
//       <div className="input-container">
//         <input
//           type="text"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           placeholder="Enter text"
//           className="input-box"
//         />
//         <button onClick={handlePrint} className="print-button">
//           Print
//         </button>
//       </div>

//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         placeholder="Search products..."
//         className="search-bar"
//       />

//       <ul className="product-list">
//         {filteredProducts.map((product) => (
//           <li
//             key={product.id}
//             onClick={() => handleProductSelect(product.name)}
//             className="product-item"
//           >
//             {product.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file

function Home() {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products on component mount
  useEffect(() => {
    const fetchData = async () => {
      // Check if data exists in session storage
      const storedProducts = sessionStorage.getItem("products");
      if (storedProducts) {
        // If data exists, parse and use it
        console.log("Found");
        const parsedProducts = JSON.parse(storedProducts);
        setProducts(parsedProducts);
        setFilteredProducts(parsedProducts);
      } else {
        // If data does not exist, fetch from the server
        console.log("Not Found");
        try {
          const productResponse = await fetch(
            "https://productdiplay.onrender.com/api/products/name"
          );
          const productsData = await productResponse.json();
          setProducts(productsData);
          setFilteredProducts(productsData);
          // Store the fetched data in session storage
          sessionStorage.setItem("products", JSON.stringify(productsData));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  // Handle product selection
  const handleProductSelect = (productName) => {
    setInputText(productName);
    setSearchQuery("");
    setFilteredProducts(products);
  };

  // Handle print button click
  const handlePrint = () => {
    const trimmedText = inputText.replace(/\s*-\s*/g, "-");
    const formattedText = trimmedText.replace(/-/g, "\u2011");
    navigate(`/page?text=${encodeURIComponent(formattedText)}`);
  };

  return (
    <div className="container111">
      <div className="sticker111">
        <h1>Print Sticker</h1>
        <div className="input-container111">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text"
            className="input-box111"
          />
          <button onClick={handlePrint} className="print-button111">
            Print
          </button>
        </div>
        <div className="">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="search-bar111"
          />
          <h3>Products List</h3>
          <ul className="product-list111">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                onClick={() => handleProductSelect(product.name)}
                className="product-item111"
              >
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="carton111">
        <h1>Print Carton Label</h1>
      </div>
    </div>
  );
}

export default Home;
