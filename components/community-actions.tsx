"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Leaf, Recycle } from "lucide-react"

export default function CommunityActions() {
  const [actions, setActions] = useState<string[]>([])
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

    const section = document.getElementById("community")
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
        setActions(data.communityActions)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching community actions:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const icons = [
    <Leaf key="leaf" className="h-12 w-12 text-primary" />,
    <Recycle key="recycle" className="h-12 w-12 text-primary" />,
    <Users key="users" className="h-12 w-12 text-primary" />,
  ]

  if (loading) {
    return (
      <section id="community" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Can Communities Do?</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </section>
    )
  }

  return (
    <section id="community" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Can Communities Do?</h2>

      <div
        className={`grid md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {actions.map((action, index) => (
          <Card
            key={index}
            className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <CardHeader className="pb-2 flex flex-col items-center">
              {icons[index % icons.length]}
              <CardTitle className="mt-4">Community Action</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{action}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

