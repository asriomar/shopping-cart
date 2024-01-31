// src/App.js
import React, { useState } from "react";
import Checkout from "./components/Checkout";

const products = [
  {
    id: 1,
    name: "Deep Work",
    price: 30,
    img: "https://bci.kinokuniya.com/jsp/images/book-img/97803/97803494/9780349411903.JPG",
    description:
      "One of the most valuable skills in our economy is becoming increasingly rare...",
  },
  {
    id: 2,
    name: "Bouncing Back",
    price: 50,
    img: "https://bci.kinokuniya.com/jsp/images/book-img/97806/97806458/9780645846256.JPG",
    description: "Description for Bouncing Back goes here...",
  },
  {
    id: 3,
    name: "Psychology of Money",
    price: 50,
    img: "https://bci.kinokuniya.com/jsp/images/book-img/97808/97808571/9780857197689.JPG",
    description: "Description for Psychology of Money goes here...",
  },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto font-sans">
      <h1 className="flex justify-center items-center text-3xl font-bold mx-auto mt-8 ">
        <hr />
        Shopping Cart
      </h1>
      <div className=" ">
        {/* Product Catalog */}
        <div className="p-3 my-5">
          <h2 className="text-2xl font-semibold text-center text-indigo-500 mb-8 bg-gray-200 p-3 shadow-lg">
            Self Help
          </h2>
          <div className="">
            <ul>
              {products.map((product) => (
                <li
                  key={product.id}
                  className="grid md:grid-cols-3 gap-2 my-4 border border-1 p-4 shadow-lg"
                >
                  <div className="justify-self-center">
                    <p className="text-xl font-semibold text-blue-500 text-center m-2">
                      {product.name}
                    </p>
                    <img
                      className="w-48"
                      src={product.img}
                      alt={product.name}
                    />
                    <p className="text-center text-semibold mt-2">
                      RM{product.price}
                    </p>
                  </div>

                  <p className="p-4 mx-5 font-sans justify-self-center">
                    {product.description}
                  </p>
                  <div className="grid">
                    <button
                      className="bg-blue-500 text-white text-base px-3 py-1 rounded place-self-center"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="my-3 p-3 bg-indigo-100 shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>
                  <img className="w-24" src={item.img} alt={item.name} />
                  <p>
                    {item.name} x {item.quantity}
                  </p>
                  RM {item.price * item.quantity}
                </span>
                <div>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2 text-base"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded text-base"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2 my-3 text-base"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Checkout */}
        <div className="bg-green-300 p-3 rounded-lg shadow-lg">
          <p>Total Amount: RM {totalAmount.toFixed(2)}</p>
          {/* Additional checkout details can be added here */}
        </div>
      </div>
      <Checkout />
    </div>
  );
};

export default App;
