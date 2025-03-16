import React from "react";
import { useLocation } from "react-router-dom";
import "./LabelPage.css"; // Import the CSS file

const LabelPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get parameters from the URL
  const categoryName = queryParams.get("categoryName") || "Unknown Category";
  const productName = queryParams.get("productName") || "Unknown Product";
  const quantity = queryParams.get("quantity") || "Unknown Quantity";

  // Convert all text to uppercase
  const uppercaseCategoryName = categoryName.toUpperCase();
  const uppercaseProductName = productName.toUpperCase();
  const uppercaseQuantity = quantity.toUpperCase();

  // Map category names to background colors
  const getCategoryBackgroundColor = (category) => {
    switch (category.toUpperCase()) {
      case "PHOTO FRAME":
        return "#4682B4"; // Steel Blue
      case "TOYS":
        return "#FF4500"; // Orange Red
      case "STONE":
        return "#8B4513"; // Brown
      case "REDIUM":
        return "#FFD700"; // Gold
      case "SIMPLE":
        return "#32CD32"; // Lime Green
      default:
        return "#f0f0f0"; // Default light gray
    }
  };

  const handlePrint = () => {
    setTimeout(() => {
      window.print();
    }, 500); // Increased delay to ensure styles update
  };

  return (
    <div className="label-main-container">
      <div className="printbutton">
        <button onClick={handlePrint}>Print Page</button>
      </div>
      <div className="labelPage__container" id="printThis">
        {/* Top Row */}
        <div className="label-row">
          <div className="label-content">
            <div
              className="category-name"
              style={{
                backgroundColor: getCategoryBackgroundColor(categoryName),
              }}
            >
              {uppercaseCategoryName}
            </div>
            <div className="product-name-container">{uppercaseProductName}</div>
            <div className="quantity-box-container">
              {uppercaseQuantity}-PCS
            </div>
            <div className="bottom-tag-container">
              <div className="first-tag-container">
                <div className="tag-image">
                  <img
                    className="tag-image-image"
                    src="../src/assets/hwc.png"
                  />
                  <div className="tag-image-text"> HANDLE WITH CARE</div>
                </div>
              </div>
              <div className="second-tag-container">
                <div className="tag-image">
                  <img
                    className="tag-image-image"
                    src="../src/assets/fragile.png"
                  />
                  <div className="tag-image-text"> FRAGILE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="label-content">
            <div
              className="category-name"
              style={{
                backgroundColor: getCategoryBackgroundColor(categoryName),
              }}
            >
              {uppercaseCategoryName}
            </div>
            <div className="product-name-container">{uppercaseProductName}</div>
            <div className="quantity-box-container">
              {uppercaseQuantity}-PCS
            </div>
            <div className="bottom-tag-container">
              <div className="first-tag-container">
                <div className="tag-image">
                  <img
                    className="tag-image-image"
                    src="../src/assets/hwc.png"
                  />
                  <div className="tag-image-text"> HANDLE WITH CARE</div>
                </div>
              </div>
              <div className="second-tag-container">
                <div className="tag-image">
                  <img
                    className="tag-image-image"
                    src="../src/assets/fragile.png"
                  />
                  <div className="tag-image-text"> FRAGILE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="label-row">
          <div className="label-content">
            <div
              className="category-name"
              style={{
                backgroundColor: getCategoryBackgroundColor(categoryName),
              }}
            >
              {uppercaseCategoryName}
            </div>
            <div className="product-name-container">{uppercaseProductName}</div>
            <div className="quantity-box-container">
              {uppercaseQuantity}-PCS
            </div>
            <div className="bottom-tag-container">
              <div className="first-tag-container">
                <div className="tag-image">
                  <img
                    className="tag-image-image"
                    src="../src/assets/hwc.png"
                  />
                  <div className="tag-image-text"> HANDLE WITH CARE</div>
                </div>
              </div>
              <div className="second-tag-container">
                <div className="tag-image">
                  <img
                    className="tag-image-image"
                    src="../src/assets/fragile.png"
                  />
                  <div className="tag-image-text"> FRAGILE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="label-content">
            <div
              className="category-name"
              style={{
                backgroundColor: getCategoryBackgroundColor(categoryName),
              }}
            >
              {uppercaseCategoryName}
            </div>
            <div className="product-name-container">{uppercaseProductName}</div>
            <div className="quantity-box-container">
              {uppercaseQuantity}-PCS
            </div>
            <div className="bottom-tag-container">
              <div className="first-tag-container">
                <div className="tag-image">
                  <img
                    className="tag-image-image"
                    src="../src/assets/hwc.png"
                  />
                  <div className="tag-image-text"> HANDLE WITH CARE</div>
                </div>
              </div>
              <div className="second-tag-container">
                <div className="tag-image">
                  <img
                    className="tag-image-image"
                    src="../src/assets/fragile.png"
                  />
                  <div className="tag-image-text"> FRAGILE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelPage;
