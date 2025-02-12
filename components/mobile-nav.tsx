"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  items: { 
    href: string
    label: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void 
  }[]
}

export function MobileNav({ isOpen, onClose, items }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed right-0 top-0 z-[100] h-screen w-full max-w-[85%] bg-gradient-to-b from-background to-background/95 px-8 py-10 shadow-xl border-l border-border/40 sm:max-w-[450px]"
          >
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 text-foreground hover:bg-accent"
                onClick={onClose}
              >
                <X className="h-8 w-8" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-6">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) item.onClick(e)
                    onClose()
                  }}
                  className={cn(
                    "text-2xl font-medium text-foreground transition-colors hover:text-primary py-2"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
