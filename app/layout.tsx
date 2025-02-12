import "./globals.css"
import { Orbitron } from "next/font/google"
import { cn } from "@/lib/utils"
import type { Metadata } from 'next'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: "Luster Line - Professional Car Detailing",
  description: "Professional car detailing services at its finest. Auto detailing, PPF & wrapping, ceramic coating, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("dark scroll-smooth scroll-pt-20", orbitron.variable)} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-orbitron antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}

