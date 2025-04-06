"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle } from "lucide-react"

interface Myth {
  myth: string
  fact: string
}

export default function MythsFacts() {
  const [myths, setMyths] = useState<Myth[]>([])
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("myths")
    if (section) {
      observer.observe(section)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/carbon-data")
        const data = await response.json()
        setMyths(data.myths)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching myths:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section id="myths" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Myths vs. Facts</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </section>
    )
  }

  return (
    <section id="myths" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Myths vs. Facts</h2>

      <div
        className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {myths.map((item, index) => (
          <div key={index} className="space-y-4">
            <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Myth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">"{item.myth}"</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Fact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">{item.fact}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

