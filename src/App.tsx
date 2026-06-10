import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Timeline from './components/Timeline';
import FeaturedTreks from './components/FeaturedTreks';
import Gallery from './components/Gallery';
import LeadershipStories from './components/LeadershipStories';
import Testimonials from './components/Testimonials';
import Fitness from './components/Fitness';
import ContentCreator from './components/ContentCreator';
import FutureGoals from './components/FutureGoals';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      'home',
      'about',
      'dashboard',
      'timeline',
      'treks',
      'gallery',
      'stories',
      'fitness',
      'future',
      'contact',
    ];

    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-30% 0px -60% 0px', // Triggers when section is prominent in viewport
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  return (
    <div className="bg-[#111111] text-[#f8f5f0] font-sans antialiased selection:bg-[#1b4332] selection:text-white min-h-screen">
      {/* Sticky Premium Header */}
      <Header activeSection={activeSection} />

      {/* Main Page Layout Layout Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Dashboard />
        <Timeline />
        <FeaturedTreks />
        <Gallery />
        <LeadershipStories />
        <Testimonials />
        <Fitness />
        <ContentCreator />
        <FutureGoals />
        <Contact />
      </main>

      {/* Decorative Branding Footer */}
      <Footer />
    </div>
  );
}
