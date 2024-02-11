import React from "react";

const Contact = () => {
  return (
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
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <label>Name</label>
        <input
          type="text"
          style={{
            padding: "10px",
            display: "block",
            margin: "10px 0px",
            borderRadius: "5px",
            border: "none",
            width: "100%",
          }}
        />
        <label>Email</label>
        <input
          type="email"
          style={{
            padding: "10px",
            display: "block",
            margin: "10px 0px",
            borderRadius: "5px",
            border: "none",
            width: "100%",
          }}
        />
        <label>Message</label>
        <textarea
          rows={6}
          style={{
            display: "block",
            margin: "10px 0px",
            borderRadius: "5px",
            border: "none",
            width: "100%",
            resize: "none",
            padding: "10px",
          }}
        ></textarea>

        <button style={{width:"100%", padding:"10px 0px", fontSize:"15px", borderRadius:"5px", border:"none", marginTop:"20px", color:"white", backgroundColor:"blue", cursor:"pointer"}}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
