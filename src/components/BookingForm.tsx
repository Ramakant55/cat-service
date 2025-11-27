"use client";
import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", message: "" });

  return (
    <section id="booking" className="mx-auto max-w-4xl px-4">
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="font-display text-2xl md:text-5xl mb-2 md:mb-4 bg-gradient-to-r from-stone-900 to-stone-600 bg-clip-text text-transparent">Booking Request</h2>
        <p className="text-stone-600 text-xs md:text-lg">Tell us about your event</p>
      </div>
      <form className="rounded-3xl bg-gradient-to-br from-white to-stone-50 border-2 border-stone-200 p-8 md:p-10 shadow-xl">
        <div className="grid md:grid-cols-2 gap-6">
          <input className="border-2 border-stone-300 rounded-2xl p-4 focus:border-gold focus:outline-none transition-colors" placeholder="Full Name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
          <input className="border-2 border-stone-300 rounded-2xl p-4 focus:border-gold focus:outline-none transition-colors" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
          <input className="border-2 border-stone-300 rounded-2xl p-4 focus:border-gold focus:outline-none transition-colors" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} />
          <input className="border-2 border-stone-300 rounded-2xl p-4 focus:border-gold focus:outline-none transition-colors" placeholder="Event Date" type="date" value={form.date} onChange={e=>setForm({...form, date: e.target.value})} />
          <input className="border-2 border-stone-300 rounded-2xl p-4 focus:border-gold focus:outline-none transition-colors" placeholder="Guests (approx.)" value={form.guests} onChange={e=>setForm({...form, guests: e.target.value})} />
        </div>
        <textarea className="mt-6 w-full border-2 border-stone-300 rounded-2xl p-4 focus:border-gold focus:outline-none transition-colors" placeholder="Message / Event details" rows={4} value={form.message} onChange={e=>setForm({...form, message: e.target.value})} />
        <button type="button" className="mt-6 w-full px-4 sm:px-8 py-2 sm:py-4 rounded-full bg-gradient-to-r from-gold to-yellow-600 text-white font-medium text-xs sm:text-base hover:shadow-lg hover:scale-105 transition-all">
          Submit Request
        </button>
      </form>
    </section>
  );
}
