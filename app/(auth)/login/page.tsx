"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/_shared/context/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { loginWithGoogle, loginWithEmail, registerWithEmail, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/orders');
    }
  }, [isAuthenticated, router]);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');
    const result = await loginWithGoogle();
    if (!result.success) {
      setError(result.error || 'Failed to sign in with Google');
    }
    setIsLoading(false);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    
    setIsLoading(true);
    setError('');
    
    let result;
    if (mode === 'signup') {
      result = await registerWithEmail(email, password);
      if (result.success) {
        setError('Account created! Please check your email for verification.');
        setMode('signin');
        setIsLoading(false);
        return;
      }
    } else {
      result = await loginWithEmail(email, password);
    }
    
    if (!result.success) {
      setError(result.error || 'Failed to sign in');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl text-neutral-600 font-light tracking-wide">
                SUIDHAGA
              </h1>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-1">
                {mode === 'signin' ? 'Sign in' : 'Create account'}
              </h2>
              <p className="text-sm text-neutral-500">
                {mode === 'signin' 
                  ? "Choose how you'd like to sign in" 
                  : 'Enter your details to create an account'}
              </p>
            </div>

            {error && (
              <div className={`mb-4 p-3 rounded-md text-sm ${
                error.includes('created') || error.includes('verification')
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {error}
              </div>
            )}

            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full bg-[#5C5CFF] hover:bg-[#4a4aee] text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center gap-2 mb-6 disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
              </svg>
              {isLoading ? 'Signing in...' : 'Sign in with Google'}
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-neutral-200"></div>
              <span className="text-sm text-neutral-400">or</span>
              <div className="flex-1 h-px bg-neutral-200"></div>
            </div>

            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-neutral-700 placeholder-neutral-400"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-neutral-700 placeholder-neutral-400"
                  required
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={!email.trim() || !password.trim() || isLoading}
                className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  email.trim() && password.trim() && !isLoading
                    ? 'bg-[#0066FF] hover:bg-[#0052cc] text-white'
                    : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                }`}
              >
                {isLoading ? 'Please wait...' : (mode === 'signin' ? 'Sign in' : 'Create account')}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setMode(mode === 'signin' ? 'signup' : 'signin');
                  setError('');
                }}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                {mode === 'signin' 
                  ? "Don't have an account? Sign up" 
                  : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 py-6">
        <Link href="/privacy" className="text-sm text-blue-600 hover:underline">
          Privacy policy
        </Link>
        <Link href="/terms" className="text-sm text-blue-600 hover:underline">
          Terms of service
        </Link>
      </div>
    </div>
  );
}
