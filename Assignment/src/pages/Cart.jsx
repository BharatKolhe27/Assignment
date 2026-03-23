import { useSelector, useDispatch } from "react-redux";
import { removeProduct, updateQuantity } from "../redux/cartSlice";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Cart</h2>

            {cart.length === 0 && <p>Your cart is empty</p>}

            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <div>
                        <h4>{item.name}</h4>
                        <p>Qty: {item.quantity}</p>
                    </div>

                    <div className="cart-actions">
                        <button
                            className="remove-btn"
                            onClick={() => dispatch(removeProduct(item.id))}
                        >
                            Remove
                        </button>

                        <button
                            className="qty-btn"
                            onClick={() =>
                                dispatch(updateQuantity({
                                    id: item.id,
                                    quantity: item.quantity + 1,
                                }))
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cart;


