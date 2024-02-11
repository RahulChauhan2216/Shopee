import { useState, useEffect, createContext } from "react";

let imgData = [
  "https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej.png",
  "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg",
  "https://www.oxfordstreet.co.uk/wp-content/uploads/fly-images/231680/Shop-on-Oxford-Street-1440x929.jpg",
];

const AddtoCart = createContext();

const Home = () => {
  let [count, setCount] = useState(0);
  let [data, setData] = useState([]);
  let [cartData, setcartData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => {
      res.json().then((data) => {
        setData(data);
      });
    });
  }, []);

  let inc = () => {
    if (count == imgData.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  let dec = () => {
    if (count <= 0) {
      setCount(imgData.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  let addBtn = (item) => {
    const existingItem = cartData.find((d) => d.id === item.id);

    if (existingItem) {
      setcartData(
        cartData.map((product) =>
          product.id === item.id
            ? { ...product, count: product.count + 1 }
            : product
        )
      );
    } else {
      setcartData([...cartData, { ...item, count: 1 }]);
    }
  };

  return (
    <div>
      <AddtoCart.Provider value={cartData}>
        <div className="home-pics">
          <img src={imgData[count]} />
          <div className="home-heading">
            <h1>Shoppe a new world of website ...</h1>
            <p>We are here with revolution shopping experience</p>
          </div>
          <div className="home-btn">
            <button onClick={() => inc()}>+</button>
            <button onClick={() => dec()}>-</button>
          </div>
        </div>

        <div className="tags">
          <div>
            <p>Free Shipping</p>
          </div>
          <div>
            <p>Daily Surprising Offers</p>
          </div>
          <div>
            <p>Support 24*7</p>
          </div>
          <div>
            <p>Secure Payment</p>
          </div>
          <div>
            <p>Affordable Prices</p>
          </div>
        </div>

        <div className="popular-products">
          <h1
            style={{
              margin: "auto",
              width: "fit-content",
              paddingBottom: "20px",
            }}
          >
            Popular Products
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
            {data.map((e, i) => {
              return (
                <div
                  key={i}
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
                    onClick={() => addBtn(e)}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </AddtoCart.Provider>
    </div>
  );
};

export default Home;
export { AddtoCart };
