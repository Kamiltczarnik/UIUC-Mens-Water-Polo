'use client';
import { useState } from 'react';

export default function AdminPanel() {
  const [input, setInput] = useState('');
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const PASSWORD = 'admin123'; // Change this to a secure password in production

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthed(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!authed) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-xs w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter password"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:border-[#FF5F05]"
          />
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#FF5F05] text-white py-2 rounded font-semibold hover:bg-[#e65500] transition"
          >
            Login
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>
        <div className="space-y-6">
          <div className="p-4 border rounded-lg bg-gray-100">
            <h2 className="text-xl font-semibold mb-2">Manage Photos</h2>
            <form className="mb-4">
              <label className="block mb-2 font-medium">Upload a new photo</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="mb-2" />
              {selectedImage && (
                <div className="mt-2">
                  <img src={selectedImage} alt="Preview" className="max-h-48 rounded shadow" />
                </div>
              )}
            </form>
            <p className="text-gray-600">(Coming soon) Upload, delete, and reorder gallery and carousel photos.</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <h2 className="text-xl font-semibold mb-2">Manage Roster</h2>
            <p className="text-gray-600">(Coming soon) Add, edit, or remove players from the team roster.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 