
export type Trip = {
  id: string;
  name: string;
  location: string;
  duration: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Difficult' | 'Very Difficult';
  maxGroupSize: number;
  price: number;
  image: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    accommodation: string;
    meals: string[];
    elevation?: {
      ascent?: number;
      descent?: number;
      maxAltitude?: number;
    };
  }[];
  startDates: string[];
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'admin';
};

export const trips: Trip[] = [
  {
    id: "everest-base-camp",
    name: "Everest Base Camp Trek",
    location: "Khumbu, Nepal",
    duration: 14,
    difficulty: "Challenging",
    maxGroupSize: 12,
    price: 1499,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    shortDescription: "Trek to the base of the world's highest mountain through stunning Sherpa villages and dramatic Himalayan landscapes.",
    description: "The Everest Base Camp trek is one of the most famous and sought-after trekking adventures in the world. This iconic journey takes you through the legendary Khumbu Valley, home to the Sherpa people, ancient monasteries, and of course, the mighty Mount Everest (8,848m). Starting with a thrilling flight to Lukla, you'll trek through charming Sherpa villages, cross suspension bridges over roaring rivers, and gradually ascend through diverse landscapes and rhododendron forests. Along the way, you'll acclimate in the bustling town of Namche Bazaar, visit the historic Tengboche Monastery, and witness breathtaking panoramas of Everest, Lhotse, Nuptse, and Ama Dablam. The trek culminates at Everest Base Camp (5,364m) and Kala Patthar (5,545m), offering unobstructed views of Everest's summit. This adventure is not just about reaching Base Camp but experiencing the rich Sherpa culture, Buddhist traditions, and the warm hospitality of the mountain people.",
    highlights: [
      "Stand at the base of Mount Everest, the world's highest peak",
      "Experience authentic Sherpa culture and visit ancient monasteries",
      "Panoramic views of the Himalayan range including Everest, Lhotse, and Ama Dablam",
      "Trek through the famous Khumbu Valley and Sagarmatha National Park",
      "Ascend Kala Patthar for the best sunrise views of Mount Everest"
    ],
    included: [
      "Airport transfers in Kathmandu",
      "Domestic flights (Kathmandu-Lukla-Kathmandu)",
      "Teahouse accommodation during the trek",
      "All meals during the trek (breakfast, lunch, and dinner)",
      "Experienced English-speaking guide and porters",
      "Sagarmatha National Park entry permit and TIMS card",
      "First aid medical kit and oximeter for altitude monitoring",
      "All government and local taxes"
    ],
    notIncluded: [
      "International airfare to/from Kathmandu",
      "Travel insurance (mandatory, covering emergency evacuation)",
      "Personal trekking gear and equipment",
      "Meals in Kathmandu",
      "Extra expenses due to flight cancellations or delays (weather conditions)",
      "Tips for guides and porters"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kathmandu (1,400m)",
        description: "Upon arrival at Tribhuvan International Airport, our representative will greet you and transfer you to your hotel. Evening welcome dinner and trek briefing.",
        accommodation: "Hotel in Kathmandu",
        meals: ["Dinner"]
      },
      {
        day: 2,
        title: "Fly to Lukla (2,840m) and trek to Phakding (2,610m)",
        description: "Early morning flight to Lukla's Tenzing-Hillary Airport. Begin trek through Dudh Koshi Valley to Phakding.",
        accommodation: "Teahouse in Phakding",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 230
        }
      },
      {
        day: 3,
        title: "Trek to Namche Bazaar (3,440m)",
        description: "Cross suspension bridges over the Dudh Koshi River. Steep ascent to Namche, the gateway to Everest and main trading center of the Khumbu region.",
        accommodation: "Teahouse in Namche Bazaar",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 830
        }
      },
      {
        day: 4,
        title: "Acclimatization day in Namche Bazaar",
        description: "Rest day for acclimatization. Optional hike to Everest View Hotel for first glimpses of Everest. Visit the Sherpa Culture Museum and local market.",
        accommodation: "Teahouse in Namche Bazaar",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 5,
        title: "Trek to Tengboche (3,860m)",
        description: "Trek through rhododendron forests with views of Everest, Lhotse, and Ama Dablam. Visit Tengboche Monastery, the largest in the Khumbu region.",
        accommodation: "Teahouse in Tengboche",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 420
        }
      },
      {
        day: 6,
        title: "Trek to Dingboche (4,410m)",
        description: "Descend to Imja Khola and climb to Pangboche village. Continue to Dingboche in the Imja Valley.",
        accommodation: "Teahouse in Dingboche",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 550
        }
      },
      {
        day: 7,
        title: "Acclimatization day in Dingboche",
        description: "Second acclimatization day. Optional hike to Nangkartshang Peak (5,083m) for views of Makalu, Island Peak, and the Amphu Lapcha pass.",
        accommodation: "Teahouse in Dingboche",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 8,
        title: "Trek to Lobuche (4,940m)",
        description: "Trek through alpine meadows and summer yak pastures. Pass the Thukla Pass with its memorials to fallen climbers.",
        accommodation: "Teahouse in Lobuche",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 530
        }
      },
      {
        day: 9,
        title: "Trek to Gorak Shep (5,170m) and Everest Base Camp (5,364m)",
        description: "Morning trek to Gorak Shep. Continue to Everest Base Camp over rocky terrain and the Khumbu Glacier. Return to Gorak Shep for overnight.",
        accommodation: "Teahouse in Gorak Shep",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 424,
          maxAltitude: 5364
        }
      },
      {
        day: 10,
        title: "Hike to Kala Patthar (5,545m) and trek to Pheriche (4,280m)",
        description: "Pre-dawn hike to Kala Patthar for sunrise over Everest. Descend to Pheriche for overnight.",
        accommodation: "Teahouse in Pheriche",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 375,
          descent: 1265,
          maxAltitude: 5545
        }
      },
      {
        day: 11,
        title: "Trek to Namche Bazaar (3,440m)",
        description: "Descend through rhododendron and pine forests back to Namche Bazaar.",
        accommodation: "Teahouse in Namche Bazaar",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 840
        }
      },
      {
        day: 12,
        title: "Trek to Lukla (2,840m)",
        description: "Final day of trekking. Return to Lukla through familiar terrain.",
        accommodation: "Teahouse in Lukla",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 600
        }
      },
      {
        day: 13,
        title: "Fly to Kathmandu",
        description: "Morning flight back to Kathmandu. Free afternoon for shopping or sightseeing. Farewell dinner in the evening.",
        accommodation: "Hotel in Kathmandu",
        meals: ["Breakfast", "Dinner"]
      },
      {
        day: 14,
        title: "Departure",
        description: "Transfer to airport for final departure.",
        accommodation: "None",
        meals: ["Breakfast"]
      }
    ],
    startDates: [
      "2024-03-15",
      "2024-04-01",
      "2024-04-15",
      "2024-05-01",
      "2024-09-15",
      "2024-10-01",
      "2024-10-15",
      "2024-11-01"
    ],
    reviews: [
      {
        user: "Sarah Johnson",
        rating: 5,
        comment: "An absolutely life-changing experience! The views were breathtaking, and our guide Pemba was incredibly knowledgeable and supportive throughout the trek.",
        date: "2023-11-15"
      },
      {
        user: "Michael Chen",
        rating: 4,
        comment: "Challenging but rewarding trek. The teahouses were better than expected, and the Sherpa culture was fascinating to experience.",
        date: "2023-10-22"
      }
    ]
  },
  // Add more trips here...
];
