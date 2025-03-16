import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Page.css";

const Page = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const text = queryParams.get("text") || "Default Text";
  const categoryId = queryParams.get("category_id"); // Get category_id from URL

  const [numRows, setNumRows] = useState(0);
  const pageRef = useRef(null);
  const rowRef = useRef(null);

  // Map category_id to the corresponding style
  const categoryIdToStyleMap = {
    1: { bg: "#8B4513", text: "white" }, // Stone
    2: { bg: "#FF4500", text: "white" }, // Toys
    3: { bg: "#FFD700", text: "black" }, // Redium
    4: { bg: "#4682B4", text: "white" }, // PhotoFrame
    5: { bg: "#32CD32", text: "white" }, // Simple
  };

  // Get the style based on the category_id
  const selectedStyle = categoryIdToStyleMap[categoryId] || {
    bg: "#8B4513",
    text: "white",
  }; // Default to Stone if category_id is invalid

  useEffect(() => {
    const calculateRows = () => {
      if (pageRef.current && rowRef.current) {
        const pageHeight = pageRef.current.clientHeight;
        const rowHeight = rowRef.current.clientHeight + 0.5;

        if (rowHeight > 0) {
          const rowsFit = Math.floor(pageHeight / rowHeight);
          setNumRows(rowsFit);
        }
      }
    };

    calculateRows();
    window.addEventListener("resize", calculateRows);
    return () => window.removeEventListener("resize", calculateRows);
  }, []);

  const handlePrint = () => {
    // Force a reflow to ensure styles are applied
    pageRef.current.offsetHeight;

    setTimeout(() => {
      window.print();
    }, 500); // Increased delay to ensure styles update
  };

  return (
    <div className="main-container">
      <div className="printbutton">
        <button onClick={handlePrint} style={{ marginBottom: "20px" }}>
          Print Page
        </button>
      </div>

      <div
        className="page"
        id="printThis"
        ref={pageRef}
        style={{ backgroundColor: selectedStyle.bg }}
      >
        {/* Hidden row to measure height */}
        <div
          className="row"
          ref={rowRef}
          style={{ visibility: "hidden", position: "absolute" }}
        >
          {Array.from({ length: 7 }).map((_, cellIndex) => (
            <div className="cell" key={cellIndex}>
              <div className="text">{text}</div>
            </div>
          ))}
        </div>

        {/* Render the required number of rows */}
        {Array.from({ length: numRows }).map((_, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Array.from({ length: 7 }).map((_, cellIndex) => (
              <div
                className="cell"
                key={cellIndex}
                style={{
                  color: selectedStyle.text,
                }}
              >
                <div className="text">{text}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
