import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { OurStory } from "@/components/our-story"
import { Programs } from "@/components/programs"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <OurStory />
      <Programs />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
