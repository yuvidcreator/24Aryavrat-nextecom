import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center text-center min-h-screen">
        <h1 className="text-2xl font-bold">Hello</h1>
      </div>
    </>
  )
}
