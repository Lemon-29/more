import Container from "./Container"
import Title from "./Title"


const Aboutme = () => {
  return (
    <Container className="bg-gray-700 text-blue-400 border shadow-lg shadow-zinc-500 border-gray-950">
        <Title title="About Me" />
        <div className="flex items-center justify-center  text-gray-400">
          <div className="gap-10">
          <p className="text-base tracking-wide mt-2">I am a web developer with 4+ years of experience in React. I have a strong foundation in front-end & back-end development and am skilled in creating user-friendly and responsive web applications using React and its ecosystem. I have experience working on a variety of projects, including building and maintaining single page applications, integrating with REST APIs, and implementing responsive design principles.
        </p>
        <p className="text-base tracking-wide mt-2">
        I am also proficient in using tools such as Webpack, npm, and Git for development and deployment. In addition to my technical skills, I am a strong communicator and team player. I am able to work effectively with cross-functional teams and am comfortable taking on new challenges and learning new technologies as needed. I am always looking to improve my skills and stay up-to-date with the latest best practices in web development. I am excited to continue growing as a developer and making meaningful contributions to projects and teams.
        </p>
          </div>        
        </div>
    </Container>
  )
}

export default Aboutme