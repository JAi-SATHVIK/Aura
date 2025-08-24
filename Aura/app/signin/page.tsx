'use client';

import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight, Sparkles, Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SignInSignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const session = useSession();

  if (session.data?.user) {
    router.push('/projects');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setIsLoading(false);

    if (res?.error) {
      setError('Invalid email or password. Please try again.');
    } else {
      toast.success("You've successfully logged in to your EchoMind account.");
      router.push('/projects');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-950 dark:via-neutral-900 dark:to-secondary-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="card p-8 shadow-large">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-2xl">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold gradient-text">
                Welcome to EchoMind
              </h1>
            </div>
            <p className="text-muted-foreground">
              Login or create your account
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-12"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-foreground">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-12 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-error text-sm bg-error/10 border border-error/20 rounded-xl p-3"
              >
                {error}
              </motion.p>
            )}
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-accent/50 rounded-xl p-4">
              <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
              <p>Demo: Email: demo@example.com, Password: 123456</p>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-3 group"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8">
            <button
              onClick={() => signIn('google')}
              className="w-full bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 hover:from-neutral-200 hover:to-neutral-300 dark:hover:from-neutral-700 dark:hover:to-neutral-600 transition-all duration-300 py-4 rounded-2xl border border-neutral-300 dark:border-neutral-600 text-lg font-semibold flex items-center justify-center gap-3 shadow-soft hover:shadow-medium group"
            >
              <FaGoogle className="text-xl" />
              Continue with Google
            </button>
          </div>
          
          <p className="mt-6 text-sm text-center text-muted-foreground">
            By continuing, you agree to EchoMind&#39;s Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
