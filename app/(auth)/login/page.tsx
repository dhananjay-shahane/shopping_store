
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/app/_shared/context/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loginWithGoogle, isAuthenticated, sendEmailLink, confirmEmailLink } = useAuth();

  useEffect(() => {
    // Check if this is a sign-in link callback
    const emailLink = window.location.href;
    const storedEmail = window.localStorage.getItem('emailForSignIn');
    const emailParam = searchParams.get('email');

    if (emailLink.includes('apiKey') && (storedEmail || emailParam)) {
      const emailToUse = storedEmail || emailParam || '';
      handleEmailLinkSignIn(emailToUse, emailLink);
    }
  }, [searchParams]);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/orders');
    }
  }, [isAuthenticated, router]);

  const handleEmailLinkSignIn = async (email: string, link: string) => {
    setIsLoading(true);
    setError('');
    const result = await confirmEmailLink(email, link);
    if (!result.success) {
      setError(result.error || 'Failed to verify email link');
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');
    const result = await loginWithGoogle();
    if (!result.success) {
      setError(result.error || 'Failed to sign in with Google');
      setIsLoading(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');
    const result = await sendEmailLink(email);
    if (result.success) {
      setEmailSent(true);
    } else {
      setError(result.error || 'Failed to send sign-in link');
    }
    setIsLoading(false);
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-900"></div>
      </div>
    );
  }

  if (emailSent) {
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

              <div className="mb-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  Check your email
                </h2>
                <p className="text-sm text-neutral-500">
                  We've sent a sign-in link to <strong>{email}</strong>
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  Click the link in the email to sign in to your account.
                </p>
              </div>

              <button
                onClick={() => {
                  setEmailSent(false);
                  setEmail('');
                }}
                className="w-full text-[#5C5CFF] hover:underline text-sm font-medium"
              >
                Use a different email
              </button>
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
                Sign in
              </h2>
              <p className="text-sm text-neutral-500">
                Choose how you'd like to sign in
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-md text-sm bg-red-50 text-red-700 border border-red-200">
                {error}
              </div>
            )}

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5C5CFF] mb-4"></div>
                <p className="text-sm text-neutral-500">Processing...</p>
              </div>
            ) : (
              <>
                <button
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="w-full bg-[#5C5CFF] hover:bg-[#4a4aee] text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 mb-4"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#fff"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
                  </svg>
                  Sign in with Google
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-500">or</span>
                  </div>
                </div>

                <form onSubmit={handleEmailSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5C5CFF] focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 py-3 px-4 rounded-md font-medium transition-colors disabled:opacity-50"
                  >
                    Continue
                  </button>
                </form>
              </>
            )}

            <div className="mt-6 text-center text-xs text-neutral-400">
              By signing in, you agree to our Terms of Service and Privacy Policy
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
