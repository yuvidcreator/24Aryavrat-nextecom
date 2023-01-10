import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import Hero from '../components/Home/Hero'
import Gallery from '../components/Home/Gallery'
import Featured from '../components/Home/Featured'
import CallToAction from '../components/Home/CallToAction'
import FAQ from '../components/Home/FAQ'
import ProductsCard from '../components/Home/ProductsCard'
// import Button from '../components/common/Button'


const inter = Inter({ subsets: ['latin'] })


const meta = {
  title: "24Aryavrat Organic Store and A2 Milk Dairy",
  description: "24Aryavrat Organic Store and A2 Milk Dairy - The Best Place to buy A2 Milk and Organic Products.",
  keywords: "24Aryavrat Organic Store and A2 Milk Dairy, 24 Aryavrat, A2 milk, Desi bilona ghee, a2 milk in pune, a2 milk in dhanori, a2 milk in vishrantwadi, desi cow milk in pune, desi milk in pune, a2 milk price in pune, a2 milk dealer in dhanori",
  image: "/24Aryavrat-logo.png",
  publishedAt: "2023-01-05",
  updatedAt: "2023-01-09",
  author: "Yuvraj Limbole"
}

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* <div className="flex justify-center items-center text-center min-h-screen">
        <h1 className="text-2xl font-bold">Hello</h1>
        <Button 
          title={"Shop Now"} 
          onClick={() => router.push("/products")}
        />
      </div> */}

      <div className="mt-28 mb-16">
        <Hero />
        <Gallery />
        <Featured />
        <ProductsCard />
        <CallToAction />
        <FAQ />
      </div>
    </>
  )
}
