import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Button from '../components/common/Button'
import { useRouter } from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-center items-center text-center min-h-screen">
        <h1 className="text-2xl font-bold">Hello</h1>
        {/* <Button 
          title={"Shop Now"} 
          onClick={() => router.push("/products")}
        /> */}
      </div>
    </>
  )
}
