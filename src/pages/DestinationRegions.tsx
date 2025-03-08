
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { trips } from '@/lib/data';
import { MapPin, ArrowLeft, Mountain } from 'lucide-react';
import TripCard from '@/components/TripCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const regionImages = {
  everest: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  annapurna: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  langtang: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
};

const regionDescriptions = {
  everest: "The Everest region, also known as the Khumbu, is home to the world's highest peak, Mount Everest (8,848m). This iconic area offers breathtaking Himalayan vistas, rich Sherpa culture, ancient monasteries, and some of the most challenging yet rewarding trekking routes in the world.",
  annapurna: "The Annapurna region is Nepal's most popular trekking destination, featuring diverse landscapes from lush subtropical forests to arid high-altitude deserts. Home to Annapurna I (8,091m), the area offers spectacular mountain views, charming villages, and encounters with diverse ethnic communities.",
  langtang: "The Langtang Valley, often called 'the valley of glaciers,' offers pristine mountain scenery, rich cultural heritage, and relatively fewer trekkers. Located close to Kathmandu, this region combines alpine grandeur with unique Tamang and Tibetan-influenced culture."
};

const DestinationRegions = () => {
  const [searchParams] = useSearchParams();
  const regionParam = searchParams.get('region') || 'all';
  const [filteredTrips, setFilteredTrips] = useState(trips);
  
  useEffect(() => {
    if (regionParam === 'all') {
      setFilteredTrips(trips);
    } else {
      setFilteredTrips(trips.filter(trip => 
        trip.location.toLowerCase().includes(regionParam.toLowerCase())
      ));
    }
  }, [regionParam]);

  // Get the region display name
  const getRegionName = () => {
    if (regionParam === 'all') return 'All Destinations';
    return regionParam.charAt(0).toUpperCase() + regionParam.slice(1) + ' Region';
  };

  // Get the appropriate region image
  const getRegionImage = () => {
    if (regionParam === 'all') return trips[0].image;
    return regionImages[regionParam as keyof typeof regionImages] || trips[0].image;
  };

  // Get the region description
  const getRegionDescription = () => {
    if (regionParam === 'all') return "Discover the majestic landscapes and rich cultural heritage of Nepal through our diverse trekking packages. From the iconic Everest Base Camp to the stunning Annapurna Circuit and the serene Langtang Valley, we offer adventures for all experience levels.";
    return regionDescriptions[regionParam as keyof typeof regionDescriptions] || "";
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-20">
      {/* Region Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10" />
        <img 
          src={getRegionImage()} 
          alt={getRegionName()} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/trips" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to All Trips
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {getRegionName()}
            </h1>
            <div className="flex items-center text-white/90 text-sm md:text-base mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Nepal</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Region Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Mountain className="h-5 w-5 text-nepal-blue" />
              <h2 className="text-xl font-semibold">Region Overview</h2>
            </div>
            <p className="text-gray-700 mb-6">{getRegionDescription()}</p>
            
            {/* Navigation to other regions */}
            <div className="flex flex-wrap gap-3">
              <Link to="/trips">
                <Button 
                  variant={regionParam === 'all' ? "default" : "outline"} 
                  size="sm"
                >
                  All Destinations
                </Button>
              </Link>
              <Link to="/trips?region=everest">
                <Button 
                  variant={regionParam === 'everest' ? "default" : "outline"} 
                  size="sm"
                >
                  Everest Region
                </Button>
              </Link>
              <Link to="/trips?region=annapurna">
                <Button 
                  variant={regionParam === 'annapurna' ? "default" : "outline"} 
                  size="sm"
                >
                  Annapurna Region
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        {/* Trips List */}
        <h2 className="text-2xl font-bold mb-8 text-center">
          Available Treks in {getRegionName()}
        </h2>

        {filteredTrips.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TripCard trip={trip} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No treks found in this region</h3>
            <p className="text-gray-600 mb-8">
              We couldn't find any treks in the {regionParam} region. Please try another region or check back later.
            </p>
            <Link to="/trips">
              <Button variant="default">
                View All Trips
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationRegions;
