import type { Metadata } from "next"
import CarbonCalculator from "@/components/carbon-calculator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Carbon Calculator | Carbon Footprint Awareness",
  description: "Calculate your personal carbon footprint and learn how to reduce it",
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Carbon Footprint Calculator</h1>
          <p className="text-xl text-muted-foreground">
            Estimate your personal carbon footprint and discover ways to reduce your environmental impact.
          </p>
        </div>

        <CarbonCalculator />

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Understanding Your Results</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader className="bg-green-50 dark:bg-green-950/20">
                <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <Info className="h-5 w-5" />
                  Low Impact (1-3)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>
                  You're doing great! Your carbon footprint is below average. Continue your sustainable practices and
                  consider sharing your knowledge with others.
                </p>
                <p className="mt-4 font-semibold">Next steps:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Advocate for climate policies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Support renewable energy initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Inspire others with your example</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-yellow-50 dark:bg-yellow-950/20">
                <CardTitle className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                  <Info className="h-5 w-5" />
                  Moderate Impact (4-6)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>
                  You're on the right track! Your carbon footprint is around average. There are still opportunities to
                  reduce your impact further.
                </p>
                <p className="mt-4 font-semibold">Focus areas:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Reduce meat consumption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Use public transportation more often</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Improve home energy efficiency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-red-50 dark:bg-red-950/20">
                <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <Info className="h-5 w-5" />
                  High Impact (7-10)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p>
                  There's significant room for improvement. Your carbon footprint is above average, but don't worry—many
                  changes can help reduce it.
                </p>
                <p className="mt-4 font-semibold">Priority actions:</p>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Reduce car and air travel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Switch to renewable energy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">•</span>
                    <span>Minimize food waste and meat consumption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-muted/30 rounded-lg p-8">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <HelpCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2">About This Calculator</h3>
              <p className="mb-4">
                This calculator provides a simplified estimate of your carbon footprint based on lifestyle factors. For
                a more detailed assessment, consider using specialized carbon calculators that account for regional
                differences and specific consumption patterns.
              </p>
              <p>
                The global average carbon footprint is approximately 4 tons of CO₂ per person per year. However, to meet
                climate goals, we should aim to reduce this to under 2 tons per person by 2050.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

