import Container from "./Container"
import Image from "next/image"
import logo2 from "../assets/Logodemo2.png"
import Link from "next/link"
import { navigation, services } from "@/constants/data"
import {  Facebook, Youtube, GitBranch} from "lucide-react"


const Footer = () => {
  return (
    <div className="bg-gray-700 text-zinc-300 flex items-center justify-between mt-10 p-5">
        <Container className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:place-items-center px-4">
        <div>
          <Link href={"/"}>
          <Image src={logo2} alt="logo2 here"  className="w-20 h-16 font-bold "/>
          </Link>
          <p className="text-sm mt-2">We are seeking a front-end web developer to build new web pages and improve our company website. The right person for this role will be proficient in HTML, CSS, JavaScript, and PHP. You will be responsible for building and deploying new front-end features to our WordPress website, handling the integration of plugins such as WooCommerce, and performing routine maintenance of our site.</p>
        </div>

        <ul className="flex flex-col items-center justify-center text-sm uppercase gap-5 font-semibold mt-20">
          {
            navigation.map((item) => (
              <Link key={item.title} href={item.href}>
          <li className="hover:text-black cursor-pointer duration-300 relative group overflow-hidden">{item.title}
          <span  className="h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"/>
          </li>
          </Link>
            ))
          }
          
        </ul>

        <ul className="flex flex-col items-center justify-center text-sm uppercase gap-5 font-semibol mt-20">
          {
            services.map((item) => (
              
          <li key={item.title} className="hover:text-black cursor-pointer duration-300 relative group overflow-hidden">{item.title}
          <span  className="h-[1px] w-full bg-black inline-flex absolute left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"/>
          </li>
          
            ))
          }
          
        </ul>
        <div>
          <p  className="text-3xl font-semibold text-violet-300 flex justify-center">Reach Me With</p>
          <ul className="flex justify-center flex-row gap-5 mt-4 ">
            <a href="https://www.facebook.com/profile.php?id=100015109629183&mibextid=ZbWKwL" target="blank"><li className="w-10 h-10 bg-slate-400 text-blue-500 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-200"> 
              <Facebook /> 
            </li></a>
              <a href="https://www.youtube.com/" target="blank"><li className="w-10 h-10 bg-slate-400 text-blue-500 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-200">
              <Youtube />
            </li></a>
            <a href="https://github.com/Lemon-29" target="blank"><li className="w-10 h-10 bg-slate-400 text-blue-500 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-200">
              <GitBranch />
            </li></a>
          </ul>
        </div>
        </Container>
    </div>
  )
}

export default Footer