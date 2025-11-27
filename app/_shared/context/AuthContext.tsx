"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { auth, signInWithGoogle, signUpWithEmail, signInWithEmail, logOut, onAuthChange, User } from '@/app/_shared/lib/firebase';

interface AuthUser {
  email: string;
  name?: string;
  uid: string;
  photoURL?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  loginWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  registerWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  sendEmailLink: (email: string) => Promise<{ success: boolean; error?: string }>;
  confirmEmailLink: (email: string, link: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function mapFirebaseUser(firebaseUser: User | null): AuthUser | null {
  if (!firebaseUser) return null;
  return {
    email: firebaseUser.email || '',
    name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '',
    uid: firebaseUser.uid,
    photoURL: firebaseUser.photoURL || undefined,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(mapFirebaseUser(firebaseUser));
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const { user: firebaseUser, error } = await signInWithGoogle();
      if (error) {
        return { success: false, error };
      }
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const { user: firebaseUser, error } = await signInWithEmail(email, password);
      if (error) {
        return { success: false, error };
      }
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const registerWithEmail = async (email: string, password: string) => {
    try {
      const { user: firebaseUser, error } = await signUpWithEmail(email, password);
      if (error) {
        return { success: false, error };
      }
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const sendEmailLink = async (email: string) => {
    try {
      const { sendSignInLinkToEmail } = await import('@/app/_shared/lib/firebase');
      const result = await sendSignInLinkToEmail(email);
      return result;
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const confirmEmailLink = async (email: string, link: string) => {
    try {
      const { confirmSignInWithEmailLink } = await import('@/app/_shared/lib/firebase');
      const { user: firebaseUser, error } = await confirmSignInWithEmailLink(email, link);
      if (error) {
        return { success: false, error };
      }
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    await logOut();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isLoading,
      loginWithGoogle,
      loginWithEmail,
      registerWithEmail,
      sendEmailLink,
      confirmEmailLink,
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
