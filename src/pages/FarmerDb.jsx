import React, { useState, } from "react";

export default function FarmerDb({ user }) {
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({ name: "", price: "", quantity: "" });

  const addProduct = () => {
    if (!productForm.name || !productForm.price || !productForm.quantity || !productForm.file) return;
    setProducts([...products, { ...productForm, id: Date.now().toString() }]);
    setProductForm({ name: "", price: "", quantity: "", file: ""});
  };

  return (
    <>
    <style>
      {`
      .form {
        text-align: center;
        
        
      }
      .form input {
        padding: 7px;
        width: 30%;
        border-radius: 7px;
        
      }
      `}
    </style>
   
    <div>
      <h2 style={{textAlign:"center",fontSize:"32px",fontFamily:"sans-serif",fontWeight:"bold",textShadow:"3px 3px 10px black"}}>Farmer Dashboard</h2>
      <div style={{display: "flex",justifyContent: "space-around",fontSize:"27px"}}>
      <p style={{color:"green"}}>Welcome: {user.name} </p>
      <p style={{color:"green"}}>Location: {user.location} </p>
      <p style={{color:"green"}}>Phone: {user.phone}</p>
      </div>
        <div style={{border:"5px solid green",margin:"50px 300px",backgroundColor:"lightgreen",borderRadius:"30px"}}>
             <h3 style={{textAlign:"center"}}>Add Product</h3>
      <div className="form">
      <input
        placeholder="Product Name"
        value={productForm.name}
        onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
      />
      <br /> <br />
      <input
        type="number"
        placeholder="Price"
        value={productForm.price}
        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
      />
       <br /> <br />
      <input
        type="number"
        placeholder="Quantity"
        value={productForm.quantity}
        onChange={(e) => setProductForm({ ...productForm, quantity: e.target.value })}
      />
       <br /> <br />
       <input
        type="file"
        value={productForm.file}
        onChange={(e) => setProductForm({ ...productForm, file: e.target.value })}
      />
      <br />
      <button onClick={addProduct}>Add Product</button>
      </div>
        </div>
     

      {/* <h3>Your Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price} - {p.quantity} pcs
          </li>
        ))}
      </ul> */}
    </div>
     </>
  );
}
