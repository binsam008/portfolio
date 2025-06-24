import { useState } from "react";
import emailjs from "@emailjs/browser";
import image from "../assets/Contact/contact.png";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_co4vjho", // 🔁 Replace with your EmailJS Service ID
        "template_afbpiut", // 🔁 Replace with your EmailJS Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "xTz2PCn4crj7tMv82" // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert(`Thanks ${form.name}, your message has been sent!`);
          setForm({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Email send failed:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-background text-foreground transition-colors"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Form */}
        <div className="order-2 md:order-1">
          <div className="bg-card p-8 rounded-2xl border border-purple-500 shadow-lg">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 mb-8">
              got something to say? 👀
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm mb-1 block font-semibold">
                  your name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="what should we call you?"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-purple-400 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block font-semibold">
                  your email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="we won't spam, promise!"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-purple-400 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="text-sm mb-1 block font-semibold">
                  spill the tea
                </label>
                <textarea
                  name="message"
                  placeholder="tell us what's on your mind..."
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-purple-400 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-md bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 transition font-semibold"
              >
                🚀 send it!
              </button>
            </form>
          </div>
        </div>

        {/* Image */}
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
