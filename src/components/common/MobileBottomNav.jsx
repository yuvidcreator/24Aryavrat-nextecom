// import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaHome, FaHeart } from 'react-icons/fa'
import { FiPackage } from 'react-icons/fi'
import WhatsAppButton from './WhatsAppButton'

const links = [
	{
		label: 'Home',
		href: '/',
		icon: (
			<FaHome className="text-2xl" />
		),
	},
	{
		label: 'Products',
		href: '/products',
		icon: (
			// <FaAddressCard className="text-2xl" />
			<FiPackage className="text-2xl" />
		),
	}
]

const MobileBottomNav = () => {
    const router = useRouter();

    return (
        <div  className="sm:hidden absolute">
            <nav className="fixed bottom-0 w-full border-t bg-zinc-100 pb-safe dark:border-zinc-800 dark:bg-zinc-900">
				<div className="mx-auto flex h-16 max-w-md items-center justify-around px-6">
					{links.map(({ href, label, icon }) => (
						<Link 
                            key={label} 
                            href={href}
                            className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
                                router.pathname === href
                                    ? "text-blue-800 dark:text-blue-300"
                                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                            }`}
                        >
                            {icon}
                            <span className="text-xs text-zinc-600 dark:text-gray-300">
                                {label}
                            </span>
						</Link>
					))}
					
					<div className="flex h-full w-full flex-col items-center justify-center space-y-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
						<FaHeart className="text-2xl" />
						<span className="text-xs text-zinc-600 dark:text-gray-300">
							Wishlist
						</span>
					</div>

					<WhatsAppButton />
				</div>
			</nav>
        </div>
    )
}

export default MobileBottomNav