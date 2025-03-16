// // import React, { useState, useEffect } from "react";

// // const Manage = () => {
// //   const [products, setProducts] = useState([]);
// //   const [categories, setCategories] = useState([]); // State to store categories
// //   const [newProductName, setNewProductName] = useState("");
// //   const [newProductCategoryId, setNewProductCategoryId] = useState(""); // State for selected category ID
// //   const [newProductQuantity, setNewProductQuantity] = useState(""); // State for quantity
// //   const [editProductId, setEditProductId] = useState(null);
// //   const [editProductName, setEditProductName] = useState("");
// //   const [editProductCategoryId, setEditProductCategoryId] = useState(""); // State for editing category ID
// //   const [editProductQuantity, setEditProductQuantity] = useState(""); // State for editing quantity
// //   const [successMessage, setSuccessMessage] = useState(""); // State for success message
// //   const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

// //   // Fetch all products and categories on component mount
// //   useEffect(() => {
// //     fetchProducts();
// //     fetchCategories();
// //   }, []);

// //   // Fetch products from the backend
// //   const fetchProducts = async () => {
// //     try {
// //       const response = await fetch(
// //         "https://productdiplay.onrender.com/api/products/name"
// //       );
// //       if (!response.ok) throw new Error("Failed to fetch products");
// //       const data = await response.json();
// //       setProducts(data);
// //     } catch (error) {
// //       console.error("Error fetching products:", error);
// //     }
// //   };

// //   // Fetch categories from the backend
// //   const fetchCategories = async () => {
// //     try {
// //       const response = await fetch(
// //         "https://productdiplay.onrender.com/api/categories"
// //       );
// //       if (!response.ok) throw new Error("Failed to fetch categories");
// //       const data = await response.json();
// //       setCategories(data);
// //     } catch (error) {
// //       console.error("Error fetching categories:", error);
// //     }
// //   };

// //   // Add a new product
// //   const handleAddProduct = async () => {
// //     if (!newProductName || !newProductCategoryId || !newProductQuantity) return;

// //     try {
// //       const response = await fetch(
// //         "http://localhost:3001/api/products/sticker",
// //         {
// //           method: "POST",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({
// //             name: newProductName,
// //             category_id: newProductCategoryId,
// //             quantity: newProductQuantity,
// //           }),
// //         }
// //       );
// //       if (!response.ok) throw new Error("Failed to add product");
// //       const newProduct = await response.json();
// //       setProducts([...products, newProduct]);
// //       setNewProductName("");
// //       setNewProductCategoryId("");
// //       setNewProductQuantity(""); // Reset quantity

// //       // Show success message
// //       setSuccessMessage("Product added successfully!");
// //       setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
// //     } catch (error) {
// //       console.error("Error adding product:", error);
// //     }
// //   };

// //   // Update an existing product
// //   const handleUpdateProduct = async () => {
// //     if (
// //       !editProductName ||
// //       !editProductId ||
// //       !editProductCategoryId ||
// //       !editProductQuantity
// //     )
// //       return;

// //     try {
// //       const response = await fetch(
// //         `http://localhost:3001/api/products/sticker/${editProductId}`,
// //         {
// //           method: "PUT",
// //           headers: { "Content-Type": "application/json" },
// //           body: JSON.stringify({
// //             name: editProductName,
// //             category_id: editProductCategoryId,
// //             quantity: editProductQuantity,
// //           }),
// //         }
// //       );
// //       if (!response.ok) throw new Error("Failed to update product");
// //       const updatedProducts = products.map((product) =>
// //         product.id === editProductId
// //           ? {
// //               ...product,
// //               name: editProductName,
// //               category_id: editProductCategoryId,
// //               quantity: editProductQuantity,
// //             }
// //           : product
// //       );
// //       setProducts(updatedProducts);
// //       setEditProductId(null);
// //       setEditProductName("");
// //       setEditProductCategoryId("");
// //       setEditProductQuantity(""); // Reset quantity
// //       setIsModalOpen(false); // Close the modal

// //       // Show success message
// //       setSuccessMessage("Product updated successfully!");
// //       setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
// //     } catch (error) {
// //       console.error("Error updating product:", error);
// //     }
// //   };

