"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/_shared/context/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        login(email);
        router.push('/orders');
      }, 500);
    }
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      login('user@gmail.com', 'Google User');
      router.push('/orders');
    }, 500);
  };

  const handleBackToEmail = () => {
    setStep('email');
    setOtp('');
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl text-neutral-600 font-light tracking-wide">
              SUIDHAGA
            </h1>
          </div>

          {step === 'email' ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-1">Sign in</h2>
                <p className="text-sm text-neutral-500">Choose how you'd like to sign in</p>
              </div>

              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full bg-[#5C5CFF] hover:bg-[#4a4aee] text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center gap-2 mb-6"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
                </svg>
                Sign in with Google
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
                    className="w-full px-4 py-3 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-600 text-neutral-700 placeholder-neutral-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!email.trim()}
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                    email.trim()
                      ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                      : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-1">Enter code</h2>
                <p className="text-sm text-neutral-500">Sent to {email}</p>
              </div>

              <form onSubmit={handleOtpSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                      setOtp(value);
                    }}
                    placeholder="6-digit code"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-blue-500 text-neutral-700 placeholder-neutral-400"
                    maxLength={6}
                    required
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  disabled={otp.length !== 6 || isLoading}
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors mb-4 ${
                    otp.length === 6 && !isLoading
                      ? 'bg-[#0066FF] hover:bg-[#0052cc] text-white'
                      : 'bg-[#0066FF] text-white opacity-80 cursor-not-allowed'
                  }`}
                >
                  {isLoading ? 'Signing in...' : 'Submit'}
                </button>
              </form>

              <button
                onClick={handleBackToEmail}
                className="w-full text-center text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Sign in with a different email
              </button>
            </>
          )}
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <Link href="/privacy" className="text-sm text-blue-600 hover:underline">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-sm text-blue-600 hover:underline">
            Terms of service
          </Link>
        </div>
      </div>
    </div>
  );
}
