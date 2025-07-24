'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/manbonnq';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLInputElement).value,
    };
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setStatus('Message sent!');
      form.reset();
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-[#13294B] mb-2 text-center">Contact Us</h1>
        <p className="text-center text-gray-600 mb-8">
          Have a question or want to join the team? Send us a message!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF5F05] bg-white placeholder-gray-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF5F05] bg-white placeholder-gray-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF5F05] bg-white placeholder-gray-400 resize-none"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF5F05] text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-[#e65500] transition"
          >
            Send Message
          </button>
          {status && status === 'Message sent!' && (
            <div className="flex items-center justify-center mt-4 animate-fade-in">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-lg shadow">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Message sent!
              </span>
            </div>
          )}
          {status && status !== 'Message sent!' && (
            <div className="text-center text-sm mt-2 text-red-600 font-semibold animate-fade-in">{status}</div>
          )}
        </form>
        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 font-medium">or</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>
        {/* Email Contact */}
        <div className="text-center">
          <span className="text-gray-700">Contact us directly at</span>
          <br />
          <a
            href="mailto:illinoismenswaterpolo@gmail.com"
            className="text-[#FF5F05] font-semibold underline hover:text-[#13294B] transition"
          >
            illinoismenswaterpolo@gmail.com
          </a>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease;
        }
      `}</style>
    </section>
  );
}
