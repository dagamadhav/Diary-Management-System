import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from 'sweetalert2'

const Cards = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  // console.log(item)
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { user } = useContext(AuthContext);
  // console.log(user)

  const navigate = useNavigate();
  const location = useLocation();

  // add to cart btn
  const handleAddtoCart = (item) => {
    // console.log("btn is clicked", item)
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      // console.log(cartItem)
      fetch("http://localhost:5001/carts", {
        method: "POST",
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if(data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Added to cart",
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    } else{
      Swal.fire({
        title: "Please Login!",
        text: "Without an account, you can't add products.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Signup Now!"
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/signup', {state:{from: location}})
        }
      });
    }
  };

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <div className="card w-81 shadow-xl mr-5 md:my-5 relative ">
      <div
        className={`rating gap-2 relative right-2 top-2 p-4 heartStar bg-green ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt=""
            className="hover:scale-105 relative transition-all duration-200 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title text-black">{item.name}</h2>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center">
          <h5 className="font-semibold">
            <span className="text-sm text-red">Rs. </span> {item.price}
          </h5>
          <button
            className="btn bg-green hover:bg-gray-400 text-white hover:text-black"
            onClick={() => handleAddtoCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
