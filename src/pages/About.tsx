
import { motion } from 'framer-motion';
import { CheckCircle, Award, Compass, Users, Heart, Mountain } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1553522151-e1ff85b7dd5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Nepalese mountain landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div 
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About TrekBuddy</h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Your trusted partner for unforgettable Himalayan adventures since 2010
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <motion.div 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
          >
            <span className="text-nepal-blue font-semibold text-sm tracking-wider uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Passionate About Nepal's Beauty</h2>
            <Separator className="max-w-md mx-auto my-4" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <p className="text-gray-700 mb-6">
                Founded in 2010 by a team of experienced trekking guides and mountain enthusiasts, TrekBuddy was born from a deep passion for Nepal's breathtaking landscapes and rich cultural heritage.
              </p>
              <p className="text-gray-700 mb-6">
                What began as a small operation with just three guides and a commitment to authentic experiences has grown into one of Nepal's most respected trekking companies, while maintaining our core values of sustainability, cultural respect, and unparalleled service.
              </p>
              <p className="text-gray-700">
                Today, we're proud to have helped thousands of travelers from around the world experience the magic of the Himalayas, creating memories that last a lifetime while contributing positively to local communities and preserving the natural environments we cherish.
              </p>
            </motion.div>
            <motion.div 
              className="relative h-[400px] rounded-lg overflow-hidden"
              variants={fadeIn}
            >
              <img 
                src="https://images.unsplash.com/photo-1571109613330-a7fd666450e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                alt="TrekBuddy team in the mountains" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          className="mb-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
          >
            <span className="text-nepal-blue font-semibold text-sm tracking-wider uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Guides Us</h2>
            <Separator className="max-w-md mx-auto my-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              variants={fadeIn}
            >
              <div className="bg-nepal-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="text-nepal-blue h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Passion for Adventure</h3>
              <p className="text-gray-700">
                We're driven by our love for the mountains and our desire to share Nepal's natural wonders with travelers from around the world.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              variants={fadeIn}
            >
              <div className="bg-nepal-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="text-nepal-blue h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-700">
                We believe in fair employment practices and supporting local communities through responsible tourism and sustainable development initiatives.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              variants={fadeIn}
            >
              <div className="bg-nepal-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Compass className="text-nepal-blue h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Environmental Stewardship</h3>
              <p className="text-gray-700">
                We're committed to preserving Nepal's pristine environments through sustainable trekking practices and environmental education.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
          >
            <span className="text-nepal-blue font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">The TrekBuddy Difference</h2>
            <Separator className="max-w-md mx-auto my-4" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            <motion.div 
              className="flex items-start gap-4"
              variants={fadeIn}
            >
              <div className="bg-nepal-blue/10 p-2 rounded-full flex-shrink-0 mt-1">
                <CheckCircle className="text-nepal-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Local Guides</h3>
                <p className="text-gray-700">
                  Our guides are certified professionals with years of experience, extensive knowledge of the regions, and a passion for sharing Nepal's culture and landscapes.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              variants={fadeIn}
            >
              <div className="bg-nepal-blue/10 p-2 rounded-full flex-shrink-0 mt-1">
                <CheckCircle className="text-nepal-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Safety Prioritized</h3>
                <p className="text-gray-700">
                  Your wellbeing is our top concern. We maintain the highest safety standards, including comprehensive emergency protocols and equipment for all treks.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              variants={fadeIn}
            >
              <div className="bg-nepal-blue/10 p-2 rounded-full flex-shrink-0 mt-1">
                <CheckCircle className="text-nepal-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Experiences</h3>
                <p className="text-gray-700">
                  We tailor our treks to your preferences, fitness level, and travel style, ensuring a personalized adventure that exceeds your expectations.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start gap-4"
              variants={fadeIn}
            >
              <div className="bg-nepal-blue/10 p-2 rounded-full flex-shrink-0 mt-1">
                <CheckCircle className="text-nepal-blue h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Authentic Connections</h3>
                <p className="text-gray-700">
                  We facilitate genuine cultural exchanges with local communities, providing insights into traditional ways of life rarely experienced by typical tourists.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-nepal-blue font-semibold text-sm tracking-wider uppercase">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet Our Expert Guides</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our dedicated team of experienced guides are the heart of TrekBuddy, bringing unparalleled knowledge, 
              passion, and care to every trek.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Pemba Sherpa",
                role: "Head Guide & Co-founder",
                image: "https://images.unsplash.com/photo-1530234751501-31394859ac52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
                bio: "With over 20 years of trekking experience and 50+ Everest Base Camp treks."
              },
              {
                name: "Lakpa Tashi",
                role: "Senior Guide",
                image: "https://images.unsplash.com/photo-1542458632-ca4e4a87fbab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2046&q=80",
                bio: "Annapurna Circuit specialist with deep knowledge of local flora and fauna."
              },
              {
                name: "Maya Gurung",
                role: "Guide & Cultural Expert",
                image: "https://images.unsplash.com/photo-1629101569876-d372f348dd34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                bio: "Specializes in cultural treks and fostering meaningful community connections."
              },
              {
                name: "Tenzing Dorjee",
                role: "Guide & Safety Officer",
                image: "https://images.unsplash.com/photo-1530093035683-0a2efd0b156c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
                bio: "Certified in wilderness first aid and high-altitude rescue operations."
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-nepal-blue text-sm mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