// //   // Delete a product
// //   const handleDeleteProduct = async (id) => {
// //     try {
// //       const response = await fetch(
// //         `http://localhost:3001/api/products/sticker/${id}`,
// //         {
// //           method: "DELETE",
// //         }
// //       );
// //       if (!response.ok) throw new Error("Failed to delete product");
// //       const filteredProducts = products.filter((product) => product.id !== id);
// //       setProducts(filteredProducts);

// //       // Show success message
// //       setSuccessMessage("Product deleted successfully!");
// //       setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
// //     } catch (error) {
// //       console.error("Error deleting product:", error);
// //     }
// //   };

// //   // Start editing a product
// //   const startEdit = (product) => {
// //     setEditProductId(product.id);
// //     setEditProductName(product.name);
// //     setEditProductCategoryId(product.category_id);
// //     setEditProductQuantity(product.quantity); // Set quantity for editing
// //     setIsModalOpen(true); // Open the modal
// //   };

// //   // Get category name by category ID
// //   const getCategoryName = (categoryId) => {
// //     const category = categories.find((cat) => cat.id === categoryId);
// //     return category ? category.name : "Unknown Category";
// //   };

// //   // Sort products by category ID
// //   const sortedProducts = [...products].sort(
// //     (a, b) => a.category_id - b.category_id
// //   );

// //   return (
// //     <div>
// //       <h1>Manage Products</h1>

// //       {/* Success Message */}
// //       {successMessage && (
// //         <div style={{ color: "green", marginBottom: "10px" }}>
// //           {successMessage}
// //         </div>
// //       )}

// //       {/* Add Product Section */}
// //       <div>
// //         <h2>Add Product</h2>
// //         <input
// //           type="text"
// //           value={newProductName}
// //           onChange={(e) => setNewProductName(e.target.value)}
// //           placeholder="Enter product name"
// //         />
// //         <input
// //           type="number"
// //           value={newProductQuantity}
// //           onChange={(e) => setNewProductQuantity(e.target.value)}
// //           placeholder="Enter quantity"
// //         />
// //         <select
// //           value={newProductCategoryId}
// //           onChange={(e) => setNewProductCategoryId(e.target.value)}
// //         >
// //           <option value="">Select a category</option>
// //           {categories.map((category) => (
// //             <option key={category.id} value={category.id}>
// //               {category.name}
// //             </option>
// //           ))}
// //         </select>
// //         <button onClick={handleAddProduct}>Add Product</button>
// //       </div>

// //       {/* Edit Product Modal */}
// //       {isModalOpen && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             width: "100%",
// //             height: "100%",
// //             backgroundColor: "rgba(0, 0, 0, 0.5)",
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //           }}
// //         >
// //           <div
// //             style={{
// //               backgroundColor: "white",
// //               padding: "20px",
// //               borderRadius: "8px",
// //               width: "300px",
// //             }}
// //           >
// //             <h2>Edit Product</h2>
// //             <input
// //               type="text"
// //               value={editProductName}
// //               onChange={(e) => setEditProductName(e.target.value)}
// //               placeholder="Edit product name"
// //               style={{ width: "100%", marginBottom: "10px" }}
// //             />
// //             <input
// //               type="number"
// //               value={editProductQuantity}
// //               onChange={(e) => setEditProductQuantity(e.target.value)}
// //               placeholder="Edit quantity"
// //               style={{ width: "100%", marginBottom: "10px" }}
// //             />
// //             <select
// //               value={editProductCategoryId}
// //               onChange={(e) => setEditProductCategoryId(e.target.value)}
// //               style={{ width: "100%", marginBottom: "10px" }}
// //             >
// //               <option value="">Select a category</option>
// //               {categories.map((category) => (
// //                 <option key={category.id} value={category.id}>
// //                   {category.name}
// //                 </option>
// //               ))}
// //             </select>
// //             <button
// //               onClick={handleUpdateProduct}
// //               style={{ marginRight: "10px" }}
// //             >
// //               Update Product
// //             </button>
// //             <button onClick={() => setIsModalOpen(false)}>Cancel</button>
// //           </div>
// //         </div>
// //       )}

// //       {/* Product List Section */}
// //       <div>
// //         <h2>Product List</h2>
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Product Name</th>
// //               <th>Category</th>
// //               <th>Quantity</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {sortedProducts.map((product) => (
// //               <tr key={product.id}>
// //                 <td>{product.name}</td>
// //                 <td>{getCategoryName(product.category_id)}</td>
// //                 <td>{product.quantity}</td>
// //                 <td>
// //                   <button onClick={() => startEdit(product)}>Edit</button>
// //                   <button onClick={() => handleDeleteProduct(product.id)}>
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Manage;

