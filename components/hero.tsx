"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary/20 to-background">
      <div
        className={`container text-center transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Understanding Your <span className="text-primary">Carbon Footprint</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Every action leaves a trace. Learn how your daily choices impact the planet and what you can do to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/calculator">
            <Button size="lg" className="w-full sm:w-auto">
              Calculate Your Footprint <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/solutions">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Solutions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

