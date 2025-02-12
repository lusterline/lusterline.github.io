import { Award, Clock, UserCheck, Wallet } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Expert Technicians",
    description: "Skilled professionals with years of experience",
    icon: UserCheck,
  },
  {
    title: "Speedy Service",
    description: "Quick turnaround without compromising quality",
    icon: Clock,
  },
  {
    title: "Premium Quality",
    description: "Using only the best products and equipment",
    icon: Award,
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates for exceptional service",
    icon: Wallet,
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-secondary/50 py-12 md:py-24 lg:py-32">
      <div className="container-xl">
        <h2 className="text-center text-3xl font-bold font-orbitron tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Experience the difference with our professional car detailing services
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center transition-colors hover:bg-secondary">
              <CardHeader>
                <feature.icon className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

