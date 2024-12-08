export default function Cart({ cart, removeFromCart, onConfirm }) {
    const cartTotal = () =>
      cart.reduce((total, item) => total + item.quantity * item.price, 0);
  
    return (
      <div className="right-container">
        <div className="cart">
          <div className="cart-container">
            <h2 className="cart-title">Your Cart ({cart.length})</h2>
            {cart.length === 0 ? (
              <>
                <img src="/img/illustration-empty-cart.svg" />
                <p>Your added items will appear here</p>
              </>
            ) : (
              <>
                {cart.map((dessert) => (
                  <ul className="cart-list" key={dessert.id}>
                    <li className="cart-item">
                      <span>{dessert.name}</span>
                      <span>{dessert.quantity}x</span>
                      <span>{dessert.price.toFixed(2)}</span>
                      <button type="button" onClick={() => removeFromCart(dessert.id)}>
                        ⦻
                      </button>
                    </li>
                  </ul>
                ))}
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
  