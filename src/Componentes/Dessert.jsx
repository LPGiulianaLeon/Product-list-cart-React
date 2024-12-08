
import React, { useState } from 'react';

export default function Dessert({ dessert, addToCart, updateCartQuantity }) {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      addToCart(dessert); 
      updateCartQuantity(dessert.id, newQuantity);
    };
  
    const handleDecrement = () => {
      if (quantity > 0) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        updateCartQuantity(dessert.id, newQuantity);
      }
    };

    return (
        <div className="card">
            <div className="card-image-container">
                <img 
                    src={dessert.image.desktop} 
                    alt={dessert.name} 
                    className="card-img" 
                />
                {quantity === 0 ? (
                    <button 
                        type="button" 
                        className="add-to-cart-btn"
                        onClick={handleIncrement} 
                    > 
                        <img 
                            src="/img/icon-add-to-cart.svg"
                            alt="cart icon"
                            className="icon-cart-img" 
                        />
                        Add to Cart
                    </button>
                ) : (
                    <div className="quantity-control">
                        <button 
                            type="button" 
                            className="decrement-btn"
                            onClick={handleDecrement}
                        >
                            −
                        </button>
                        <span className="quantity-display">{quantity}</span>
                        <button 
                            type="button" 
                            className="increment-btn"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
            <div className="card-body">
                <p className="card-category">{dessert.category}</p>
                <h5 className="card-title">{dessert.name}</h5>
                <p className="card-price">${dessert.price.toFixed(2)}</p>
            </div>
        </div>
    );
}