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
        <p className="modal-order-total">
          <span className="label-order-total">Order Total:</span>
          <span className="price-oreder-total">${total.toFixed(2)}</span>
        </p>
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
  width: 450px;
  
  
  

  ul {
    display: flex;
    flex-direction: column;
    align-items: left;
    list-style: none;
    padding: 0;
    margin: 20px 0;
    background-color: #f9f4f4;
    border-radius: 10px;
  }

  .modal-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 0.5px solid #ebe6e6;
    padding: 10px 20px;
    
  }
  
  .item-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    width: 100%;
  }

  .item-title {
    font-weight: bold;
    margin: 0;
    width: 100%;
   
  }

  .item-quantity {
    color: #d44f2a; 
    font-weight: bold;
  }

  .item-total {
    font-weight: bold;
    text-align: right;
    width: auto;
    margin-left: 10px;
  }

  .modal-order-total{
    display: flex;
    justify-content: space-between;
  }

  .label-order-total {
    margin-left: 25px;
  }

  .price-oreder-total {
    font-weight: bold;
    font-size: 25px;
    margin-right: 10px;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .btn {
    background-color: #d44f2a;
    color: #fff;
    padding: 15px 20px;
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