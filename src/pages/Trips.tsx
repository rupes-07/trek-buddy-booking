
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { trips } from '@/lib/data';
import TripCard from '@/components/TripCard';
import { motion } from 'framer-motion';
import { Filter, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Trips = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const regionParam = searchParams.get('region');
  
  const [difficulty, setDifficulty] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  
  const filteredTrips = trips.filter(trip => {
    // Filter by region if specified
    if (regionParam && !trip.location.toLowerCase().includes(regionParam.toLowerCase())) {
      return false;
    }
    
    // Filter by difficulty if selected
    if (difficulty && trip.difficulty !== difficulty) {
      return false;
    }
    
    // Filter by duration if selected
    if (duration) {
      const durationNumber = parseInt(duration);
      if (durationNumber === 7 && trip.duration > 7) return false;
      if (durationNumber === 14 && (trip.duration <= 7 || trip.duration > 14)) return false;
      if (durationNumber === 21 && trip.duration <= 14) return false;
    }
    
    return true;
  });

  const resetFilters = () => {
    setDifficulty('');
    setDuration('');
    setSearchParams(regionParam ? { region: regionParam } : {});
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-20">
      <div className="bg-nepal-blue/10 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {regionParam 
                ? `${regionParam.charAt(0).toUpperCase() + regionParam.slice(1)} Region Treks` 
                : 'Explore All Adventures'}
            </h1>
            {regionParam && (
              <div className="flex items-center justify-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{regionParam.charAt(0).toUpperCase() + regionParam.slice(1)} Region, Nepal</span>
              </div>
            )}
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover breathtaking treks through the Himalayas, immerse yourself in ancient 
              cultures, and create memories that will last a lifetime.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter className="mr-2 h-5 w-5 text-nepal-blue" />
              <h2 className="font-semibold">Filter Treks</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto">
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Difficulties</SelectItem>
                  <SelectItem value="Easy">Easy</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Challenging">Challenging</SelectItem>
                  <SelectItem value="Difficult">Difficult</SelectItem>
                  <SelectItem value="Very Difficult">Very Difficult</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Duration</SelectItem>
                  <SelectItem value="7">Up to 7 days</SelectItem>
                  <SelectItem value="14">8-14 days</SelectItem>
                  <SelectItem value="21">15+ days</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                onClick={resetFilters}
                className="w-full sm:w-auto"
              >
                Reset Filters
              </Button>
            </div>
          </div>
        </div>

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
            <h3 className="text-xl font-semibold mb-2">No treks found</h3>
            <p className="text-gray-600">
              No treks match your current filters. Try adjusting your filter criteria.
            </p>
            <Button 
              variant="default" 
              onClick={resetFilters}
              className="mt-4"
            >
              Reset All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trips;
