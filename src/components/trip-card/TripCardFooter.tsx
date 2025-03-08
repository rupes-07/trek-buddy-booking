
import { CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TripCardFooterProps {
  price: number;
}

export function TripCardFooter({ price }: TripCardFooterProps) {
  return (
    <CardFooter className="flex items-center justify-between">
      <div className="text-nepal-blue font-semibold">
        ${price}
        <span className="text-sm text-gray-500 ml-1">per person</span>
      </div>
      <Badge variant="outline" className="group-hover:bg-nepal-blue group-hover:text-white transition-colors">
        View Details
      </Badge>
    </CardFooter>
  );
}
