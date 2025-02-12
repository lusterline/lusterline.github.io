import { Car, Shield, Paintbrush, Droplets, Sparkles, Hammer, SprayCanIcon as Spray, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Auto Detailing",
    description: "Complete interior and exterior detailing services",
    icon: Car,
  },
  {
    title: "PPF & Wrapping",
    description: "Paint protection film and vinyl wrapping solutions",
    icon: Shield,
  },
  {
    title: "Ceramic Coating",
    description: "Long-lasting protection for your vehicle's paint",
    icon: Spray,
  },
  {
    title: "Premium Washing",
    description: "Advanced washing techniques for superior results",
    icon: Droplets,
  },
  {
    title: "Polishing",
    description: "Professional paint correction and polishing",
    icon: Sparkles,
  },
  {
    title: "Painting & Denting",
    description: "Expert paint touch-ups and dent repairs",
    icon: Hammer,
  },
  {
    title: "Deep Cleaning",
    description: "Thorough interior and exterior cleaning services",
    icon: Paintbrush,
  },
  {
    title: "Car Care Products",
    description: "Premium products for maintaining your vehicle",
    icon: Package,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-12 md:py-24 lg:py-32">
      <div className="container-xl">
        <h2 className="text-center text-3xl font-bold font-orbitron tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Professional car care services tailored to your needs
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="transition-colors hover:bg-secondary">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary" />
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

