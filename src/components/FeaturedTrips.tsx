
import { motion } from 'framer-motion';
import { trips } from '@/lib/data';
import TripCard from './TripCard';

const FeaturedTrips = () => {
  // For now, just show the first 3 trips as featured
  const featuredTrips = trips.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-nepal-blue font-semibold text-sm tracking-wider uppercase">
            Popular Adventures
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured Trek Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular trekking adventures in Nepal. From the iconic Everest Base Camp 
            to the stunning Annapurna Circuit, find your perfect mountain journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTrips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TripCard trip={trip} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild variant="default" size="lg">
            <Link to="/trips" className="inline-flex items-center">
              View All Trips
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
