import React from "react";
import "./LabelPage.css"; // Import the CSS file

const LabelPage = () => {
  const handlePrint = () => {
    // Force a reflow to ensure styles are applied

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
        <div className="label-row">
          <div className="label-content">
            <div className="category-name">PHOTO FRAME</div>
            <div className="product-name-container">MEDIUM TOWEL BABY</div>
            <div className="quantity-box-container">24-PCS</div>
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
            <div className="category-name">PHOTO FRAME</div>
            <div className="product-name-container">MEDIUM TOWEL BABY</div>
            <div className="quantity-box-container">24-PCS</div>
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
        <div className="label-row">
          <div className="label-content">
            <div className="category-name">PHOTO FRAME</div>
            <div className="product-name-container">MEDIUM TOWEL BABY</div>
            <div className="quantity-box-container">24-PCS</div>
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
            <div className="category-name">PHOTO FRAME</div>
            <div className="product-name-container">MEDIUM TOWEL BABY</div>
            <div className="quantity-box-container">24-PCS</div>
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
