import type { Metadata } from "next"
import CommunityActions from "@/components/community-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Community Actions | Carbon Footprint Awareness",
  description: "Learn how communities can work together to reduce carbon footprints",
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Community Climate Action</h1>
          <p className="text-xl text-muted-foreground">
            Discover how communities can work together to create a more sustainable future.
          </p>
        </div>

        <CommunityActions />

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Transition Town Movement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Transition Town movement has helped communities around the world reduce their carbon footprint
                  through local food production, renewable energy projects, and skill-sharing initiatives.
                </p>
                <p>
                  In Totnes, UK, the original Transition Town, community-owned renewable energy projects now generate
                  enough electricity for hundreds of homes, while local food initiatives have significantly reduced food
                  miles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Copenhagen's Bicycle Revolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Copenhagen has transformed into one of the world's most bicycle-friendly cities, with over 62% of
                  residents commuting by bike daily. This has reduced the city's carbon emissions by thousands of tons
                  annually.
                </p>
                <p>
                  The city achieved this through dedicated infrastructure, policy changes, and cultural shifts that
                  prioritized cycling over car travel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Solar Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  In the United States, community solar projects allow residents to share the benefits of solar power
                  even if they can't install panels on their own homes.
                </p>
                <p>
                  These projects have enabled thousands of households to access clean energy while creating local jobs
                  and reducing carbon emissions by millions of tons.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Zero Waste Communities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Cities like San Francisco and Ljubljana have implemented comprehensive zero waste strategies,
                  diverting over 80% of waste from landfills.
                </p>
                <p>
                  Through composting programs, recycling initiatives, and policies to reduce single-use items, these
                  communities have significantly reduced methane emissions from landfills.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-muted/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Community Events</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Tree Planting Day
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Central Park</span>
                </div>
                <p className="mb-4">
                  Join us for a community tree planting event. We'll be planting native species that help absorb carbon
                  and provide habitat for local wildlife.
                </p>
                <Button variant="outline" className="w-full">
                  Register
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Repair Café
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Community Center</span>
                </div>
                <p className="mb-4">
                  Bring your broken items and learn how to fix them with help from skilled volunteers. Extend the life
                  of your possessions and reduce waste.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Climate Action Workshop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Public Library</span>
                </div>
                <p className="mb-4">
                  Learn how to advocate for climate policies in your community. This workshop will provide tools and
                  strategies for effective local action.
                </p>
                <Button variant="outline" className="w-full">
                  Sign Up
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Start Your Own Initiative</h2>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">1. Identify Local Needs</h3>
                  <p>
                    Start by assessing what environmental issues are most pressing in your community. Talk to neighbors,
                    conduct surveys, or research local environmental data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">2. Build a Team</h3>
                  <p>
                    Find like-minded individuals who share your passion. Reach out through social media, community
                    boards, or local environmental groups.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">3. Create an Action Plan</h3>
                  <p>
                    Develop clear, achievable goals and a timeline for your initiative. Start small with projects that
                    can show quick results to build momentum.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">4. Seek Resources</h3>
                  <p>
                    Look for grants, donations, or partnerships with local businesses. Many organizations offer funding
                    for community environmental projects.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">5. Measure and Share Results</h3>
                  <p>
                    Track the impact of your initiative and share successes with the community. This helps build support
                    and encourages others to join.
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="w-full">Download Community Action Toolkit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}

