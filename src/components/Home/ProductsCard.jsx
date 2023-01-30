import Link from "next/link"
import { DOMAIN_URL } from "../../utils"


const PRODUCT_URL = `${DOMAIN_URL}/products`
const CATERGORY_URL = `${DOMAIN_URL}/category`

const items = [
    {
        id: 1,
        link: "https://dummyimage.com/600x600/",
        category: "PANCHAGAVYA",
        title: "Desi Ghee",
        sellingPrice: 1199,
        regularPrice: 1599,
        quantity: [
            {
                id: 1,
                value: 250
            },
            {
                id: 2,
                value: 500
            },
        ],
        rating: 4,
        productSlug: "desi-ghee",
        categorySlug: "panchagavya"
    },
    {
        id: 2,
        link: "https://dummyimage.com/600x600/",
        category: "PANCHAGAVYA",
        title: "Desi Ghee",
        sellingPrice: 1199,
        regularPrice: 1599,
        quantity: [
            {
                id: 1,
                value: 250
            },
            {
                id: 2,
                value: 500
            },
        ],
        rating: 5,
        productSlug: "desi-ghee",
        categorySlug: "panchagavya"
    },
    {
        id: 3,
        link: "https://dummyimage.com/600x600/",
        category: "PANCHAGAVYA",
        title: "Desi Ghee",
        sellingPrice: 1199,
        regularPrice: 1599,
        quantity: [
            {
                id: 1,
                value: 250
            },
            {
                id: 2,
                value: 500
            },
        ],
        rating: 3,
        productSlug: "desi-ghee",
        categorySlug: "panchagavya"
    }
]

const ProductsCard = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-8">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Top Selling Products</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep jianbing selfies heirloom.</p>
                </div>
                <div className="flex flex-wrap md:-mr-4 lg:space-x-4 justify-center">
                    {
                        items.map((item) => {
                            return (
                                <div className="lg:w-1/4 md:w-1/2 lg:p-6 p-4 w-full shadow-lg" key={item.id}>
                                    <Link className="block relative rounded overflow-hidden" href={`${PRODUCT_URL}/${item.productSlug}/`}>
                                        <img alt="ecommerce" className="m-auto md:m-0 h-[36vh] block" src={item.link} />
                                    </Link>
                                    <div className="mt-4 justify-center text-center">
                                        <Link href={`${CATERGORY_URL}/${item.categorySlug}/`}>
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                        </Link>
                                        <Link href={`${PRODUCT_URL}/${item.productSlug}/`}>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                        </Link>
                                        <p className="mt-1">{item.rating}</p>
                                        <div className="flex text-center justify-between">
                                            <p className="mt-1">₹{item.sellingPrice}</p>
                                            {/* <p className="mt-1 mr-auto">Rs.{item.regularPrice}</p> */}
                                            <div className="flex space-x-2 text-center">
                                                {
                                                    item.quantity.map((qty)=>{ 
                                                        return (
                                                            <div key={qty.id}>
                                                                <p className="mt-1"> {qty.value}ml</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* <div className="flex flex-wrap md:-mr-4 lg:space-x-4 justify-center">
                    {
                        items.map((item) => {
                            return (
                                <>
                                    <div className="lg:w-1/4 md:w-1/2 lg:p-6 p-4 w-full shadow-lg" key={item.id}>
                                        <Link className="block relative rounded overflow-hidden" href={`${PRODUCT_URL}/${item.productSlug}/`}>
                                            <img alt="ecommerce" className="m-auto md:m-0 h-[36vh] block" src={item.link} />
                                        </Link>
                                        <div className="mt-4 justify-center text-center">
                                            <Link href={`${CATERGORY_URL}/${item.categorySlug}/`}>
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                                            </Link>
                                            <Link href={`${PRODUCT_URL}/${item.productSlug}/`}>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                            </Link>
                                            <p className="mt-1">{item.rating}</p>
                                            <div className="flex text-center justify-between">
                                                <p className="mt-1">₹{item.sellingPrice}</p>
                                                <p className="mt-1 mr-auto">Rs.{item.regularPrice}</p>
                                                <div className="flex space-x-2 text-center">
                                                    {
                                                        item.quantity.map((qty)=>{ 
                                                            return (
                                                                <div key={qty.id}>
                                                                    <p className="mt-1"> {qty.value}ml</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div> */}
            </div>
        </section>
    )
}

export default ProductsCard