
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { 
  Users, Tent, Calendar, Settings, LogOut,
  Edit, Trash, Plus, Search, BarChart3, 
  MoreHorizontal, UserCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { trips } from '@/lib/data';

const AdminDashboard = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleDelete = () => {
    toast({
      title: "Action needed",
      description: "This feature will be implemented in the future.",
    });
  };
  
  const handleEdit = () => {
    toast({
      title: "Action needed",
      description: "This feature will be implemented in the future.",
    });
  };
  
  const handleAddNew = () => {
    toast({
      title: "Action needed",
      description: "This feature will be implemented in the future.",
    });
  };
  
  const filteredTrips = trips.filter(trip => 
    trip.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Mock bookings data
  const bookings = [
    { id: 'BK001', customer: 'Sarah Johnson', trip: 'Everest Base Camp Trek', date: '2024-04-15', status: 'Confirmed', amount: 1499 },
    { id: 'BK002', customer: 'Michael Chen', trip: 'Annapurna Circuit', date: '2024-05-01', status: 'Pending', amount: 1299 },
    { id: 'BK003', customer: 'Emma Wilson', trip: 'Langtang Valley Trek', date: '2024-05-10', status: 'Confirmed', amount: 899 },
    { id: 'BK004', customer: 'James Brown', trip: 'Everest Base Camp Trek', date: '2024-04-15', status: 'Cancelled', amount: 1499 },
    { id: 'BK005', customer: 'Lisa Wang', trip: 'Manaslu Circuit', date: '2024-06-01', status: 'Confirmed', amount: 1699 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm hidden md:block">
        <div className="p-6 border-b border-gray-100">
          <h1 className="font-merriweather text-xl font-bold text-nepal-blue">
            Trek<span className="text-nepal-red">Buddy</span>
          </h1>
          <p className="text-xs text-gray-500">Admin Dashboard</p>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                <UserCircle className="h-6 w-6 text-gray-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@trekbuddy.com</p>
              </div>
            </div>
          </div>
          
          <nav className="space-y-1">
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-md bg-nepal-blue/10 text-nepal-blue">
              <BarChart3 className="mr-3 h-5 w-5" />
              Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
              <Tent className="mr-3 h-5 w-5" />
              Trips
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
              <Calendar className="mr-3 h-5 w-5" />
              Bookings
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
              <Users className="mr-3 h-5 w-5" />
              Users
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </a>
          </nav>
        </div>
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-100">
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
        </header>
        
        <main className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Trips', value: trips.length, icon: Tent, color: 'blue' },
              { label: 'Active Bookings', value: 37, icon: Calendar, color: 'green' },
              { label: 'Total Users', value: 156, icon: Users, color: 'purple' },
              { label: 'Revenue', value: '$45,289', icon: BarChart3, color: 'amber' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center">
                  <div className={`bg-${stat.color}-100 p-3 rounded-full`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <Tabs defaultValue="trips" className="w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <TabsList>
                <TabsTrigger value="trips">Trips Management</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-9 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button onClick={handleAddNew} className="bg-nepal-blue hover:bg-nepal-blue/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New
                </Button>
              </div>
            </div>
            
            <TabsContent value="trips">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Trip</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredTrips.length > 0 ? (
                        filteredTrips.map((trip) => (
                          <tr key={trip.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-md object-cover"
                                    src={trip.image}
                                    alt={trip.name}
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{trip.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {trip.location}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {trip.duration} days
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${trip.price}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${trip.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                                  trip.difficulty === 'Moderate' ? 'bg-blue-100 text-blue-800' : 
                                  trip.difficulty === 'Challenging' ? 'bg-yellow-100 text-yellow-800' : 
                                  'bg-red-100 text-red-800'}`}
                              >
                                {trip.difficulty}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm" onClick={handleEdit}>
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={handleDelete}>
                                  <Trash className="h-4 w-4 text-red-500" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                            No trips found matching your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="bookings">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Trip</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {booking.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.customer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {booking.trip}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(booking.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 
                                booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-red-100 text-red-800'}`}
                            >
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${booking.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={handleEdit}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  <span>Edit</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={handleDelete}
                                  className="text-red-600"
                                >
                                  <Trash className="mr-2 h-4 w-4" />
                                  <span>Cancel</span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
