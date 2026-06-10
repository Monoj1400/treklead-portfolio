import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, Compass, CheckCircle2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Recruiting Monoj (Trek / Organization)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = [
    'Recruiting Monoj (Trek / Organization)',
    'Corporate Expedition Inquiry',
    'Custom Trail Guidance Request',
    'Media / Collaboration Opportunity'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Please complete all required fields before dispatching.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate sending form securely
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', subject: 'Recruiting Monoj (Trek / Organization)', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#111111]/95 text-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#2d6a4f] uppercase tracking-[0.25em] font-extrabold block mb-2">
            The Basecamp Dispatch
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#f8f5f0] uppercase tracking-tight block">
            Initiate Contact
          </h2>
          <div className="w-16 h-1 bg-[#1b4332] mx-auto mt-4" />
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Dispatch Cards / Info (Left - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="font-mono text-[9px] text-[#2d6a4f] uppercase tracking-widest font-extrabold block">
                Office Coordinates
              </span>
              <h3 className="font-display font-bold text-xl text-[#f8f5f0] uppercase tracking-wide leading-tight">
                Now Reviewing Global Opportunities
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed text-justify">
                Whether you represent Indiahikes, Bikat Adventures, or are a corporate manager seeking safe customized weekend expeditions around South India, feel free to dispatch a signal. I typically respond within 12-24 hours.
              </p>

              {/* Direct Info list details */}
              <div className="space-y-4 pt-4 font-sans">
                <div className="flex items-center space-x-3 glass border border-white/10 p-4 rounded-xl card-shadow">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-850 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-widest leading-none">Email Dispatch</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-subdisplay text-xs sm:text-sm text-[#f8f5f0] font-semibold hover:text-emerald-300 hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 glass border border-white/10 p-4 rounded-xl card-shadow">
                  <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-850 text-amber-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-widest leading-none">Location Base</span>
                    <span className="font-subdisplay text-xs sm:text-sm text-[#f8f5f0] font-semibold">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Social links handles row */}
                <div className="flex gap-3 pt-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 glass border border-white/10 rounded-xl font-mono text-[10px] uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5 transition-all card-shadow"
                  >
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 glass border border-white/10 rounded-xl font-mono text-[10px] uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5 transition-all card-shadow"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Integration satellite Placeholder (CSS modeled) */}
            <div className="relative aspect-[16/7] md:aspect-[16/8] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 flex flex-col justify-between p-4 shadow-xl">
              {/* Map grid coordinate overlay lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
              <div className="absolute inset-0 bg-[#1b4332]/5 pointer-events-none" />

              {/* Satellite GPS status marker */}
              <div className="flex justify-between items-start relative z-10">
                <div className="bg-[#111111]/80 backdrop-blur-md border border-neutral-800 px-3 py-1.5 rounded-lg">
                  <span className="block font-mono text-[8px] text-gray-500 uppercase tracking-widest leading-none">Global coordinates</span>
                  <span className="font-mono text-[9px] text-[#f8f5f0] font-bold">12.9716° N, 77.5946° E</span>
                </div>
                <div className="flex items-center space-x-1.5 px-2 py-1 bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 rounded font-mono text-[8px] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>GPS LOCK</span>
                </div>
              </div>

              {/* Center Map PIN Visual */}
              <div className="flex flex-col items-center justify-center flex-1 relative z-10 py-2">
                <div className="relative flex items-center justify-center">
                  {/* Rippling pulse */}
                  <span className="absolute w-12 h-12 rounded-full border border-emerald-400 bg-emerald-400/15 animate-ping inline-block" />
                  <div className="relative w-9 h-9 rounded-full bg-[#1b4332] border-2 border-white flex items-center justify-center text-amber-400 shadow-xl shadow-black/80">
                    <Compass className="w-5 h-5 animate-spin" />
                  </div>
                </div>
                <span className="block font-display font-black text-[10px] text-[#f8f5f0] uppercase tracking-widest mt-3 bg-black/60 px-2 py-0.5 rounded border border-neutral-800">
                  Monoj HQ • Bengaluru
                </span>
              </div>

              {/* Map Footer watermark */}
              <div className="flex justify-between items-center text-[8px] font-mono text-gray-500 relative z-10">
                <span>ZOOM REGISTRY: SECURED_12X</span>
                <span>MAPS SAT_GRID MOCK</span>
              </div>

            </div>
          </div>

          {/* Interactive Form System (Right - 7 cols) */}
          <div className="lg:col-span-7 glass border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between card-shadow">
            
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form header details */}
                <div className="pb-4 border-b border-white/10">
                  <span className="font-mono text-[9px] text-[#2d6a4f] uppercase tracking-widest font-extrabold block mb-1">
                    Certified Sender Protocol
                  </span>
                  <h3 className="font-display font-extrabold text-[#f8f5f0] text-sm sm:text-base uppercase tracking-tight">
                    Secure Dispatch form
                  </h3>
                </div>

                {/* Error Banner if any */}
                {errorMessage && (
                  <div className="flex items-center space-x-3 bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl text-rose-400">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="font-sans text-xs">{errorMessage}</span>
                  </div>
                )}

                {/* Input Elements spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-extrabold text-left">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 focus:border-white rounded-xl px-4 py-3 font-sans text-xs text-[#f8f5f0] outline-none transition-all placeholder-gray-600 focus:ring-1 focus:ring-white"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-extrabold text-left">Internal Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruit@indiahikes.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-black/40 border border-white/10 focus:border-white rounded-xl px-4 py-3 font-sans text-xs text-[#f8f5f0] outline-none transition-all placeholder-gray-600 focus:ring-1 focus:ring-white"
                    />
                  </div>
                </div>

                {/* Subject Selector dropdown style */}
                <div className="space-y-2">
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-extrabold text-left">Dispatch Subject Header *</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 focus:border-white rounded-xl px-4 py-3 font-sans text-xs text-[#f8f5f0] outline-none transition-all focus:ring-1 focus:ring-white cursor-pointer"
                  >
                    {subjects.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message core */}
                <div className="space-y-2">
                  <label className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest font-extrabold text-left">Operational message details *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide specific trekking dates, roles, or organization parameters..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 focus:border-white rounded-xl px-4 py-3 font-sans text-xs text-[#f8f5f0] outline-none transition-all placeholder-gray-600 focus:ring-1 focus:ring-white resize-none"
                  />
                </div>

                {/* Action button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#f8f5f0] hover:bg-white text-[#111111] rounded-xl font-display text-xs uppercase tracking-widest font-black hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2 card-shadow cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Compass className="w-4 h-4 animate-spin text-amber-400" />
                      <span>Rerouting Signal...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch Signal</span>
                    </>
                  )}
                </button>

              </form>
            ) : (
              /* Success Screen */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-6 animate-fade-in py-12">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-16 h-16 rounded-full border border-[#2d6a4f] bg-[#1b4332]/25 animate-ping inline-block" />
                  <div className="relative w-12 h-12 rounded-full bg-[#1b4332] border border-[#2d6a4f] flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-black text-xl text-[#f8f5f0] uppercase tracking-wider">
                    Signal Dispatched Successfully!
                  </h3>
                  <p className="font-sans text-xs text-gray-400 max-w-sm leading-relaxed mx-auto">
                    Monoj's operational deck has cached your message. He'll review the coordinates and respond in due intervals. Thank you!
                  </p>
                </div>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-neutral-950 border border-neutral-800 text-gray-400 hover:text-white hover:bg-neutral-900 rounded-xl font-mono text-[9px] uppercase tracking-wider transition-all"
                >
                  Send Another Transmission
                </button>
              </div>
            )}

            {/* Verification marker bottom */}
            <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-[9px] font-mono text-gray-500">
              <span>DISPATCH REGISTRY // SYSTEM_ONLINE</span>
              <span className="text-gray-600">SECURE SSL MOCK</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
