'use client';

import React, { useState } from 'react';
import Hero from '@/components/Hero';
import Main from '@/components/Main';
import ContactUs from '@/components/ContactUs';
import ScrollButton from '@/components/ScrollButton';
import TechnicalSkills from '@/components/TechnicalSkills';
import SoftSkills from '@/components/SoftSkills';

const Page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/check-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'فشل في التحقق من كلمة السر');
        return;
      }

      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setError('كلمة السر غير صحيحة');
      }
    } catch {
      setError('حدث خطأ أثناء التحقق');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen flex items-center justify-center bg-transparent relative z-50">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-10"></div>

        <form
          onSubmit={handleLogin}
          className="relative z-20 bg-white/10 border border-white/20 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-white">أدخل كلمة السر</h2>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة السر"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          />

          {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            دخول
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <div className="divider" />
      <TechnicalSkills />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <SoftSkills />
      <div className="divider" />
      <ContactUs />
      <div className="divider" />
      <ScrollButton />
    </div>
  );
};

export default Page;