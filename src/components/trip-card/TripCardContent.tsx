
import { Calendar, Users } from 'lucide-react';
import { CardContent } from "@/components/ui/card";

interface TripCardContentProps {
  description: string;
  duration: number;
  maxGroupSize: number;
}

export function TripCardContent({ description, duration, maxGroupSize }: TripCardContentProps) {
  return (
    <CardContent>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {duration} days
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          Max {maxGroupSize}
        </div>
      </div>
    </CardContent>
  );
}
