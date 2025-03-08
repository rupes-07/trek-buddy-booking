
import { Link } from 'react-router-dom';
import type { Trip } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Card } from "@/components/ui/card";
import { TripCardImage } from './trip-card/TripCardImage';
import { TripCardHeader } from './trip-card/TripCardHeader';
import { TripCardContent } from './trip-card/TripCardContent';
import { TripCardFooter } from './trip-card/TripCardFooter';

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
        <TripCardImage 
          image={trip.image}
          name={trip.name}
          difficulty={trip.difficulty}
        />
        <TripCardHeader 
          name={trip.name}
          location={trip.location}
        />
        <TripCardContent 
          description={trip.shortDescription}
          duration={trip.duration}
          maxGroupSize={trip.maxGroupSize}
        />
        <TripCardFooter price={trip.price} />
      </Card>
    </Link>
  );
};

export default TripCard;
