import { cartTotalPriceSelector, clear, decrement, increament } from "@/redux/features/cartSlice";
import { toggle } from "@/redux/features/uiSlice";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';



const CartComponent = () => {

    const ref = useRef();

    const cart = useSelector((state) => state.cart);
    const ui = useSelector((state) => state.ui);
    const dispatch = useDispatch();
    const totalPrice = useSelector(cartTotalPriceSelector);

    const toggleCart = () => {
        // console.log("Toggled");
        // console.log(dispatch(toggle()));
        // dispatch(toggle());
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else if (ref.current.classList.contains('translate-x-0')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    const clearCartFunc = () => {
        // console.log("Cleared");
        // console.log(dispatch(clear()));
        dispatch(clear());
    }

    const increamentCartItem = () => {
        // console.log("Cleared");
        // console.log(dispatch(increament()));
        dispatch(increament());
    }

    const decreamentCartItem = () => {
        // console.log("Cleared");
        // console.log(dispatch(decrement()));
        dispatch(decrement());
    }


    return (
        <>
            <div className="md:hidden mt-2 mr-4">
                <button className="text-red-500" onClick={toggleCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="absolute top-4 pr-1 pl-1 bg-green-500 rounded-full text-xs" change={change}>
                        {total}
                        {
                            (cart.length === 0) ? (
                                <></>
                            ) : (
                                cart.map((k)=>{
                                    return (
                                        <>
                                            <div key={k} className="p-1  text-white">{cart[k].qty}</div>
                                        </>
                                    )
                                })
                            )
                        }
                    </span>
                </button>
            </div>

            {/* Cart Functionality */}
            <div ref={ref} className="cart-sidebar w-80 md:w-96 absolute top-0 right-0 bg-gray-100 p-10 min-h-screen transform transition-transform translate-x-full">
                <h2 className="flex text-xl font-bold text-center justify-center items-center mt-8">This is my Cart</h2>
                <span onClick={toggleCart} className="absolute top-8 right-5 text-xl cursor-pointer">
                    <AiFillCloseCircle />
                </span>
                <div className="lg:p-2">
                    {/* <div className="flex item my-6 font-semibold">
                        <div className="w-2/3">Items</div>
                        <div className="flex w-1/3 justify-center items-center">
                            Qty
                        </div>
                    </div> */}
                    <ol className="list-decimal">
                        <div className="flex justify-center items-center my-4">No Items in cart</div>
                        <li>
                            <div className="flex item my-4">
                                <div className="w-2/3">Product Name</div>
                                <div className="flex w-1/3 justify-center items-center">
                                    <AiOutlineMinusCircle 
                                        className="mx-2 cursor-pointer" 
                                        onClick={decrement}
                                    /> 
                                        1
                                    <AiOutlinePlusCircle 
                                        className="mx-2 cursor-pointer" 
                                        onClick={increament}
                                    />
                                </div>
                            </div>
                        </li>
                        {/* {
                            (Object.keys(cart).length === 0) ? (
                                <div className="flex justify-center items-center my-4">No Items in cart</div>
                            ) : (
                                <>
                                    {
                                        Object.keys(cart).map((k)=>{
                                            return (
                                                <>
                                                    <li key={k}>
                                                        <div className="flex item my-4">
                                                            <div className="w-2/3">{cart[k].name}</div>
                                                            <div className="flex w-1/3 justify-center items-center">
                                                                <AiOutlineMinusCircle 
                                                                    className="mx-2 cursor-pointer" 
                                                                    onClick={()=>removeFromCart(
                                                                        k,
                                                                        1,
                                                                        cart[k].name,
                                                                        cart[k].price,
                                                                        cart[k].size,
                                                                        cart[k].variant
                                                                    )}
                                                                /> 
                                                                    {cart[k].qty}
                                                                <AiOutlinePlusCircle 
                                                                    className="mx-2 cursor-pointer" 
                                                                    onClick={()=>addToCart(
                                                                        k,
                                                                        1,
                                                                        cart[k].name,
                                                                        cart[k].price,
                                                                        cart[k].size,
                                                                        cart[k].variant
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </>
                            )
                        } */}
                    </ol>
                </div>

                <div className="">
                    <h3 className="flex text-lg font-semibold p-4 text-center justify-center items-center mt-8">Subtotal: {totalPrice}</h3>
                    {/* <h3 className="flex text-lg font-semibold p-4 text-center justify-center items-center mt-8">Subtotal: </h3> */}
                </div>

                <div className="flex justify-center items-center text-center text-sm md:text-md">
                    <button 
                        className="mt-2 border px-2 py-1 ml-6 rounded-md tracking-wide bg-[#070077] text-white hover:bg-blue-600 hover:text-white transition duration-200 shadow-lg" 
                        onClick={() => router.push("/checkout")}
                    >
                        Checkout
                    </button>

                    <button 
                        className="mt-2 border px-2 py-1 ml-6 rounded-md tracking-wide bg-[#070077] text-white hover:bg-blue-600 hover:text-white transition duration-200 shadow-lg" 
                        onClick={clearCartFunc}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartComponent
