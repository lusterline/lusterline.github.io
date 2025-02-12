"use client"

import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function Location() {
  return (
    <section id="location" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4">
        <div className="flex items-center justify-center space-x-2">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="text-center text-3xl font-bold font-orbitron tracking-tighter sm:text-4xl md:text-5xl">Find Us</h2>
        </div>
        <Card className="mt-12 overflow-hidden">
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.359794162242!2d74.35230917513874!3d16.201932484496897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3bc08f3955411813%3A0xc9e562f12e3df42a!2sLuster%20line%20car%20detailing%20works!5e0!3m2!1sen!2sin!4v1739250096275!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0.5 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Card>
      </div>
    </section>
  )
}

