import Image from 'next/image';
// import { FaHome, FaSearch, FaUser, FaFolder, FaDotCircle, FaAddressCard, FaEnvelopeOpenText } from "react-icons/fa";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
// import WmdsLogo from '../../../public/falcon-courier-logo.png'
// import wmdslogo from '../../../public/webinoxmedia-logo.png'
import WhatsAppButton from './WhatsAppButton';



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

function MobileNav({open, setOpen}) {
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

            <button className="uppercase mt-2 border px-4 py-1 ml-6 rounded-md font-medium tracking-wide bg-[#070077] text-white hover:bg-blue-600 hover:text-white transition duration-200 shadow-lg" onClick={() => router.push("https://goo.gl/maps/koo5FUkvREdNxi8n8")}>
                Locate Us
            </button>
        </div>
    )
}



function Header() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    return (
        <header>
            <nav className="fixed top-0 z-[1000] flex items-center justify-between w-full mt-4 lg:mt-2 px-2 h-[64px] lg:h-[81px] lg:px-52 shadow-md bg-white">
                <Image 
                    src={"/24Aryavrat-logo.png"} 
                    alt="" 
                    width={162} 
                    height={69} 
                    className="cursor-pointer filter drop-shadow-md mb-2 lg:mb-0" 
                    onClick={() => router.push("/")}
                />

                <div className="w-10/12 flex justify-end items-center">
                    <MobileNav open={open} setOpen={setOpen} />
                    <div className="z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden mr-4" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-0.5 w-8 bg-[#0B0B45] rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-0.5 w-8 bg-[#0B0B45] rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-0.5 w-8 bg-[#0B0B45] rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>

                    <div className="hidden md:flex ml-auto">
                        <div className="hidden ml-4 md:flex items-center space-x-4 text-[#0B0B45]">
                            {links.map(({ href, label}) => (
                                <Link key={label} href={href} className="header-link group">
                                    <span className="span">{label}</span>
                                </Link>
                            ))}

                            <div className="mt-2">
                                <WhatsAppButton />
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

            </nav>
        </header>
        
    )
}

export default Header