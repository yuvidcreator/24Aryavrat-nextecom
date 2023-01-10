import { useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

export const CartComponent = () => {

    const ref = useRef();

    const toggleCart = () => {
        console.log("Clicked");
    }

    return (
        <>
            <div ref={ref} className="cart-sidebar absolute top-0 right-0 bg-gray-100 p-10 transform transition-transform translate-x-full">
                <h2 className="text-xl font-semibold mt-8">This is my Cart</h2>
                <span onClick={toggleCart} className="absolute top-8 right-5 text-xl">
                    <AiFillCloseCircle />
                </span>
                <ol>
                    <li>
                        <span>Desi Ghee - 1</span>
                    </li>
                </ol>
            </div>
        </>
    )
}
