import { useGlobalContext } from "./context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        <h2 className="body-heading"> Your Bag</h2>
        <h4 className="empty-cart">is currently empty :( </h4>
      </section>
    );
  }

  return (
    <main>
      <h2 className="body-heading">Your Bag</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="total-list">
        <h4> Total </h4>
        <p> ${total}</p>
      </div>

      <div className="bottom-btn">
        <button className="clear-cart-btn" onClick={clearCart}>
          CLEAR CART
        </button>
      </div>
    </main>
  );
};

export default CartContainer;
