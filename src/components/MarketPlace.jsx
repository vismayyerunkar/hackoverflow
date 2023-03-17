import React,{useEffect,useState} from "react";
import "../styles/marketplace.css";
import { Link } from "react-router-dom";
import CropCard from "./CropCard";
import Navbar from "./Navbar";
import axios from "axios";


function MarketPlace() {

  const [cards,setCards] = useState([]);

  const cropList = [
    {
      name: "rice",
      price: 30,
      imgUrl:
        "https://chheda.store/wp-content/uploads/2021/06/KOLAM-A-AND-AAA.jpg",
      quantity: 100,
      description: "Best quality kolam rice",
      contact : 773864952
    },
    {
      name: "rice",
      price: 60,
      imgUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/3/LJ/ZL/GQ/49710505/soft-basmati-rice-1000x1000.png",
      quantity: 500,
      description: "Best quality Basmati rice",
      contact : 773864952
    },
    {
      name: "wheat",
      price: 25,
      imgUrl:
        "https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop-500x500.jpg",
      quantity: 800,
      description: "Best quality wheat",
      contact : 773864952
    },
  ];


  useEffect(() => {
    axios.get('http://172.17.29.30:5000/api/v1/product/get',{headers: {
      token: localStorage.getItem('token')
  }}).then((res)=>{
      setCards(res.data);
      console.log(res.data);
    });
  }, []);


  return (
    <>
    <Navbar/>
    <div className="marketplace-main">
      <div className="marketplace-upper">
        <h2>Market Place</h2>

        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search crops here"
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        <a href="/croprequest" className="Add-More-btn">
          Create <i class="fa-solid fa-circle-plus"></i>
        </a>
      </div>
      <div className="marketplace-lower">
        {cropList.map((item) => {
          return (
            <>
              <CropCard
                name={item.name}
                price={item.price}
                imgUrl={item.imgUrl}
                quantity={item.quantity}
                description={item.description}
                contact = {item.contact}
              />
            </>
          );
        })}
      </div>
    </div>
    </>
  );
}

export default MarketPlace;
