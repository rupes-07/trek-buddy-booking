
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Mountain, Users, CheckCircle, XCircle, Bookmark, Star } from 'lucide-react';
import { trips } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const TripDetail = () => {
  const { id } = useParams<{ id: string }>();
  const trip = trips.find(t => t.id === id);

  if (!trip) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Trip not found</h1>
        <p className="mb-8">The trip you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/trips">Browse All Trips</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={trip.image} 
          alt={trip.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="bg-white/90 text-gray-800 mb-4">
              {trip.difficulty}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{trip.name}</h1>
            <div className="flex items-center text-white/90 text-sm md:text-base">
              <Mountain className="h-4 w-4 mr-1" />
              <span className="mr-4">{trip.location}</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{trip.duration} days</span>
              <Users className="h-4 w-4 mr-1" />
              <span>Max {trip.maxGroupSize} people</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Trip Overview</h2>
                  <p className="text-gray-700 mb-8 whitespace-pre-line">{trip.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">Trip Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {trip.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-nepal-blue mr-2 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                      <ul className="space-y-2">
                        {trip.included.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">What's Not Included</h3>
                      <ul className="space-y-2">
                        {trip.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="itinerary">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Trip Itinerary</h2>
                  <div className="space-y-8">
                    {trip.itinerary.map((day, index) => (
                      <div key={index} className="relative pl-8 border-l-2 border-nepal-blue/20">
                        <div className="absolute top-0 left-[-9px] rounded-full bg-nepal-blue text-white w-4 h-4 flex items-center justify-center text-xs" />
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                          <h3 className="font-semibold text-lg mb-2">
                            Day {day.day}: {day.title}
                          </h3>
                          <p className="text-gray-700 mb-4">{day.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold">Accommodation:</span> {day.accommodation}
                            </div>
                            <div>
                              <span className="font-semibold">Meals:</span> {day.meals.join(', ')}
                            </div>
                            {day.elevation && (
                              <div className="col-span-1 md:col-span-2">
                                <span className="font-semibold">Elevation:</span> 
                                {day.elevation.ascent && ` Ascent: ${day.elevation.ascent}m`}
                                {day.elevation.descent && ` Descent: ${day.elevation.descent}m`}
                                {day.elevation.maxAltitude && ` Max: ${day.elevation.maxAltitude}m`}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Traveler Reviews</h2>
                  
                  {trip.reviews.length === 0 ? (
                    <div className="bg-white p-6 rounded-lg text-center">
                      <p>No reviews yet. Be the first to leave a review!</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {trip.reviews.map((review, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-semibold">{review.user}</h4>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star 
                                  key={i}
                                  className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Trip Price</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-nepal-blue">${trip.price}</span>
                  <span className="text-gray-500 ml-2">per person</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Available Dates</h3>
                <div className="grid grid-cols-1 gap-2">
                  {trip.startDates.map((date, index) => {
                    const startDate = new Date(date);
                    const endDate = new Date(startDate);
                    endDate.setDate(endDate.getDate() + trip.duration - 1);
                    
                    return (
                      <div key={index} className="border border-gray-200 rounded p-3 flex items-center justify-between">
                        <div>
                          <div className="font-medium">
                            {startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          <div className="text-sm text-gray-500">
                            {startDate.getFullYear()}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Select
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <Button className="w-full bg-nepal-blue hover:bg-nepal-blue/90">
                  Book Now
                </Button>
                <Button variant="outline" className="w-full">
                  <Bookmark className="mr-2 h-4 w-4" />
                  Save to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
