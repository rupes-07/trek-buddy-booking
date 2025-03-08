
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Mountain, Users } from 'lucide-react';
import type { Trip } from '@/lib/data';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TripCardProps {
  trip: Trip;
  className?: string;
}

const TripCard = ({ trip, className }: TripCardProps) => {
  return (
    <Link to={`/trips/${trip.id}`}>
      <Card 
        className={cn(
          "group overflow-hidden transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={trip.image}
            alt={trip.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 z-20">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {trip.difficulty}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-nepal-blue transition-colors">
            {trip.name}
          </CardTitle>
          <CardDescription className="flex items-center text-sm text-gray-500">
            <Mountain className="h-4 w-4 mr-1" />
            {trip.location}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {trip.shortDescription}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {trip.duration} days
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Max {trip.maxGroupSize}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <div className="text-nepal-blue font-semibold">
            ${trip.price}
            <span className="text-sm text-gray-500 ml-1">per person</span>
          </div>
          <Badge variant="outline" className="group-hover:bg-nepal-blue group-hover:text-white transition-colors">
            View Details
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};
const TripCard = ({ trip, className }: TripCardProps) => {
  return (
    <Link to={`/trips/${trip.id}`}>
      <Card 
        className={cn(
          "group overflow-hidden transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={trip.image}
            alt={trip.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 z-20">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {trip.difficulty}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-nepal-blue transition-colors">
            {trip.name}
          </CardTitle>
          <CardDescription className="flex items-center text-sm text-gray-500">
            <Mountain className="h-4 w-4 mr-1" />
            {trip.location}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {trip.shortDescription}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {trip.duration} days
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Max {trip.maxGroupSize}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <div className="text-nepal-blue font-semibold">
            ${trip.price}
            <span className="text-sm text-gray-500 ml-1">per person</span>
          </div>
          <Badge variant="outline" className="group-hover:bg-nepal-blue group-hover:text-white transition-colors">
            View Details
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};
const TripCard = ({ trip, className }: TripCardProps) => {
  return (
    <Link to={`/trips/${trip.id}`}>
      <Card 
        className={cn(
          "group overflow-hidden transition-all duration-300 hover:shadow-lg",
          className
        )}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={trip.image}
            alt={trip.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 z-20">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {trip.difficulty}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-nepal-blue transition-colors">
            {trip.name}
          </CardTitle>
          <CardDescription className="flex items-center text-sm text-gray-500">
            <Mountain className="h-4 w-4 mr-1" />
            {trip.location}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {trip.shortDescription}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {trip.duration} days
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Max {trip.maxGroupSize}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <div className="text-nepal-blue font-semibold">
            ${trip.price}
            <span className="text-sm text-gray-500 ml-1">per person</span>
          </div>
          <Badge variant="outline" className="group-hover:bg-nepal-blue group-hover:text-white transition-colors">
            View Details
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default TripCard;
