// import ComingSoon from '../components/ComingSoon'
import { useEffect, useState } from 'react';
import '../styles/globals.css'
import Layout from '../components/common/Layout'
import { Toaster } from "react-hot-toast";
// import { Provider } from 'react-redux'
// import { store } from '../redux/store'


export default function App({ Component, pageProps }) {
  const [ cart, setCart ] = useState({});
  const [ subTotal, setSubTotal] = useState(0);

  useEffect(()=>{
    console.log("I'm from _app.js");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    };
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    console.log(keys);
    for(let i=0; i<keys.length; i++){
      subt += myCart[keys[i]]["price"] * myCart[keys[i]]["qty"];
    };
    setSubTotal(subt);
  };

  const addToCart = (itemCode, qty, name, price, size, variant) => {
    // console.log(cart);
    let newCart = cart;
    // console.log(itemCode, qty, name, price, size, variant);
    
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = {qty: 1, name, price, size, variant};
    }
    // console.log(newCart);
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty, name, price, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));

    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }

    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }

    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };



  return (
    // <Provider store={store}>
        <Layout
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}
        >
          <Component 
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            subTotal={subTotal}
            {...pageProps} 
          />
          <Toaster />
        </Layout>
        // <ComingSoon />
    // </Provider>
  )
}
