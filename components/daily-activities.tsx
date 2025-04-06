"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Home, Utensils, ShoppingBag, Trash2 } from "lucide-react"

interface Activity {
  id: number
  category: string
  items: string[]
}

export default function DailyActivities() {
  const [activities, setActivities] = useState<Activity[]>([])
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

    const section = document.getElementById("activities")
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
        setActivities(data.activities)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching activities:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getIcon = (category: string) => {
    switch (category) {
      case "Transportation":
        return <Car className="h-8 w-8 text-primary" />
      case "Home Energy":
        return <Home className="h-8 w-8 text-primary" />
      case "Food Choices":
        return <Utensils className="h-8 w-8 text-primary" />
      case "Shopping Habits":
        return <ShoppingBag className="h-8 w-8 text-primary" />
      case "Waste":
        return <Trash2 className="h-8 w-8 text-primary" />
      default:
        return null
    }
  }

  if (loading) {
    return (
      <section id="activities" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Daily Activities That Add to Your Carbon Footprint</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </section>
    )
  }

  return (
    <section id="activities" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Daily Activities That Add to Your Carbon Footprint</h2>

      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {activities.map((activity, index) => (
          <Card
            key={activity.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              {getIcon(activity.category)}
              <CardTitle>{activity.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {activity.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

