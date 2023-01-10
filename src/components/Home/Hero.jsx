import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="flex justify-center mb-16">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col max-w-7xl justify-center items-center space-y-3 w-full ">
                        <div className="flex flex-col md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                            <div className="text-3xl md:text-5xl font-bold p-4">
                                Online Store to Buy Panchagavya Products
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6 w-full items-center justify-center ">
                            <div className="lg:w-40 w-64 h-60 md:h-40 overflow-hidden rounded-xl ">
                                {/* <img src="https://source.unsplash.com/random/300x500/?man" alt="" className="" /> */}
                                <img src="https://cdn.shopify.com/s/files/1/0001/9418/3221/products/Panchagavyasoap.png" alt="" className="" />
                            </div>
                            <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                                <div className="w-32 lg:w-40 h-32 overflow-hidden rounded-xl ">
                                    <img src="https://www.ashramestore.com/online_products/1526996097pgg.png" alt="" className="" />
                                </div>
                                <div className="w-32 lg:w-40 h-48 overflow-hidden rounded-xl ">
                                    <img src="https://www.gausrushti.com/wp-content/uploads/2020/03/Panchagavya-Ghrita-Best-for-All-Neural-Problems.jpg" alt="" className="" />
                                </div>
                            </div>
                            <div className="lg:w-60 w-64 h-96 overflow-hidden rounded-xl ">
                                <img src="https://www.gausrushti.com/wp-content/uploads/2020/08/Alcohol-Free-Hand-Sanitizer-Gau-Sanitizer-600x600.jpg" alt="" className="" />
                            </div>
                            <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                <div className="w-32 lg:w-40 h-48 overflow-hidden rounded-xl ">
                                    <img src="https://www.gausrushti.com/wp-content/uploads/2020/05/Gaumutra-Ark-Forest-Grazing-Indian-Desi-Cows-300x300.jpg" alt="" className="" />
                                </div>
                                <div className="w-32 lg:w-40 h-32 overflow-hidden rounded-xl ">
                                    <img src="https://www.gausrushti.com/wp-content/uploads/2020/05/Khillari-Cow-Ghee-Maharashtrian-Breeds-Desi-Bilona-Ghee-300x300.jpg" alt="" className="" />
                                </div>
                            </div>
                            <div className="lg:w-40 w-64 h-60 md:40 overflow-hidden rounded-xl ">
                                <img src="https://www.gausrushti.com/wp-content/uploads/2020/07/Amrut-Dhoop-Handmade-Incense-sticks.jpg" alt="" className="" />
                                {/* <img src="https://cdn.shopify.com/s/files/1/0496/5937/9867/products/490_1024x1024.jpg" alt="" className="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero