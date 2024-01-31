// src/components/Checkout.js
import React, { useState } from "react";

const Checkout = () => {
  const [isCheckingOut, setCheckingOut] = useState(false);

  const simulateCheckout = () => {
    // Simulate the checkout process (in a real-world scenario, integrate with a payment gateway)
    setCheckingOut(true);

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      alert("Checkout successful!");
      // Reset the cart and end the checkout process
      setCheckingOut(false);
    }, 2000);
  };

  const handleCheckout = () => {
    if (!isCheckingOut) {
      simulateCheckout();
    }
  };

  const buttonLabel = isCheckingOut ? "Checking out..." : "Checkout";

  return (
    <div className="mt-4">
      <button
        onClick={handleCheckout}
        className={`bg-blue-500 text-base text-white px-4 py-2 rounded ${
          isCheckingOut ? "opacity-50" : ""
        }`}
        disabled={isCheckingOut}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Checkout;
