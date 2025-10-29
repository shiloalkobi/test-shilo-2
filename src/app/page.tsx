"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SunIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="flex items-center gap-2 font-bold text-xl text-indigo-700">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 mr-2">
            <SunIcon className="w-5 h-5 text-indigo-600" />
          </span>
          BrightStart
        </div>
        <div className="flex gap-4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Contact</Button>
          <Button variant="outline">Sign In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Launch your next project with <span className="text-indigo-600">BrightStart</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8">
            The all-in-one platform to kickstart your ideas, collaborate with your team, and grow your business. Simple, powerful, and beautifully designed.
          </p>
          {!submitted ? (
            <form
              className="flex flex-col sm:flex-row gap-3 items-center justify-center"
              onSubmit={handleSubmit}
              aria-label="Join waitlist"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-64 max-w-full"
                aria-label="Email address"
              />
              <Button type="submit" className="flex items-center gap-2">
                Join Waitlist <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <div className="text-green-600 font-semibold text-lg mt-4">Thank you for joining! 🎉</div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/70">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why BrightStart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center p-8 text-center shadow-md border-0 bg-indigo-50">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-xl mb-2">Fast Setup</h3>
              <p className="text-gray-600">Get started in minutes with our intuitive onboarding and ready-to-use templates.</p>
            </Card>
            <Card className="flex flex-col items-center p-8 text-center shadow-md border-0 bg-indigo-50">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-xl mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Work together seamlessly with real-time updates and shared workspaces.</p>
            </Card>
            <Card className="flex flex-col items-center p-8 text-center shadow-md border-0 bg-indigo-50">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-semibold text-xl mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Your data is protected with enterprise-grade security and 99.99% uptime.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 bg-white/80 border-t border-gray-200 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100">
              <SunIcon className="w-4 h-4 text-indigo-600" />
            </span>
            BrightStart © {new Date().getFullYear()}
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
