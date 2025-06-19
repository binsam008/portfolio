import { useState } from "react";
import image from "../assets/Contact/contact.png"
export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, we’ll get back to you soon!`);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-black via-[#0e001d] to-black text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Contact Form (comes first on large screens) */}
        <div className="order-2 md:order-1">
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-purple-700 shadow-2xl">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400 mb-8">
              got something to say? 👀
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm mb-1 block font-semibold text-gray-300">
                  your name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="what should we call you?"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#1b1b2f] text-white placeholder:text-gray-400 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block font-semibold text-gray-300">
                  your email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="we won't spam, promise!"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#1b1b2f] text-white placeholder:text-gray-400 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block font-semibold text-gray-300">
                  spill the tea
                </label>
                <textarea
                  name="message"
                  placeholder="tell us what's on your mind..."
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#1b1b2f] text-white placeholder:text-gray-400 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-md bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 transition font-semibold flex items-center justify-center gap-2"
              >
                <span>🚀 send it!</span>
              </button>
            </form>
          </div>
        </div>

        {/* Right: Cool Image (on the right) */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={image}
            alt="dev illustration"
            className="w-auto h-[420px] md:h-[500px] object-contain"
        />
        </div>
      </div>
    </section>
  );
}
