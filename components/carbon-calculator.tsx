"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function CarbonCalculator() {
  const [transportation, setTransportation] = useState(5)
  const [energy, setEnergy] = useState(5)
  const [food, setFood] = useState(5)
  const [shopping, setShopping] = useState(5)
  const [waste, setWaste] = useState(5)
  const [footprint, setFootprint] = useState(0)
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

    const section = document.getElementById("calculator")
    if (section) {
      observer.observe(section)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    // Simple calculation for demonstration purposes
    const total = transportation * 0.4 + energy * 0.3 + food * 0.2 + shopping * 0.1 + waste * 0.1
    setFootprint(Number.parseFloat(total.toFixed(1)))
  }, [transportation, energy, food, shopping, waste])

  const resetCalculator = () => {
    setTransportation(5)
    setEnergy(5)
    setFood(5)
    setShopping(5)
    setWaste(5)
  }

  const getFootprintCategory = () => {
    if (footprint < 3) return { label: "Low Impact", color: "text-green-500" }
    if (footprint < 6) return { label: "Moderate Impact", color: "text-yellow-500" }
    return { label: "High Impact", color: "text-red-500" }
  }

  const category = getFootprintCategory()

  return (
    <section id="calculator" className="py-16">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-4">Carbon Footprint Calculator</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Estimate your carbon footprint by adjusting the sliders below based on your lifestyle. This is a simplified
          calculator for educational purposes.
        </p>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Lifestyle Assessment</CardTitle>
            <CardDescription>Adjust the sliders to match your habits</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="transportation">Transportation</Label>
                <span>{transportation}</span>
              </div>
              <Slider
                id="transportation"
                min={1}
                max={10}
                step={1}
                value={[transportation]}
                onValueChange={(value) => setTransportation(value[0])}
              />
              <p className="text-sm text-muted-foreground">How much do you drive or fly?</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="energy">Home Energy</Label>
                <span>{energy}</span>
              </div>
              <Slider
                id="energy"
                min={1}
                max={10}
                step={1}
                value={[energy]}
                onValueChange={(value) => setEnergy(value[0])}
              />
              <p className="text-sm text-muted-foreground">How much electricity and heating do you use?</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="food">Food Choices</Label>
                <span>{food}</span>
              </div>
              <Slider id="food" min={1} max={10} step={1} value={[food]} onValueChange={(value) => setFood(value[0])} />
              <p className="text-sm text-muted-foreground">How much meat and processed food do you consume?</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="shopping">Shopping Habits</Label>
                <span>{shopping}</span>
              </div>
              <Slider
                id="shopping"
                min={1}
                max={10}
                step={1}
                value={[shopping]}
                onValueChange={(value) => setShopping(value[0])}
              />
              <p className="text-sm text-muted-foreground">How often do you buy new items?</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="waste">Waste Management</Label>
                <span>{waste}</span>
              </div>
              <Slider
                id="waste"
                min={1}
                max={10}
                step={1}
                value={[waste]}
                onValueChange={(value) => setWaste(value[0])}
              />
              <p className="text-sm text-muted-foreground">How much do you recycle and compost?</p>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Your Estimated Footprint:</h3>
                  <p className={`text-2xl font-bold ${category.color}`}>
                    {footprint} tons CO₂/year - {category.label}
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={resetCalculator}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

