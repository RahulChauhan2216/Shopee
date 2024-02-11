import React, { useState } from "react";

const Login = () => {
  let [logState, setlogState] = useState(true);
  return (
    <div>
      {logState ? (
        <div>
          <form
            method="post"
            style={{
              width: "50%",
              margin: "auto",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              backgroundColor: "lightgray",
              marginTop: "50px",
              borderRadius: "5px",
              padding: "20px 50px",
            }}
          >
            <input
              type="email"
              placeholder="Enter email here"
              style={{
                padding: "10px",
                display: "block",
                margin: "10px 0px",
                borderRadius: "5px",
                border: "none",
                width: "100%",
              }}
            />
            <input
              type="password"
              placeholder="Enter passsword here"
              style={{
                padding: "10px",
                display: "block",
                margin: "10px 0px",
                borderRadius: "5px",
                border: "none",
                width: "100%",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "10px 0px",
                fontSize: "15px",
                borderRadius: "5px",
                border: "none",
                marginTop: "15px",
                color: "white",
                backgroundColor: "blue",
                cursor: "pointer",
              }}
            >
              Log in
            </button>
            <p style={{ paddingTop: "15px" }}>
              Do you have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setlogState(!logState)}
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
      ) : (
        <div>
          <form
            method="post"
            style={{
              width: "50%",
              margin: "auto",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              backgroundColor: "lightgray",
              marginTop: "50px",
              borderRadius: "5px",
              padding: "20px 50px",
            }}
          >
            <input
              type="text"
              placeholder="Enter username here"
              style={{
                padding: "10px",
                display: "block",
                margin: "10px 0px",
                borderRadius: "5px",
                border: "none",
                width: "100%",
              }}
            />
            <input
              type="email"
              placeholder="Enter email here"
              style={{
                padding: "10px",
                display: "block",
                margin: "10px 0px",
                borderRadius: "5px",
                border: "none",
                width: "100%",
              }}
            />
            <input
              type="password"
              placeholder="Enter passsword here"
              style={{
                padding: "10px",
                display: "block",
                margin: "10px 0px",
                borderRadius: "5px",
                border: "none",
                width: "100%",
              }}
            />
            <input
              type="password"
              placeholder="Confirm passsword"
              style={{
                padding: "10px",
                display: "block",
                margin: "10px 0px",
                borderRadius: "5px",
                border: "none",
                width: "100%",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "10px 0px",
                fontSize: "15px",
                borderRadius: "5px",
                border: "none",
                marginTop: "15px",
                color: "white",
                backgroundColor: "blue",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
            <p style={{ paddingTop: "15px" }}>
              Already have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setlogState(!logState)}
              >
                Log in
              </span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