// import React, { useState, useEffect } from "react";

// const Manage = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [newProductName, setNewProductName] = useState("");
//   const [newProductCategoryId, setNewProductCategoryId] = useState("");
//   const [newProductQuantity, setNewProductQuantity] = useState("");
//   const [editProductId, setEditProductId] = useState(null);
//   const [editProductName, setEditProductName] = useState("");
//   const [editProductCategoryId, setEditProductCategoryId] = useState("");
//   const [editProductQuantity, setEditProductQuantity] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch all products and categories on component mount
//   useEffect(() => {
//     fetchProducts();
//     fetchCategories();
//   }, []);

//   // Fetch products from the backend
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(
//         "https://productdiplay.onrender.com/api/products/name"
//       );
//       if (!response.ok) throw new Error("Failed to fetch products");
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Fetch categories from the backend
//   const fetchCategories = async () => {
//     try {
//       const response = await fetch(
//         "https://productdiplay.onrender.com/api/categories"
//       );
//       if (!response.ok) throw new Error("Failed to fetch categories");
//       const data = await response.json();
//       setCategories(data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   // Add a new product
//   const handleAddProduct = async () => {
//     if (!newProductName || !newProductCategoryId || !newProductQuantity) return;

//     try {
//       const response = await fetch(
//         "http://localhost:3001/api/products/sticker",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: newProductName,
//             category_id: newProductCategoryId,
//             quantity: newProductQuantity,
//           }),
//         }
//       );
//       if (!response.ok) throw new Error("Failed to add product");
//       const newProduct = await response.json();
//       setProducts([...products, newProduct]);
//       setNewProductName("");
//       setNewProductCategoryId("");
//       setNewProductQuantity("");

//       // Show success message
//       setSuccessMessage("Product added successfully!");
//       setTimeout(() => setSuccessMessage(""), 3000);
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   // Update an existing product
//   const handleUpdateProduct = async () => {
//     if (
//       !editProductName ||
//       !editProductId ||
//       !editProductCategoryId ||
//       !editProductQuantity
//     )
//       return;

//     try {
//       const response = await fetch(
//         `http://localhost:3001/api/products/sticker/${editProductId}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: editProductName,
//             category_id: editProductCategoryId,
//             quantity: editProductQuantity,
//           }),
//         }
//       );
//       if (!response.ok) throw new Error("Failed to update product");
//       const updatedProducts = products.map((product) =>
//         product.id === editProductId
//           ? {
//               ...product,
//               name: editProductName,
//               category_id: editProductCategoryId,
//               quantity: editProductQuantity,
//             }
//           : product
//       );
//       setProducts(updatedProducts);
//       setEditProductId(null);
//       setEditProductName("");
//       setEditProductCategoryId("");
//       setEditProductQuantity("");
//       setIsModalOpen(false);

//       // Show success message
//       setSuccessMessage("Product updated successfully!");
//       setTimeout(() => setSuccessMessage(""), 3000);
//     } catch (error) {
//       console.error("Error updating product:", error);
//     }
//   };

//   // Delete a product
//   const handleDeleteProduct = async (id) => {
//     try {
//       const response = await fetch(
//         `http://localhost:3001/api/products/sticker/${id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       if (!response.ok) throw new Error("Failed to delete product");
//       const filteredProducts = products.filter((product) => product.id !== id);
//       setProducts(filteredProducts);

//       // Show success message
//       setSuccessMessage("Product deleted successfully!");
//       setTimeout(() => setSuccessMessage(""), 3000);
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   // Start editing a product
//   const startEdit = (product) => {
//     setEditProductId(product.id);
//     setEditProductName(product.name);
//     setEditProductCategoryId(product.category_id);
//     setEditProductQuantity(product.quantity);
//     setIsModalOpen(true);
//   };

//   // Get category name by category ID
//   const getCategoryName = (categoryId) => {
//     const category = categories.find((cat) => cat.id === categoryId);
//     return category ? category.name : "Unknown Category";
//   };

//   // Sort products by category ID
//   const sortedProducts = [...products].sort(
//     (a, b) => a.category_id - b.category_id
//   );

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Manage Products</h1>

//       {/* Success Message */}
//       {successMessage && (
//         <div style={styles.successMessage}>{successMessage}</div>
//       )}

//       {/* Add Product Section */}
//       <div style={styles.addProductSection}>
//         <h2 style={styles.sectionTitle}>Add Product</h2>
//         <input
//           type="text"
//           value={newProductName}
//           onChange={(e) => setNewProductName(e.target.value)}
//           placeholder="Enter product name"
//           style={styles.input}
//         />
//         <input
//           type="number"
//           value={newProductQuantity}
//           onChange={(e) => setNewProductQuantity(e.target.value)}
//           placeholder="Enter quantity"
//           style={styles.input}
//         />
//         <select
//           value={newProductCategoryId}
//           onChange={(e) => setNewProductCategoryId(e.target.value)}
//           style={styles.select}
//         >
//           <option value="">Select a category</option>
//           {categories.map((category) => (
//             <option key={category.id} value={category.id}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//         <button onClick={handleAddProduct} style={styles.button}>
//           Add Product
//         </button>
//       </div>

//       {/* Edit Product Modal */}
//       {isModalOpen && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalContent}>
//             <h2 style={styles.sectionTitle}>Edit Product</h2>
//             <input
//               type="text"
//               value={editProductName}
//               onChange={(e) => setEditProductName(e.target.value)}
//               placeholder="Edit product name"
//               style={styles.input}
//             />
//             <input
//               type="number"
//               value={editProductQuantity}
//               onChange={(e) => setEditProductQuantity(e.target.value)}
//               placeholder="Edit quantity"
//               style={styles.input}
//             />
//             <select
//               value={editProductCategoryId}
//               onChange={(e) => setEditProductCategoryId(e.target.value)}
//               style={styles.select}
//             >
//               <option value="">Select a category</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.name}
//                 </option>
//               ))}
//             </select>
//             <button onClick={handleUpdateProduct} style={styles.button}>
//               Update Product
//             </button>
//             <button
//               onClick={() => setIsModalOpen(false)}
//               style={{ ...styles.button, backgroundColor: "#ff4444" }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Product List Section */}
//       <div style={styles.productListSection}>
//         <h2 style={styles.sectionTitle}>Product List</h2>
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.tableHeader}>Product Name</th>
//               <th style={styles.tableHeader}>Category</th>
//               <th style={styles.tableHeader}>Quantity</th>
//               <th style={styles.tableHeader}>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedProducts.map((product) => (
//               <tr key={product.id} style={styles.tableRow}>
//                 <td style={styles.tableCell}>{product.name}</td>
//                 <td style={styles.tableCell}>
//                   {getCategoryName(product.category_id)}
//                 </td>
//                 <td style={styles.tableCell}>{product.quantity}</td>
//                 <td style={styles.tableCell}>
//                   <button
//                     onClick={() => startEdit(product)}
//                     style={styles.actionButton}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteProduct(product.id)}
//                     style={{
//                       ...styles.actionButton,
//                       backgroundColor: "#ff4444",
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Manage;

