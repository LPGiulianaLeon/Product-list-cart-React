export default function Cart({ cart, removeFromCart, onConfirm }) {
  const cartTotal = () =>
    cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="right-container">
      <div className="cart">
        <div className="cart-container">
          <h2 className="cart-title">Your Cart ({cart.length})</h2>
          {cart.length === 0 ? (
            <div className="cart-content">
              <img
                src="/img/illustration-empty-cart.svg"
                className="img-cart-empty"
                alt="Empty cart illustration"
              />
              <p className="text-cart-empty">Your added items will appear here</p>
            </div>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((dessert) => (
                  <li className="cart-item" key={dessert.id}>
                    <div className="cart-item-details">
                      <span className="cart-item-name">{dessert.name}</span>
                      <div className="cart-item-info">
                        <span className="cart-quantity">{dessert.quantity}x</span>
                        <span className="cart-price">@ ${dessert.price.toFixed(2)}</span>
                        <span className="cart-total-item">${(dessert.quantity * dessert.price).toFixed(2)} </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(dessert.id)}
                    >
                      <img
                        src="/img/icon-remove-item.svg"
                        alt="Remove item"
                        className="remove-icon"
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <h4 className="cart-total">Order Total: ${cartTotal()}</h4>
              <p className="cart-delivery">This is a carbon-neutral delivery</p>
              <button className="btn cart-btn" onClick={onConfirm}>
                Confirm Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
