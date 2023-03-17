import React, { useState } from "react";
import "../styles/cropcard.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  p: 4,
};


function CropCard({ name, price, imgUrl, quantity, description, contact }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [customerName , setcustomerName] = useState("");
  const [custcontact , setcustcontact] = useState(0)
  const [address , setAddress] = useState("");
  const [orderquant , setorderquant] = useState(0);

  const handleConfirm = () => {
    alert('order Placed')
  }

  return (
    <>
      <div className="cropcard-main">
        <div className="cropcard-left">
          <img className="crop-section-img" src={imgUrl} alt="" width="100px" />
        </div>
        <div className="cropcard-right">
          <div className="right-div1">
            <div className="right-div1-left">
              <p className="crop-name">{name}</p>
              <p className="instock">In Stock</p>
              {/* <p className="quantity">Quantity : {quantity} Kg</p> */}
              <p className="desc"> Detail : {description}</p>
            </div>

            <div className="right-div1-right">
              <p className="crop-price">₹{price} / Kg</p>
            </div>
          </div>
          <div className="right-div2">
            <button className="cropcard-btn" onClick={handleOpen}>
              Buy Now
            </button>
            <a className="cropcard-btn call-btn" href={`tel:+${contact}`}>
              {" "}
              <i className="fa-solid fa-phone"></i>{" "}
            </a>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-main">
            <p className="modal-title">Delivery Details</p>
            <div style={{width:'100%'}}>
              <input 
              className="modal-input" 
              type="text" 
              placeholder="Name " 
              name = "name"
              onChange={(e) => setcustomerName(e.target.value)}
              />
              <input
                className="modal-input"
                name = "Address"
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="address "
              />
              <input
                className="modal-input"
                name = "contact"
                onChange={(e) => setcustcontact(e.target.value)}
                type="number"
                placeholder="contact no."
              />
              <input
                className="modal-input"
                type="number"
                name = "quantity"
                onChange={(e) => setorderquant(e.target.value)}
                placeholder="quantity "
              />

              <button onClick={handleConfirm} className="confirm-btn">Place Order</button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default CropCard;
