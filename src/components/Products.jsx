import React, { useState, useEffect } from "react";

const Products = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((getData) => {
        setData(getData);
      });
    });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "40px 0px" }}>
        All Products List
      </h1>

      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "90%",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((e,i) => {
          return (
            <div key={i}
              style={{
                width: "22%",
                margin: "10px 0px",
                height: "500px",
                padding: "10px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "10px",
              }}
            >
              <img src={e.image} style={{ width: "100%", height: "60%" }} />
              <p
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontWeight: "bold",
                  height: "17%",
                }}
              >
                {e.title}
              </p>
              <p
                style={{
                  textAlign: "center",
                  margin: "12px 0px",
                  fontWeight: "bold",
                }}
              >
                {e.price} $
              </p>
              <button
                style={{
                  margin: "auto",
                  display: "block",
                  padding: "8px 15px",
                  color: "white",
                  backgroundColor: "blue",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
