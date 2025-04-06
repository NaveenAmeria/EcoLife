"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InfoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="content" ref={sectionRef} className="py-16">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-12">What is a Carbon Footprint?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>The "Invisible Smoke"</CardTitle>
              <CardDescription>Understanding your impact</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Think of it as the "invisible smoke" you leave behind daily. Every time you drive, use electricity, or
                throw away trash, you release heat-trapping gases (like carbon dioxide) into the air. These gases act
                like a thick blanket around the Earth, making it hotter.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Should You Care?</CardTitle>
              <CardDescription>The consequences of our actions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Too much "invisible smoke" causes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Extreme heatwaves and droughts</li>
                <li>Melting ice and rising sea levels (flooding homes and farms)</li>
                <li>Harm to animals, plants, and our food supply</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

