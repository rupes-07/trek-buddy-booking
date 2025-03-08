
import { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, Mail, Lock, Eye, EyeOff, 
  Facebook, Github, ArrowRight, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const mode = searchParams.get('mode') || 'login';
  const [activeTab, setActiveTab] = useState(mode === 'register' ? 'register' : 'login');
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  
  useEffect(() => {
    setActiveTab(mode === 'register' ? 'register' : 'login');
  }, [mode]);
  
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to TrekBuddy!",
      });
      navigate('/');
    }, 1500);
  };
  
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Password validation
    if (registerData.password !== registerData.confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }
    
    if (registerData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }
    
    setPasswordError('');
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Registration Successful",
        description: "Your account has been created! Welcome to TrekBuddy.",
      });
      navigate('/');
    }, 1500);
  };
  
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <div className="text-center mb-8">
              <Link to="/" className="inline-block">
                <h1 className="font-merriweather text-2xl font-bold text-nepal-blue">
                  Trek<span className="text-nepal-red">Buddy</span>
                </h1>
              </Link>
              <p className="text-gray-600 mt-2">Your gateway to adventure</p>
            </div>
            
            <Tabs 
              defaultValue={activeTab} 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger 
                  value="login"
                  onClick={() => navigate('/auth')}
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger 
                  value="register"
                  onClick={() => navigate('/auth?mode=register')}
                >
                  Register
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="login-email"
                        name="email"
                        type="email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        placeholder="you@example.com"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <Link to="/forgot-password" className="text-sm text-nepal-blue hover:underline">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="login-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={handleLoginChange}
                        placeholder="••••••••"
                        required
                        className="pl-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-nepal-blue hover:bg-nepal-blue/90"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-2 text-sm text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" type="button" className="w-full">
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </Button>
                    <Button variant="outline" type="button" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Github
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="register-name"
                        name="name"
                        type="text"
                        value={registerData.name}
                        onChange={handleRegisterChange}
                        placeholder="John Doe"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="register-email"
                        name="email"
                        type="email"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                        placeholder="you@example.com"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="register-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={registerData.password}
                        onChange={handleRegisterChange}
                        placeholder="••••••••"
                        required
                        className="pl-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="register-confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        id="register-confirm-password"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                        placeholder="••••••••"
                        required
                        className="pl-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    
                    {passwordError && (
                      <div className="mt-2 flex items-center text-red-600 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {passwordError}
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-nepal-blue hover:bg-nepal-blue/90"
                    disabled={loading}
                  >
                    {loading ? "Creating account..." : "Create Account"}
                  </Button>
                  
                  <div className="text-sm text-center text-gray-500 mt-4">
                    By registering, you agree to our{' '}
                    <Link to="/terms" className="text-nepal-blue hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-nepal-blue hover:underline">
                      Privacy Policy
                    </Link>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-nepal-blue transition-colors"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
