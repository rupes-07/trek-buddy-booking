
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
    location: "Everest, Nepal",
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
  {
    id: "annapurna-circuit",
    name: "Annapurna Circuit Trek",
    location: "Annapurna, Nepal",
    duration: 18,
    difficulty: "Moderate",
    maxGroupSize: 12,
    price: 1699,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    shortDescription: "Experience diverse landscapes, cross the challenging Thorong La Pass, and immerse yourself in local culture on this iconic long-distance trek.",
    description: "The Annapurna Circuit is widely regarded as one of the most diverse and spectacular treks in the world. This legendary journey takes you through an incredible variety of landscapes, from subtropical forests and terraced farmlands to high alpine environments and the arid Tibetan plateau of the Manang Valley. The highlight of the trek is crossing the challenging Thorong La Pass (5,416m), where you'll be rewarded with breathtaking panoramic views of the Annapurna and Dhaulagiri mountain ranges. Throughout your journey, you'll pass through traditional villages of different ethnic groups including Gurung, Manangi, and Thakali communities, offering rich cultural experiences and insights into rural Nepalese life. The trek also includes a visit to sacred Muktinath Temple, an important pilgrimage site for both Hindus and Buddhists. With dramatic changes in scenery each day and the stunning backdrop of some of the world's highest mountains, the Annapurna Circuit offers an unparalleled trekking experience.",
    highlights: [
      "Cross the challenging Thorong La Pass (5,416m)",
      "Experience incredible diversity of landscapes and climate zones",
      "Visit the sacred Muktinath Temple, a major pilgrimage site",
      "Witness spectacular views of Annapurna, Dhaulagiri, and Machhapuchhre",
      "Experience the distinct cultures and traditions of various ethnic communities"
    ],
    included: [
      "Airport transfers in Kathmandu",
      "All transportation during the trek",
      "Teahouse accommodation during the trek",
      "All meals during the trek (breakfast, lunch, and dinner)",
      "Experienced English-speaking guide and porters",
      "Annapurna Conservation Area Permit and TIMS card",
      "First aid medical kit",
      "All government and local taxes"
    ],
    notIncluded: [
      "International airfare to/from Kathmandu",
      "Travel insurance (mandatory, covering emergency evacuation)",
      "Personal trekking gear and equipment",
      "Meals in Kathmandu",
      "Extra expenses due to transportation delays (weather conditions)",
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
        title: "Drive to Besisahar (760m) and trek to Khudi (790m)",
        description: "Drive to Besisahar, then begin trek along the Marshyangdi River to Khudi village.",
        accommodation: "Teahouse in Khudi",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 3,
        title: "Trek to Bahundanda (1,310m)",
        description: "Gradually ascend through villages and terraced fields with views of Manaslu.",
        accommodation: "Teahouse in Bahundanda",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 520
        }
      },
      {
        day: 4,
        title: "Trek to Chamje (1,410m)",
        description: "Cross the Marshyangdi on a suspension bridge and continue through forests to Chamje.",
        accommodation: "Teahouse in Chamje",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 100
        }
      },
      {
        day: 5,
        title: "Trek to Dharapani (1,960m)",
        description: "Ascend through forests alongside the river with views of waterfalls. Enter the Manang district.",
        accommodation: "Teahouse in Dharapani",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 550
        }
      },
      {
        day: 6,
        title: "Trek to Chame (2,710m)",
        description: "Follow the river through alpine landscapes with views of Annapurna II and Manaslu.",
        accommodation: "Teahouse in Chame",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 750
        }
      },
      {
        day: 7,
        title: "Trek to Upper Pisang (3,300m)",
        description: "Walk through pine forests and apple orchards. Experience magnificent views of the Annapurna range.",
        accommodation: "Teahouse in Upper Pisang",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 590
        }
      },
      {
        day: 8,
        title: "Trek to Manang (3,540m)",
        description: "Take the high route via Ghyaru and Ngawal for spectacular mountain views, then descend to Manang.",
        accommodation: "Teahouse in Manang",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 240
        }
      },
      {
        day: 9,
        title: "Acclimatization day in Manang",
        description: "Rest day for acclimatization. Optional hike to Ice Lake or Gangapurna Lake for better adaptation.",
        accommodation: "Teahouse in Manang",
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 10,
        title: "Trek to Yak Kharka (4,110m)",
        description: "Gradual ascent to higher elevation. Pass through juniper and scrub forests with views of Annapurna III and Gangapurna.",
        accommodation: "Teahouse in Yak Kharka",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 570
        }
      },
      {
        day: 11,
        title: "Trek to Thorong Phedi (4,600m)",
        description: "Short but steep climb to the foot of Thorong La Pass. Important for final acclimatization.",
        accommodation: "Teahouse in Thorong Phedi",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 490
        }
      },
      {
        day: 12,
        title: "Cross Thorong La Pass (5,416m) and trek to Muktinath (3,800m)",
        description: "Early morning start for the challenging pass crossing. Descend to sacred Muktinath temple.",
        accommodation: "Teahouse in Muktinath",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 816,
          descent: 1616,
          maxAltitude: 5416
        }
      },
      {
        day: 13,
        title: "Trek to Marpha (2,670m)",
        description: "Descend to the Kali Gandaki valley, the world's deepest gorge. Visit the medieval village of Kagbeni and continue to Jomsom, then to Marpha.",
        accommodation: "Teahouse in Marpha",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 1130
        }
      },
      {
        day: 14,
        title: "Trek to Kalopani (2,530m)",
        description: "Follow the Kali Gandaki River with views of Dhaulagiri and Annapurna I.",
        accommodation: "Teahouse in Kalopani",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 140
        }
      },
      {
        day: 15,
        title: "Trek to Tatopani (1,200m)",
        description: "Descend through rhododendron forests to Tatopani, known for its hot springs.",
        accommodation: "Teahouse in Tatopani",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 1330
        }
      },
      {
        day: 16,
        title: "Trek to Ghorepani (2,880m)",
        description: "Steep climb through villages and forests to Ghorepani, famous for its sunrise views.",
        accommodation: "Teahouse in Ghorepani",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 1680
        }
      },
      {
        day: 17,
        title: "Hike to Poon Hill (3,210m) and trek to Nayapul, drive to Pokhara",
        description: "Early morning hike to Poon Hill for sunrise over the Himalayas. Descend to Nayapul and drive to Pokhara.",
        accommodation: "Hotel in Pokhara",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 330,
          descent: 3210
        }
      },
      {
        day: 18,
        title: "Fly to Kathmandu",
        description: "Morning flight to Kathmandu. Free afternoon for shopping or sightseeing. Farewell dinner in the evening.",
        accommodation: "Hotel in Kathmandu",
        meals: ["Breakfast", "Dinner"]
      }
    ],
    startDates: [
      "2024-03-10",
      "2024-04-05",
      "2024-05-01",
      "2024-09-20",
      "2024-10-10",
      "2024-11-05"
    ],
    reviews: [
      {
        user: "James Wilson",
        rating: 5,
        comment: "The Annapurna Circuit exceeded all my expectations. The diversity of landscapes was incredible, and crossing Thorong La Pass was a true achievement. Our guide Mingma was excellent!",
        date: "2023-11-20"
      },
      {
        user: "Emma Thompson",
        rating: 4,
        comment: "Beautiful trek with amazing mountain views. The teahouses were basic but comfortable. Highly recommend taking the high route for the best views of the Annapurnas.",
        date: "2023-10-15"
      }
    ]
  },
  {
    id: "everest-gokyo-lakes",
    name: "Everest Gokyo Lakes Trek",
    location: "Everest, Nepal",
    duration: 12,
    difficulty: "Challenging",
    maxGroupSize: 10,
    price: 1399,
    image: "https://images.unsplash.com/photo-1516302350523-4c29d47b89e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80",
    shortDescription: "Discover the turquoise Gokyo Lakes and climb Gokyo Ri for some of the best views of Everest and surrounding peaks.",
    description: "The Everest Gokyo Lakes Trek offers a spectacular alternative to the classic Everest Base Camp route, taking you to the stunning turquoise lakes of Gokyo Valley and the panoramic viewpoint of Gokyo Ri (5,357m). This trek begins with the exhilarating flight to Lukla, followed by a journey through picturesque Sherpa villages and rhododendron forests. As you ascend into the Gokyo Valley, you'll witness the dramatic Ngozumpa Glacier, the largest glacier in Nepal, and the series of sacred emerald lakes that give this trek its name. The highlight of this adventure is the challenging climb up Gokyo Ri, which rewards you with one of the most spectacular panoramas in the Himalayas, including four 8,000m peaks: Everest, Lhotse, Makalu, and Cho Oyu. Throughout the journey, you'll experience the rich Sherpa culture and hospitality, visit ancient monasteries, and witness the profound spiritual connection between the local people and their mountain environment. The Gokyo Lakes Trek offers a perfect balance of natural beauty, cultural immersion, and high-altitude adventure without the crowds of the traditional Everest Base Camp route.",
    highlights: [
      "Witness the stunning turquoise Gokyo Lakes, sacred to both Hindus and Buddhists",
      "Climb Gokyo Ri for spectacular panoramic views of four 8,000m peaks",
      "Trek alongside the massive Ngozumpa Glacier, Nepal's longest glacier",
      "Experience authentic Sherpa culture in traditional mountain villages",
      "Enjoy a less crowded alternative to the classic Everest Base Camp route"
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
        title: "Trek to Dole (4,110m)",
        description: "Leave the main Everest trail and head toward Gokyo. Ascend through rhododendron forests with views of Kantega and Thamserku peaks.",
        accommodation: "Teahouse in Dole",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 670
        }
      },
      {
        day: 6,
        title: "Trek to Machhermo (4,470m)",
        description: "Short but steep climb with increasing altitude. Enjoy views of Cho Oyu and surrounding peaks.",
        accommodation: "Teahouse in Machhermo",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 360
        }
      },
      {
        day: 7,
        title: "Trek to Gokyo (4,790m)",
        description: "Climb through the Ngozumpa Glacier moraine to reach the first of the Gokyo Lakes. Continue to Gokyo village by the third lake, Dudh Pokhari.",
        accommodation: "Teahouse in Gokyo",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 320
        }
      },
      {
        day: 8,
        title: "Gokyo Ri (5,357m) and Exploration Day",
        description: "Early morning climb to Gokyo Ri for panoramic views of Everest, Lhotse, Makalu, Cho Oyu, and the Gokyo Lakes. Afternoon explore the lakes and glacier.",
        accommodation: "Teahouse in Gokyo",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 567,
          descent: 567,
          maxAltitude: 5357
        }
      },
      {
        day: 9,
        title: "Trek to Dole (4,110m)",
        description: "Begin descent back down the valley, retracing steps through spectacular mountain scenery.",
        accommodation: "Teahouse in Dole",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 680
        }
      },
      {
        day: 10,
        title: "Trek to Namche Bazaar (3,440m)",
        description: "Continue descent to Namche through forests and Sherpa villages.",
        accommodation: "Teahouse in Namche Bazaar",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 670
        }
      },
      {
        day: 11,
        title: "Trek to Lukla (2,840m)",
        description: "Final day of trekking, descending through Dudh Koshi Valley back to Lukla.",
        accommodation: "Teahouse in Lukla",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 600
        }
      },
      {
        day: 12,
        title: "Fly to Kathmandu",
        description: "Morning flight back to Kathmandu. Free afternoon for shopping or sightseeing. Farewell dinner in the evening.",
        accommodation: "Hotel in Kathmandu",
        meals: ["Breakfast", "Dinner"]
      }
    ],
    startDates: [
      "2024-03-20",
      "2024-04-10",
      "2024-05-05",
      "2024-09-25",
      "2024-10-15",
      "2024-11-05"
    ],
    reviews: [
      {
        user: "David Brown",
        rating: 5,
        comment: "The Gokyo Lakes were incredibly beautiful - such a vibrant turquoise color! The view from Gokyo Ri was even better than I expected, definitely worth the challenging climb.",
        date: "2023-05-12"
      },
      {
        user: "Lisa Garcia",
        rating: 5,
        comment: "I loved that this trek was less crowded than the EBC route. The lakes were spectacular and the accommodation was comfortable. Our guide was very knowledgeable about the area.",
        date: "2023-10-30"
      }
    ]
  },
  {
    id: "annapurna-base-camp",
    name: "Annapurna Base Camp Trek",
    location: "Annapurna, Nepal",
    duration: 11,
    difficulty: "Moderate",
    maxGroupSize: 12,
    price: 1299,
    image: "https://images.unsplash.com/photo-1572452571879-3d67d9964cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    shortDescription: "Journey into the heart of the Annapurna sanctuary, surrounded by a spectacular amphitheater of Himalayan peaks.",
    description: "The Annapurna Base Camp Trek, also known as the Annapurna Sanctuary Trek, is a stunning journey into the heart of the Annapurna range. This trek leads you into a natural amphitheater surrounded by some of the world's most magnificent mountains, including Annapurna I (8,091m), Annapurna South, Machapuchare (Fishtail), and Hiunchuli. Beginning from the lakeside city of Pokhara, the trail winds through charming villages, terraced farmlands, and rhododendron forests that burst into spectacular bloom during spring. As you ascend, the landscape transforms dramatically, opening up to high mountain terrain and the sacred Annapurna Sanctuary. Reaching Annapurna Base Camp at 4,130m, you'll be surrounded by a 360-degree panorama of towering Himalayan peaks, with the first light of dawn illuminating the mountains in a golden glow. The trek offers a perfect balance of cultural immersion through encounters with Gurung and Magar communities, natural beauty in the diverse flora and fauna, and high-altitude adventure. With its more moderate altitude compared to some other Himalayan treks, the Annapurna Base Camp Trek is accessible to reasonably fit trekkers while still offering a profound mountain experience.",
    highlights: [
      "Experience the natural amphitheater of Annapurna Sanctuary surrounded by 360-degree mountain views",
      "Witness stunning sunrise and sunset over Annapurna I, Machapuchare, and other Himalayan giants",
      "Trek through diverse landscapes from lush forests to alpine terrain",
      "Encounter traditional Gurung and Magar villages and culture",
      "Visit natural hot springs to soothe tired muscles during the trek"
    ],
    included: [
      "Airport transfers in Kathmandu and Pokhara",
      "Transportation between Kathmandu and Pokhara",
      "Teahouse accommodation during the trek",
      "All meals during the trek (breakfast, lunch, and dinner)",
      "Experienced English-speaking guide and porters",
      "Annapurna Conservation Area Permit and TIMS card",
      "First aid medical kit",
      "All government and local taxes"
    ],
    notIncluded: [
      "International airfare to/from Kathmandu",
      "Travel insurance (mandatory, covering emergency evacuation)",
      "Personal trekking gear and equipment",
      "Meals in Kathmandu and Pokhara",
      "Extra expenses due to transportation delays (weather conditions)",
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
        title: "Drive or fly to Pokhara (820m)",
        description: "Scenic journey to Pokhara by tourist bus (6-7 hours) or a short flight (25 minutes). Free time to explore Phewa Lake and prepare for the trek.",
        accommodation: "Hotel in Pokhara",
        meals: ["Breakfast"]
      },
      {
        day: 3,
        title: "Drive to Nayapul and trek to Tikhedhunga (1,540m)",
        description: "Drive to Nayapul (1 hour) and begin trekking, following the Modi Khola river to Tikhedhunga village.",
        accommodation: "Teahouse in Tikhedhunga",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 720
        }
      },
      {
        day: 4,
        title: "Trek to Ghorepani (2,880m)",
        description: "Challenging day climbing the famous 'Ulleri steps' and through rhododendron forests to reach Ghorepani.",
        accommodation: "Teahouse in Ghorepani",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 1340
        }
      },
      {
        day: 5,
        title: "Hike to Poon Hill (3,210m) and trek to Tadapani (2,630m)",
        description: "Pre-dawn hike to Poon Hill for sunrise over the Annapurna and Dhaulagiri ranges. Continue trek to Tadapani through beautiful forests.",
        accommodation: "Teahouse in Tadapani",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 330,
          descent: 580
        }
      },
      {
        day: 6,
        title: "Trek to Chhomrong (2,170m)",
        description: "Descend through rhododendron forests to Kimrong Khola, then climb to the Gurung village of Chhomrong.",
        accommodation: "Teahouse in Chhomrong",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 460
        }
      },
      {
        day: 7,
        title: "Trek to Dovan (2,600m)",
        description: "Descend to Chhomrong Khola, then climb through bamboo and rhododendron forests to Dovan.",
        accommodation: "Teahouse in Dovan",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 430
        }
      },
      {
        day: 8,
        title: "Trek to Annapurna Base Camp (4,130m)",
        description: "Ascend through the Modi Khola valley, passing Machhapuchhre Base Camp (3,700m) before reaching Annapurna Base Camp, surrounded by the Annapurna massif.",
        accommodation: "Teahouse in Annapurna Base Camp",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          ascent: 1530,
          maxAltitude: 4130
        }
      },
      {
        day: 9,
        title: "Sunrise at ABC and trek to Bamboo (2,310m)",
        description: "Early morning to enjoy sunrise over the Annapurna range. Trek back down to Bamboo through Machhapuchhre Base Camp and Deurali.",
        accommodation: "Teahouse in Bamboo",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 1820
        }
      },
      {
        day: 10,
        title: "Trek to Jhinu Danda (1,780m) and hot springs",
        description: "Trek back to Chhomrong and descend to Jhinu Danda. Enjoy the natural hot springs near the Modi Khola river.",
        accommodation: "Teahouse in Jhinu Danda",
        meals: ["Breakfast", "Lunch", "Dinner"],
        elevation: {
          descent: 530
        }
      },
      {
        day: 11,
        title: "Trek to Nayapul and drive to Pokhara",
        description: "Final day of trekking to Nayapul. Drive back to Pokhara for well-deserved rest.",
        accommodation: "Hotel in Pokhara",
        meals: ["Breakfast", "Lunch"],
        elevation: {
          descent: 960
        }
      }
    ],
    startDates: [
      "2024-03-05",
      "2024-03-25",
      "2024-04-15",
      "2024-05-10",
      "2024-09-20",
      "2024-10-10",
      "2024-11-01"
    ],
    reviews: [
      {
        user: "Sophie Taylor",
        rating: 5,
        comment: "The Annapurna Sanctuary was magical! Being surrounded by those enormous peaks at Base Camp was humbling. The trek was challenging but absolutely worth it.",
        date: "2023-04-18"
      },
      {
        user: "John Martinez",
        rating: 4,
        comment: "Great trek with beautiful scenery. The hot springs at Jhinu Danda were the perfect way to end the journey. Our guide Ramesh was fantastic and very attentive.",
        date: "2023-10-05"
      }
    ]
  }
];
