
import { Mountain } from 'lucide-react';
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface TripCardHeaderProps {
  name: string;
  location: string;
}

export function TripCardHeader({ name, location }: TripCardHeaderProps) {
  return (
    <CardHeader>
      <CardTitle className="text-xl group-hover:text-nepal-blue transition-colors">
        {name}
      </CardTitle>
      <CardDescription className="flex items-center text-sm text-gray-500">
        <Mountain className="h-4 w-4 mr-1" />
        {location}
      </CardDescription>
    </CardHeader>
  );
}