// // Styles
// const styles = {
//   container: {
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//   },
//   header: {
//     textAlign: "center",
//     color: "#333",
//     marginBottom: "20px",
//   },
//   successMessage: {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     padding: "10px",
//     borderRadius: "5px",
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   addProductSection: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     marginBottom: "20px",
//   },
//   sectionTitle: {
//     color: "#333",
//     marginBottom: "15px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   select: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   modalOverlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     width: "300px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   },
//   productListSection: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "collapse",
//   },
//   tableHeader: {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     padding: "10px",
//     textAlign: "left",
//   },
//   tableRow: {
//     borderBottom: "1px solid #ddd",
//   },
//   tableCell: {
//     padding: "10px",
//   },
//   actionButton: {
//     padding: "5px 10px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     marginRight: "5px",
//   },
// };

import React, { useState, useEffect } from "react";
import "./Manage.css"; // Import the external CSS file

const Manage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [newProductCategoryId, setNewProductCategoryId] = useState("");
  const [newProductQuantity, setNewProductQuantity] = useState("");
  const [editProductId, setEditProductId] = useState(null);
  const [editProductName, setEditProductName] = useState("");
  const [editProductCategoryId, setEditProductCategoryId] = useState("");
  const [editProductQuantity, setEditProductQuantity] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all products and categories on component mount
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://productdiplay.onrender.com/api/sticker"
      );
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch categories from the backend
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://productdiplay.onrender.com/api/categories"
      );
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Add a new product
  const handleAddProduct = async () => {
    if (!newProductName || !newProductCategoryId || !newProductQuantity) return;

    try {
      const response = await fetch(
        "https://productdiplay.onrender.com/api/sticker/sticker",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: newProductName,
            category_id: newProductCategoryId,
            quantity: newProductQuantity,
          }),
        }
      );
      if (!response.ok) throw new Error("Failed to add product");
      const newProduct = await response.json();
      setProducts([...products, newProduct]);
      setNewProductName("");
      setNewProductCategoryId("");
      setNewProductQuantity("");

      // Show success message
      setSuccessMessage("Product added successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Update an existing product
  const handleUpdateProduct = async () => {
    if (
      !editProductName ||
      !editProductId ||
      !editProductCategoryId ||
      !editProductQuantity
    )
      return;

    try {
      const response = await fetch(
        `https://productdiplay.onrender.com/api/sticker/sticker/${editProductId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: editProductName,
            category_id: editProductCategoryId,
            quantity: editProductQuantity,
          }),
        }
      );
      if (!response.ok) throw new Error("Failed to update product");
      const updatedProducts = products.map((product) =>
        product.id === editProductId
          ? {
              ...product,
              name: editProductName,
              category_id: editProductCategoryId,
              quantity: editProductQuantity,
            }
          : product
      );
      setProducts(updatedProducts);
      setEditProductId(null);
      setEditProductName("");
      setEditProductCategoryId("");
      setEditProductQuantity("");
      setIsModalOpen(false);

      // Show success message
      setSuccessMessage("Product updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Delete a product
  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(
        `https://productdiplay.onrender.com/api/sticker/sticker/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete product");
      const filteredProducts = products.filter((product) => product.id !== id);
      setProducts(filteredProducts);

      // Show success message
      setSuccessMessage("Product deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Start editing a product
  const startEdit = (product) => {
    setEditProductId(product.id);
    setEditProductName(product.name);
    setEditProductCategoryId(product.category_id);
    setEditProductQuantity(product.quantity);
    setIsModalOpen(true);
  };

  // Get category name by category ID
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  // Sort products by category ID
  const sortedProducts = [...products].sort(
    (a, b) => a.category_id - b.category_id
  );

  return (
    <div className="container">
      <h1 className="header">Manage Products</h1>

      {/* Success Message */}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      {/* Add Product Section */}
      <div className="add-product-section">
        <h2 className="section-title">Add Product</h2>
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
          placeholder="Enter product name"
          className="input"
        />
        <input
          type="number"
          value={newProductQuantity}
          onChange={(e) => setNewProductQuantity(e.target.value)}
          placeholder="Enter quantity"
          className="input"
        />
        <select
          value={newProductCategoryId}
          onChange={(e) => setNewProductCategoryId(e.target.value)}
          className="select"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddProduct} className="button">
          Add Product
        </button>
      </div>

      {/* Edit Product Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="section-title">Edit Product</h2>
            <input
              type="text"
              value={editProductName}
              onChange={(e) => setEditProductName(e.target.value)}
              placeholder="Edit product name"
              className="input"
            />
            <input
              type="number"
              value={editProductQuantity}
              onChange={(e) => setEditProductQuantity(e.target.value)}
              placeholder="Edit quantity"
              className="input"
            />
            <select
              value={editProductCategoryId}
              onChange={(e) => setEditProductCategoryId(e.target.value)}
              className="select"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button onClick={handleUpdateProduct} className="button">
              Update Product
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="button cancel-button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Product List Section */}
      <div className="product-list-section">
        <h2 className="section-title">Product List</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">Product Name</th>
              <th className="table-header">Category</th>
              <th className="table-header">Quantity</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product) => (
              <tr key={product.id} className="table-row">
                <td className="table-cell">{product.name}</td>
                <td className="table-cell">
                  {getCategoryName(product.category_id)}
                </td>
                <td className="table-cell">{product.quantity}</td>
                <td className="table-cell">
                  <button
                    onClick={() => startEdit(product)}
                    className="action-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="action-button delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
