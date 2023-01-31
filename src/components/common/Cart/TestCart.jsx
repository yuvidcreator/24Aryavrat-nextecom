import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/redux/features/uiSlice";
// import { Button } from "./Products";
import { cartTotalPriceSelector, increament, decrement, clear } from "@/redux/features/cartSlice";
// import { primaryColor } from "../App";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  return (
    <>
      <div visible={ui.cartDrawerVisible}>
        {cart.length > 0 ? (
          <div
            onClick={() => {
              dispatch(clear());
            }}
          >
            cart
          </div>
        ) : (
          <div>空空如也</div>
        )}
        {cart.map((cartItem) => (
          <div key={cartItem.id}>
            <img src={cartItem.cover} alt={cartItem.title} />
            <div>
              <h2>{cartItem.title}</h2>
              <div>
                小计： {cartItem.quantity * cartItem.price + cartItem.currency}
              </div>
              <div>
                <span
                  disabled={cartItem.quantity === 1}
                  onClick={() => {
                    dispatch(decrement(cartItem.id));
                  }}
                >
                  -
                </span>
                <span>{cartItem.quantity}</span>
                <button
                  onClick={() => {
                    dispatch(increament(cartItem.id));
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
        {totalPrice > 0 && <div>{totalPrice}CNY</div>}
      </div>
      {ui.cartDrawerVisible && (
        <div
          onClick={() => {
            dispatch(toggle());
          }}
        />
      )}
    </>
  );
};

export default Cart;
