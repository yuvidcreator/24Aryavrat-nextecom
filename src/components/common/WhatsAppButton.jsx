// import { useState, useEffect } from 'react'
// import { FiSun } from 'react-icons/fi'
import { EnquiryOnWhatsApp } from '@/utils/BizSettings';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {

    // if (typeof window === 'undefined') {
    //     return <></>;
    // } else {
    //     return (
    //         <div className="flex flex-col justify-center items-cente text-center p-2 mb-3">
    //             <button className="rounded-full">
    //                 <Link href={"https://wa.me/917875995888"} passHref>
    //                     {/* <FiSun className="text-3xl" /> */}
    //                     <FaWhatsapp className="text-4xl text-green-600" />
    //                 </Link>
    //             </button>
    //             {/* <span className='text-xs text-zinc-600 dark:text-zinc-400'>
    //                 Switch
    //             </span> */}
    //         </div>
    //     )
    // }
    return (
        <div className="flex flex-col justify-center items-cente text-center p-2 mb-3">
            <button className="rounded-full">
                <Link href={`${EnquiryOnWhatsApp}`} target={"_blank"} passHref>
                    {/* <FiSun className="text-3xl" /> */}
                    <FaWhatsapp className="text-4xl text-green-600" />
                </Link>
            </button>
            {/* <span className='text-xs text-zinc-600 dark:text-zinc-400'>
                Switch
            </span> */}
        </div>
    )
}

export default WhatsAppButton