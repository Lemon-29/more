import { servicesDetails } from "@/constants/data"
import Container from "./Container"
import Title from "./Title"
import { ReactElement } from "react";

interface Props {
    title: string;
    description: string; 
    icon: ReactElement;
}

const Myservices = () => {
  return (
    <Container className="border border-black mt-10 bg-slate-200 ">
            <Title title= "My services" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    servicesDetails.map((item) => (
                        <div  key={item?.title} className="border border-black p-5 rounded-md  shadow-xl hover:shadow-none bg-slate-300">
                            <div  className="flex items-center gap-2 mb-4">
                            <p className="text-xl font-bold">{item?.title}</p>
                            {<span className="text-pink-700 animate-bounce"> {<item.icon/>}</span>}
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
    </Container>
  )
}

export default Myservices