import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/50 py-12 md:py-24 lg:py-32">
      <div className="container-xl">
        <h2 className="text-center text-3xl font-bold font-orbitron tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Get in touch with us for all your car detailing needs
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-colors hover:bg-secondary/80">
            <CardHeader className="flex flex-col items-center space-y-2 text-center">
              <Phone className="h-10 w-10 text-primary md:h-12 md:w-12" />
              <CardTitle className="text-xl md:text-2xl">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-2 text-center">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button variant="link" className="h-auto p-0 text-base md:text-lg" asChild>
                  <a target="_blank" rel="noopener noreferrer" href="tel:+91 89991 68727">+91 89991 68727</a>
                </Button>
                <span className="text-muted-foreground">|</span>
                <Button variant="link" className="h-auto p-0 text-base md:text-lg" asChild>
                  <a target="_blank" rel="noopener noreferrer" href="tel:+91 93093 55441">+91 93093 55441</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-colors hover:bg-secondary/80">
            <CardHeader className="flex flex-col items-center space-y-2 text-center">
              <Mail className="h-10 w-10 text-primary md:h-12 md:w-12" />
              <CardTitle className="text-xl md:text-2xl">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-2 text-center">
              <Button variant="link" className="h-auto p-0 text-base md:text-lg" asChild>
                <a target="_blank" rel="noopener noreferrer" href="mailto:lusterline01@gmail.com">lusterline01@gmail.com</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-colors hover:bg-secondary/80">
            <CardHeader className="flex flex-col items-center space-y-2 text-center">
              <MapPin className="h-10 w-10 text-primary md:h-12 md:w-12" />
              <CardTitle className="text-xl md:text-2xl">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-2 text-center">
              <p className="text-base text-muted-foreground md:text-lg">
              <Button variant="link" className="h-auto p-0 text-base md:text-lg" asChild>
                  <a href="https://maps.app.goo.gl/xZB8VcqczVKYUJ2A8" target="_blank" rel="noopener noreferrer">
                    Nesari Road, Bhadgaon, Gadhinglaj
                  </a>
              </Button>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

