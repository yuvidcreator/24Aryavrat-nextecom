import Image from 'next/image';
// import { FaHome, FaSearch, FaUser, FaFolder, FaDotCircle, FaAddressCard, FaEnvelopeOpenText } from "react-icons/fa";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
// import WmdsLogo from '../../../public/falcon-courier-logo.png'
// import wmdslogo from '../../../public/webinoxmedia-logo.png'
import WhatsAppButton from './WhatsAppButton';
import Button from './Button';
// import { CartComponent } from '../cart/CartComponent';
import { useRef } from 'react';
import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';



const links = [
	{
		label: 'Home',
		href: '/',
        // icon: (
        //     <FaHome className="h-4 group-hover:animate-bounce group-hover:text-blue-400" />
        // )
	},
    {
        label: 'Products',
        href: '/products',
        // icon: (
        //     <FaSearch className="h-4 group-hover:animate-bounce group-hover:text-blue-400" />
        // )
    },
    {
        label: 'Blogs',
        href: '/blogs',
        // icon: (
        //     <FaSearch className="h-4 group-hover:animate-bounce group-hover:text-blue-400" />
        // )
    },
    {
		label: 'About',
		href: '/about',
        // icon: (
        //     <FaUser className="h-4 group-hover:animate-bounce group-hover:text-blue-400" />
        // )
	},
	{
		label: 'Contact',
		href: '/contact',
        // icon: (
        //     <FaAddressCard className="h-4 group-hover:animate-bounce group-hover:text-blue-400" />
        // )
	},
]

const MobileNav = ({open, setOpen}) => {
    const router = useRouter();

    return (
        <div 
            className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`} 
            onClick={() => {
                setOpen(!open)
            }}
        >
            <div className="flex items-center filter drop-shadow-md h-20 ml-4 mt-8"> 
            {/*logo container*/}
                <Image 
                    src={"/24Aryavrat-logo.png"} 
                    alt="24 Aryavrat Logo" 
                    width={243} 
                    height={126} 
                    className="cursor-pointer" 
                    onClick={() => router.push("/")}
                />
            </div>
            <div className="flex flex-col ml-12 my-12 space-y-4 text-lg text-[#0B0B45] font-medium">
                {links.map(({ href, label}) => (
                    <Link key={label} href={href} className="inline-flex">
                        {label}
                    </Link>
                ))}
                <WhatsAppButton />
            </div>

            <div className="ml-10 uppercase -mt-4">    
                <Button 
                    title={"Locate Us"}
                    onClick={() => router.push("https://goo.gl/maps/7p4NWp3QN9a6VM3RA")}
                />
            </div>

            {/* <button 
                className="uppercase mt-2 border px-4 py-1 ml-6 rounded-md font-medium tracking-wide bg-[#070077] text-white hover:bg-blue-600 hover:text-white transition duration-200 shadow-lg" 
                onClick={() => router.push("https://goo.gl/maps/7p4NWp3QN9a6VM3RA")}
            >
                Locate Us
            </button> */}
        </div>
    )
}



const Header = ({
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    subTotal
})  => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const ref = useRef();

    // console.log(
    //     cart,
    //     addToCart,
    //     removeFromCart,
    //     clearCart,
    //     subTotal
    // );

    // console.log(Object.keys(cart))

    const toggleCart = () => {
        console.log("Clicked");
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else if (ref.current.classList.contains('translate-x-0')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }

    return (
        <header>
            <nav className="fixed top-0 z-[1000] flex items-center justify-between w-full px-2 h-[90px] lg:h-[90px] lg:px-52 shadow-lg bg-white">
                <Image 
                    src={"/24Aryavrat-logo.png"} 
                    alt="" 
                    width={171} 
                    height={69} 
                    className="cursor-pointer filter drop-shadow-md mt-4 mb-2 lg:mb-0" 
                    onClick={() => router.push("/")}
                />

                <div className="w-10/12 flex justify-end items-center">
                    {/* <MobileNav open={open} setOpen={setOpen} /> */}
                    {/* Cart Icon */}
                    <div className="md:hidden mt-2 mr-4">
                        <button className="text-red-500" onClick={toggleCart}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute top-4 pr-1 pl-1 bg-green-500 rounded-full text-xs">
                                {
                                    (Object.keys(cart).length === 0) ? (
                                        <></>
                                    ) : (
                                        Object.keys(cart).map((k)=>{
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
                    {/* <div className="z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden mr-4" onClick={() => {
                        setOpen(!open)
                    }}>
                        hamburger button
                        <span className={`h-0.5 w-8 bg-[#0B0B45] rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-0.5 w-8 bg-[#0B0B45] rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-0.5 w-8 bg-[#0B0B45] rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div> */}

                    <div className="hidden md:flex ml-auto">
                        <div className="hidden ml-4 md:flex items-center space-x-4 text-[#0B0B45]">
                            {links.map(({ href, label}) => (
                                <Link key={label} href={href} className="header-link group">
                                    <span className="span">{label}</span>
                                </Link>
                            ))}

                            {/* Cart Icon */}
                            <div className="mt-2">
                                <button className="text-red-500" onClick={toggleCart}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="absolute top-4 pr-1 pl-1 bg-green-500 rounded-full text-xs">
                                        {
                                            (Object.keys(cart).length === 0) ? (
                                                <></>
                                            ) : (
                                                Object.keys(cart).map((k)=>{
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
                        </div>

                        <div className="flex space-x-4">
                            {/* <button className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button> */}

                            {/* <button className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button> */}

                            {/* <button className="uppercase border px-4 py-1 ml-6 rounded font-medium text-white tracking-wide hover:bg-white hover:text-black transition duration-200">
                                Appointments
                            </button> */}
                        </div>
                    </div>
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
                            {
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
                            }
                        </ol>
                    </div>

                    <div className="">
                        <h3 className="flex text-lg font-semibold p-4 text-center justify-center items-center mt-8">Subtotal: {subTotal}</h3>
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
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Header;