import React, { useState } from 'react';
import ContactForm from './components/ContactForm';

// Replace with '/banner.jpg' if you put an image in public/ or any external URL
const BANNER_URL = 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=60';

export default function App() {
  return (
    <div class="bg-gray-300">
      <Header />
      <Hero />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-transparent py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-pink-500/90 flex items-center justify-center text-white font-bold">C</div>
          <h1 className="text-lg font-semibold">Cancer Awareness & Support</h1>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center py-16">

      <div className="text-center mt-0 px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900">
          Join the fight — support cancer awareness
        </h2>
        <p className="mt-3 text-gray-600">
          We provide resources, support, and guidance for patients and families.
        </p>
      </div>

      <img
        src={BANNER_URL}
        alt="Cancer Awareness Banner"
        className="levitate w-full mt-10 max-w-2xl rounded-lg shadow-lg"
      />

    </section>
  );
}


function About() {
  return (
    <section id="about" className="prose max-w-none mx-auto text-center mt-10">
      <h3 className="text-2xl font-semibold">Our Mission</h3>
      <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base">We aim to increase awareness, provide emotional and educational support, and connect people with helpful resources. Whether you're looking for information, volunteer opportunities, or a listening ear — you're welcome here.</p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card title="Resources" body="Guides, helplines and local support groups." />
        <Card title="Community" body="Peer support and survivor stories." />
        <Card title="Get Involved" body="Volunteer, donate, or start conversations." />
      </div>
    </section>
  );
}

function Card({ title, body }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{body}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-12 border-t pt-6 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Cancer Awareness & Support — Not a medical organization. For medical advice consult a professional.</p>
      </div>
    </footer>
  );
}
