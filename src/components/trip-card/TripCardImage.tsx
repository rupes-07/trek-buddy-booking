
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Trip } from '@/lib/data';

interface TripCardImageProps {
  image: string;
  name: string;
  difficulty: string;
}

export function TripCardImage({ image, name, difficulty }: TripCardImageProps) {
  return (
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 z-20">
        <Badge variant="secondary" className="bg-white/90 text-gray-800">
          {difficulty}
        </Badge>
      </div>
    </div>
  );
}
