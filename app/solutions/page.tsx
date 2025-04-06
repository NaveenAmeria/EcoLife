import type { Metadata } from "next"
import ReduceFootprint from "@/components/reduce-footprint"
import MythsFacts from "@/components/myths-facts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Leaf, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions | Carbon Footprint Awareness",
  description: "Discover ways to reduce your carbon footprint and live more sustainably",
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Solutions to Reduce Your Carbon Footprint</h1>
          <p className="text-xl text-muted-foreground">
            Simple changes in your daily habits can make a significant difference in reducing your environmental impact.
          </p>
        </div>

        <ReduceFootprint />

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Impact of Your Actions</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Small Changes, Big Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Even small changes can add up to significant carbon reductions:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Switching to LED bulbs can save 1,000+ pounds of CO₂ per year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Washing clothes in cold water saves 500 pounds of CO₂ annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Reducing food waste by half saves 1,200 pounds of CO₂ per year</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Lifestyle Shifts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Bigger lifestyle changes can dramatically reduce your footprint:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Going car-free saves an average of 2.4 tons of CO₂ per year</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Switching to a plant-based diet can reduce food emissions by up to 70%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Installing solar panels can eliminate 3-4 tons of CO₂ annually</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-primary" />
                  Collective Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">When communities act together, the impact multiplies:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>If 1 million people switched to renewable energy, it would save 4 million tons of CO₂</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Community composting can divert tons of waste from landfills annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Urban tree planting programs can absorb thousands of tons of CO₂</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <MythsFacts />

        <section className="py-16 bg-muted/30 rounded-lg p-8 mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">30-Day Carbon Challenge</h2>
          <p className="text-center text-lg max-w-2xl mx-auto mb-8">
            Try our 30-day challenge to gradually reduce your carbon footprint with simple daily actions.
          </p>

          <div className="max-w-3xl mx-auto bg-card rounded-lg p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Week 1: Energy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">1.</span>
                    <span>Replace one light bulb with an LED</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">2.</span>
                    <span>Unplug devices not in use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">3.</span>
                    <span>Take shorter showers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">4.</span>
                    <span>Wash clothes in cold water</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">5.</span>
                    <span>Adjust thermostat by 1-2 degrees</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Week 2: Transportation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">1.</span>
                    <span>Walk or bike for one trip</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">2.</span>
                    <span>Carpool or use public transit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">3.</span>
                    <span>Combine errands into one trip</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">4.</span>
                    <span>Check tire pressure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">5.</span>
                    <span>Try a car-free day</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Week 3: Food</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">1.</span>
                    <span>Eat one plant-based meal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">2.</span>
                    <span>Buy local produce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">3.</span>
                    <span>Reduce food waste</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">4.</span>
                    <span>Start composting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">5.</span>
                    <span>Try a meat-free day</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Week 4: Consumption</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">1.</span>
                    <span>Bring reusable bags shopping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">2.</span>
                    <span>Avoid single-use plastics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">3.</span>
                    <span>Repair instead of replace</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">4.</span>
                    <span>Buy second-hand</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">5.</span>
                    <span>Try a no-buy day</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

