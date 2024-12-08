import React from 'react';
import styled from 'styled-components';

export default function Modal({ isOpen, onClose, cart, total, resetCart }) {
  if (!isOpen) return null;

  const handleNewOrder = () => {
    resetCart(); 
    onClose(); 
  };

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <img src="/img/icon-order-confirmed.svg"/>
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food!</p>
        </Header>

        <ul>
          {cart.map((item) => (
            <li key={item.id} className="modal-item">
              <img src={item.image.desktop} alt={item.name} />
              <div className="item-details">
                <p className="item-title">{item.name}</p>
                <p>
                  <span className="item-quantity">{item.quantity} x</span> @${item.price.toFixed(2)}
                </p>
              </div>
              <p className="item-total">${(item.quantity * item.price).toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <h3>Order Total: ${total.toFixed(2)}</h3>
        <button onClick={handleNewOrder} className="btn">
          Start New Order
        </button>
      </ModalContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }

  .modal-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: #fbf1ee;
    padding: 10px 20px;
  }
  
  .item-details {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 10px;
  }

  .item-title {
    font-weight: bold;
    margin: 0;
   
  }

  .item-quantity {
    color: red; 
    font-weight: bold;
  }

  .item-total {
    font-weight: bold;
    text-align: right;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .btn {
    background-color: #d44f2a;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 100%;
  }
  

`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start; 
  margin-bottom: 20px;

  img {
    width: 40px; 
    height: 40px;
    margin-right: 10px; 
  }

  div {
    text-align: left; 
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    color: #333;
  }

  p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #666;
  }
`;