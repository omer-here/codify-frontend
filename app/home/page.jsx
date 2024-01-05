import Hero from "@/components/layout/Hero"
import Navbar from "@/components/layout/Navbar"
import Stats from "@/components/layout/Stats"
import SubPage from "@/components/layout/SubPage"
import Footer from "@/components/layout/Footer"
import Body from "@/components/layout/Body"
import Testimonial from "@/components/layout/Testimonial"
import CTA from "@/components/layout/CTA"


function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Stats/>
    <SubPage/>
    <Body/>
    <Testimonial/>
    <CTA/>
    <Footer/>
    </>
  )
}

export default Home

