import React from 'react';
import styled from 'styled-components';

export default function Modal({ isOpen, onClose, cart, total }) {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="modal-item">
              <img src={item.image.desktop} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <p>${(item.quantity * item.price).toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <h3>Order Total: ${total.toFixed(2)}</h3>
        <button onClick={onClose} className="btn">
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
  padding: 20px;
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
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .btn {
    background-color: #ff6600;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
