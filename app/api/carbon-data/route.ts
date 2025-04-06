import { NextResponse } from "next/server"

// Simulated database data
const carbonData = {
  activities: [
    {
      id: 1,
      category: "Transportation",
      items: [
        "Cars, bikes, and planes burn fuel, releasing gases.",
        "Delivery trucks (from online shopping) pollute heavily.",
      ],
    },
    {
      id: 2,
      category: "Home Energy",
      items: [
        "Lights, fans, ACs, and heaters use electricity (often made from coal).",
        "Long showers and gas stoves waste energy.",
      ],
    },
    {
      id: 3,
      category: "Food Choices",
      items: [
        "Meat (especially beef) and dairy produce methane (a powerful gas).",
        "Processed snacks and food waste rot in landfills, releasing more gases.",
      ],
    },
    {
      id: 4,
      category: "Shopping Habits",
      items: [
        "New clothes, gadgets, and plastic bags require energy to make and transport.",
        "Factories (making phones, clothes, etc.) burn coal and oil.",
      ],
    },
    {
      id: 5,
      category: "Waste",
      items: ["Burning trash releases toxic smoke.", "Plastic bottles and packaging take energy to recycle."],
    },
  ],
  reductionTips: {
    home: [
      "Turn off lights/fans when not needed. Use sunlight or LED bulbs.",
      "Take shorter showers. Fix leaking taps.",
      "Recycle paper, metal, and glass.",
    ],
    transportation: ["Walk, bike, or share rides for short trips.", "Use buses/trains instead of driving alone."],
    food: ["Eat more local veggies and less meat.", "Finish meals. Compost food scraps."],
    shopping: ["Buy only what you need. Repair old clothes and gadgets.", "Use cloth bags, avoid plastic."],
  },
  myths: [
    {
      myth: "Only rich countries pollute.",
      fact: "Everyone contributes, but everyone can help fix it!",
    },
    {
      myth: "My actions don't matter.",
      fact: "Small steps add up. Inspire others!",
    },
  ],
  communityActions: [
    "Plant trees (they absorb carbon dioxide!).",
    "Start repair shops to fix items instead of trashing them.",
    "Teach kids to protect nature.",
  ],
}

export async function GET() {
  // Simulate a delay to mimic a real API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return NextResponse.json(carbonData)
}

