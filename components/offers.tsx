import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Offers() {
  return (
    <section id="offers" className="py-12 md:py-24 lg:py-32">
      <div className="container-xl">
        <h2 className="text-center text-3xl font-bold font-orbitron tracking-tighter sm:text-4xl md:text-5xl">Special Offers</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-10" />
            <CardHeader>
              <Badge className="w-fit bg-blue-500 hover:bg-blue-600">Limited Time</Badge>
              <CardTitle className="mt-4 text-2xl">Flat 20% OFF</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">On Full Detailing Packages</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-10" />
            <CardHeader>
              <Badge className="w-fit bg-purple-500 hover:bg-purple-600">Special Deal</Badge>
              <CardTitle className="mt-4 text-2xl">Free Exterior Wash</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">With Every Interior Detailing</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

