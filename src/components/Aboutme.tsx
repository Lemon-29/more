import Container from "./Container"
import Title from "./Title"


const Aboutme = () => {
  return (
    <Container className="bg-gray-700 text-blue-400 border shadow-lg shadow-zinc-500 border-gray-950">
        <Title title="About Me" />
        <div className="flex items-center justify-between gap-5 text-gray-400">
        <p className="text-base tracking-wide mt-2">Me as a MERN stack developer is a software developer who specializes in using a combination of four technologies: MongoDB, Express. js, React, and Node. js. Each technology in the MERN stack represents a different aspect of building web applications.</p>
        </div>
    </Container>
  )
}

export default Aboutme