import Hero from "@/components/hero"
import InfoSection from "@/components/info-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <InfoSection />

        {/* Featured Sections with Links to Full Pages */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Explore More</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3">Daily Activities</h3>
              <p className="mb-4">Discover how your everyday actions contribute to your carbon footprint.</p>
              <Link href="/activities">
                <Button variant="outline" className="w-full">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3">Reduce Your Impact</h3>
              <p className="mb-4">Simple ways to shrink your carbon footprint in your daily life.</p>
              <Link href="/solutions">
                <Button variant="outline" className="w-full">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3">Carbon Calculator</h3>
              <p className="mb-4">Estimate your personal carbon footprint with our interactive tool.</p>
              <Link href="/calculator">
                <Button variant="outline" className="w-full">
                  Calculate Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3">Community Actions</h3>
              <p className="mb-4">Discover how communities can work together to combat climate change.</p>
              <Link href="/community">
                <Button variant="outline" className="w-full">
                  Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

