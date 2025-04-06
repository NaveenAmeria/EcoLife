"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Home, Car, Utensils, ShoppingBag } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ReductionTips {
  home: string[]
  transportation: string[]
  food: string[]
  shopping: string[]
}

export default function ReduceFootprint() {
  const [tips, setTips] = useState<ReductionTips | null>(null)
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

    const section = document.getElementById("solutions")
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
        setTips(data.reductionTips)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching reduction tips:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section id="solutions" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Easy Ways to Shrink Your Footprint</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </section>
    )
  }

  return (
    <section id="solutions" className="py-16">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Easy Ways to Shrink Your Footprint</h2>

        {tips && (
          <Tabs defaultValue="home" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="home" className="flex flex-col items-center gap-2 py-3">
                <Home className="h-5 w-5" />
                <span>At Home</span>
              </TabsTrigger>
              <TabsTrigger value="transportation" className="flex flex-col items-center gap-2 py-3">
                <Car className="h-5 w-5" />
                <span>On the Go</span>
              </TabsTrigger>
              <TabsTrigger value="food" className="flex flex-col items-center gap-2 py-3">
                <Utensils className="h-5 w-5" />
                <span>Food Habits</span>
              </TabsTrigger>
              <TabsTrigger value="shopping" className="flex flex-col items-center gap-2 py-3">
                <ShoppingBag className="h-5 w-5" />
                <span>Shopping</span>
              </TabsTrigger>
            </TabsList>

            <Card>
              <CardContent className="pt-6">
                <TabsContent value="home" className="mt-0">
                  <CardTitle className="mb-4 flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    At Home
                  </CardTitle>
                  <ul className="space-y-3">
                    {tips.home.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="transportation" className="mt-0">
                  <CardTitle className="mb-4 flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    On the Go
                  </CardTitle>
                  <ul className="space-y-3">
                    {tips.transportation.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="food" className="mt-0">
                  <CardTitle className="mb-4 flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    Food Habits
                  </CardTitle>
                  <ul className="space-y-3">
                    {tips.food.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="shopping" className="mt-0">
                  <CardTitle className="mb-4 flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    Shopping
                  </CardTitle>
                  <ul className="space-y-3">
                    {tips.shopping.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        )}
      </div>
    </section>
  )
}

