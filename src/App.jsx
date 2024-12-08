import { useState } from 'react';

import Dessert from './Componentes/Dessert';
import Cart from './Componentes/Cart';
import Modal from './Componentes/Modal';
import { db } from './data/db';
import styled from 'styled-components';

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addToCart(item) {
    const itemExists = cart.findIndex((dessert) => dessert.id === item.id);
    if (itemExists >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart((prevCart) => [...prevCart, item]);
    }
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((dessert) => dessert.id !== id));
  }

  function handleConfirmOrder() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setCart([]); 
  }

  const cartTotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <>
      <div className="container">
        <div className="left-container">
          <div className="title-section">
            <h1 className="header-title">Desserts</h1>
          </div>
          <div className="products">
            {data.map((dessert) => (
              <Dessert
                key={dessert.id}
                dessert={dessert}
                setCart={setCart}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
        <Cart cart={cart} removeFromCart={removeFromCart} onConfirm={handleConfirmOrder} />
      </div>

      {/* Modal de confirmación */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cart={cart}
        total={cartTotal}
      />
    </>
  );
}

export default App;
