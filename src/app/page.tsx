import Aboutme from '@/components/Aboutme'
import Banner from '@/components/Banner'
import Container from '@/components/Container'
import Myexperiences from '@/components/Myexperiences'
import Myservices from '@/components/Myservices'



export default function Home() {
  return (
    <main>
      
       <Banner />
       <Aboutme />
       <Myservices />
       <Myexperiences />
    </main>
  )
}
