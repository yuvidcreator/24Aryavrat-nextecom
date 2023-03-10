import Link from "next/link"


const HomeContact = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">
                            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
                        </h1>
                        <p className="leading-relaxed mt-4">
                            Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.
                            </p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-blue-900 text-lg font-medium title-font mb-2 text-center">
                            Leave your Email
                        </h2>
                        {/* <div className="relative mb-4">
                            <label for="full-name" className="leading-7 text-sm text-gray-700">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div> */}
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-800">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        {/* <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"> */}
                        <button className="space-x-2 rounded-md bg-orange-600 py-2 px-8 font-semibold shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-[2px] hover:bg-black hover:shadow-blue-800/20 text-white text-lg">
                            Submit
                        </button>
                        <p className="text-xs text-gray-600 mt-3 text-center">
                            Dont worry. We dont spam.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeContact