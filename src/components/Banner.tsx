import Image from "next/image"
import banneri from "../assets/me.png"
import Container from "./Container"


const Banner = () => {
  return (
   <Container>
    <div className="flex items-center justify-between gap-x-20  py-10 ">
        <div className="flex items-center justify-center">
           <Image src={banneri}  alt="my image" className="object-contain h-[400px] w-[2000px] border border-blue-200 shadow-xl shadow-black rounded-xl bg-slate-200"/>
        </div>
        <div className="flex  justify-center  flex-col  items-right gap-2 mt-8">
            <h2 className="font-extrabold text-2xl">Md. Arafat Islam Lemon</h2>
            <p className="text-xl font-semibold">Mern Stack Developer</p>
            <p>As a MERN (MongoDB, Express.js, React, Node.js) stack developer, you specialize in building web applications from the ground up. You work with the full stack of technologies, from the database (MongoDB) to the server (Node.js and Express.js) and the client (React). Your expertise lies in creating seamless, dynamic, and interactive web applications that deliver a great user experience. Your daily tasks involve writing server-side and client-side code, designing databases, and ensuring the smooth flow of data between all components of the application. Your skills play a crucial role in shaping the modern web development landscape.</p>

            <a href="/resume.pdf" target="blank" className="font-bold text-xl text-blue-800  w-20 h-12 bg-slate-400  flex items-center justify-center rounded-lg hover:bg-black hover:text-white duration-300" > Hire Me </a>
        </div>
    </div>
   </Container> 
  ) 
}

export default Banner