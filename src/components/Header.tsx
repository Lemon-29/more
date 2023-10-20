"use client"
import Image from "next/image"
import logo from "../assets/Logodemo.png" 
import Link from "next/link"
import { navigation } from "@/constants/data"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"


const Header = () => {
  const [show, setShow] = useState(false)
  const pathname = usePathname()
  

  return (
    <div className='w-full h-20 bg-gray-300 sticky top-0 border-b-[1px] border-b-zinc-500 z-50'>
      <div className='max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0 relative '>
        <Link href={"/"}><Image src={logo} alt="logo here" className="w-20 h-16 font-bold "/></Link>
        <ul className="hidden md:flex items-center text-sm uppercase gap-5 font-semibold text-zinc-700">
          {
            navigation.map((item) => (
              <Link key={item.title} href={item.href} target={item?.target}>
          <li className={`hover:text-black cursor-pointer duration-300 relative group overflow-hidden ${pathname=== item.href &&  "text-black"}`}>
            {item.title}
          <span  className={`h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300 ${pathname=== item.href && "translate-x-0"}`}/>
          </li>
          </Link>
            ))
          }
          
        </ul>
        <div onClick={() => setShow(!show)} className="inline-flex md:hidden cursor-pointer text-zinc-800 hover:text-black ">
          {show ? <X /> : <Menu />} 
        </div>
        {
          show && <ul className="absolute right-0 px-10 py-6 top-20 z-10 bg-zinc-500 flex flex-col items-start text-sm uppercase gap-5 font-semibold text-zinc-700">
          {
            navigation.map((item) => (
              <Link key={item.title} href={item.href}>
          <li className="hover:text-gray-300 cursor-pointer duration-300 relative group overflow-hidden text-gray-900">{item.title}
          <span  className="h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"/>
          </li>
          </Link>
            ))
          }
          
        </ul>
        }
      </div>
    </div>
  )
}

export default Header