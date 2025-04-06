import type { Metadata } from "next"
import DailyActivities from "@/components/daily-activities"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Home, Utensils, ShoppingBag } from "lucide-react"

export const metadata: Metadata = {
  title: "Daily Activities | Carbon Footprint Awareness",
  description: "Learn about daily activities that contribute to your carbon footprint",
}

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Daily Activities That Impact Your Carbon Footprint</h1>
          <p className="text-xl text-muted-foreground">
            Understanding how your everyday choices affect the environment is the first step toward making positive
            changes.
          </p>
        </div>

        <DailyActivities />

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">The Science Behind Carbon Emissions</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Transportation Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Transportation is one of the largest sources of carbon emissions globally. The average passenger
                  vehicle emits about 4.6 metric tons of carbon dioxide per year. This varies based on fuel efficiency,
                  distance traveled, and fuel type.
                </p>
                <p className="mt-4">
                  Air travel has an even larger impact, with a single round-trip flight from New York to London
                  generating about 1.8 metric tons of CO₂ per passenger.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Home Energy Consumption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The average household in developed countries produces about 7.5 tons of CO₂ equivalent per year from
                  energy use. Heating and cooling account for approximately 40% of home energy use.
                </p>
                <p className="mt-4">
                  Electricity generation is a major source of emissions, with coal-fired power plants producing about
                  2.2 pounds of CO₂ for every kilowatt-hour generated.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Food Production Emissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Food production accounts for approximately 26% of global greenhouse gas emissions. Animal products,
                  especially beef and lamb, have the highest carbon footprint.
                </p>
                <p className="mt-4">
                  Producing 1 kg of beef generates about 60 kg of greenhouse gases, while the same amount of lentils
                  produces less than 1 kg of emissions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  Consumer Goods Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The production of consumer goods contributes significantly to carbon emissions. For example,
                  manufacturing a new smartphone generates about 55 kg of CO₂ equivalent.
                </p>
                <p className="mt-4">
                  The fashion industry is responsible for about 10% of global carbon emissions, with the production of a
                  single cotton t-shirt generating around 6 kg of CO₂.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Track Your Impact</h2>
          <p className="text-center text-lg max-w-2xl mx-auto mb-8">
            Keeping a carbon diary for just one week can help you identify your biggest sources of emissions and where
            you can make the most impactful changes.
          </p>

          <div className="max-w-xl mx-auto bg-card rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4">Carbon Diary Template</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 font-semibold border-b pb-2">
                <div>Activity</div>
                <div>Frequency</div>
                <div>Estimated Impact</div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-b pb-2">
                <div>Car travel</div>
                <div>Miles per week</div>
                <div>0.4 kg CO₂ per mile</div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-b pb-2">
                <div>Electricity</div>
                <div>kWh per month</div>
                <div>0.2-0.5 kg CO₂ per kWh</div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-b pb-2">
                <div>Meat consumption</div>
                <div>Servings per week</div>
                <div>1-6 kg CO₂ per serving</div>
              </div>

              <div className="grid grid-cols-3 gap-4 border-b pb-2">
                <div>Online shopping</div>
                <div>Deliveries per month</div>
                <div>0.5 kg CO₂ per delivery</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

