import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Offers } from "@/components/offers"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Services />
      <Offers />
      <WhyChooseUs />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}

