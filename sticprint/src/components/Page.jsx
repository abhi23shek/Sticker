// import React, { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";

// import "./Page.css";

// const Page = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const text = queryParams.get("text") || "Default Text";
//   const [numRows, setNumRows] = useState(0);
//   const pageRef = useRef(null);
//   const rowRef = useRef(null);

//   useEffect(() => {
//     const calculateRows = () => {
//       if (pageRef.current && rowRef.current) {
//         const pageHeight = pageRef.current.clientHeight;
//         const rowHeight = rowRef.current.clientHeight; // Dynamically get row height

//         if (rowHeight > 0) {
//           const rowsFit = Math.floor(pageHeight / rowHeight);
//           setNumRows(rowsFit);
//         }
//       }
//     };

//     calculateRows(); // Initial calculation

//     window.addEventListener("resize", calculateRows); // Recalculate on resize
//     return () => window.removeEventListener("resize", calculateRows);
//   }, []);

//   return (
//     <div className="page" ref={pageRef}>
//       {/* Render one row initially to measure its height */}
//       <div
//         className="row"
//         ref={rowRef}
//         style={{ visibility: "hidden", position: "absolute" }}
//       >
//         {Array.from({ length: 7 }).map((_, cellIndex) => (
//           <div className="cell" key={cellIndex}>
//             <div className="text">{text}</div>
//           </div>
//         ))}
//       </div>

//       {/* Render the required number of rows */}
//       {Array.from({ length: numRows }).map((_, rowIndex) => (
//         <div className="row" key={rowIndex}>
//           {Array.from({ length: 7 }).map((_, cellIndex) => (
//             <div className="cell" key={cellIndex}>
//               <div className="text">{text}</div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Page;

import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import "./Page.css";

const Page = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const text = queryParams.get("text") || "Default Text";
  const [numRows, setNumRows] = useState(0);
  const pageRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    const calculateRows = () => {
      if (pageRef.current && rowRef.current) {
        const pageHeight = pageRef.current.clientHeight;
        const rowHeight = rowRef.current.clientHeight; // Dynamically get row height

        if (rowHeight > 0) {
          const rowsFit = Math.floor(pageHeight / rowHeight);
          setNumRows(rowsFit);
        }
      }
    };

    calculateRows(); // Initial calculation

    window.addEventListener("resize", calculateRows); // Recalculate on resize
    return () => window.removeEventListener("resize", calculateRows);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="print-button">
        <button onClick={handlePrint} style={{ marginBottom: "20px" }}>
          Print Page
        </button>
      </div>

      <div className="page" id="printThis" ref={pageRef}>
        {/* Render one row initially to measure its height */}
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
              <div className="cell" key={cellIndex}>
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
