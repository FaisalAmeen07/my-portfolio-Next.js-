"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Facebook, Linkedin, Github } from "lucide-react";

const FormField = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  required,
}) => (
  <div className="relative">
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="block w-full px-4 py-3 rounded-xl appearance-none peer focus:outline-none focus:ring-0 shadow-inner neumorphic-inset transition-shadow duration-300"
    />
    <label
      htmlFor={name}
      className="absolute duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 peer-focus:px-2 peer-focus:rounded-md"
      style={{
        backgroundColor: "var(--skills-bg)",
        color: "var(--text-color)",
      }}
    >
      {label}
    </label>
  </div>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.message || !form.name || !form.email) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/EmailConfig", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Message Failed to send.");
      }
    } catch (error) {
      toast.error("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="container mx-auto px-4 lg:px-20 mt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 rounded-3xl -z-10" />

      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#e5e7eb",
            color: "#1f2937",
            boxShadow: "5px 5px 10px #1e293b, -5px -5px 10px #334155",
          },
        }}
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SECTION */}
        <motion.div
          className="p-8 rounded-3xl space-y-6 shadow-xl"
          style={{
            backgroundColor: "var(--skills-bg)",
            color: "var(--text-color)",
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#2ec4b6]">
            Get in Touch
          </h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-[#2ec4b6]" />
              <span>odeveloper56@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-[#2ec4b6]" />
              <span>+92 3062672226</span>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/share/14LYnodXV7z/"
                target="_blank"
              >
                <Facebook className="w-7 h-7 text-[#2ec4b6]" />
              </a>
              <a
                href="https://www.linkedin.com/in/faisal-ameen07/"
                target="_blank"
              >
                <Linkedin className="w-7 h-7 text-[#2ec4b6]" />
              </a>
              <a href="https://github.com/FaisalAmeen07" target="_blank">
                <Github className="w-7 h-7 text-[#2ec4b6]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SECTION: FORM */}
        <motion.div
          className="p-8 rounded-3xl shadow-xl"
          style={{
            backgroundColor: "var(--skills-bg)",
            color: "var(--text-color)",
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#2ec4b6]">
                <FormField
                  name="name"
                  label="Your Name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="rounded-2xl border border-[#2ec4b6]">
                <FormField
                  name="email"
                  label="Your Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Write your valuable message here..."
              className="block w-full px-4 py-3 rounded-xl appearance-none peer focus:outline-none focus:ring-0 resize-none shadow-inner border border-[#2ec4b6]"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-lg text-[#2ec4b6] border disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 border-2 border-[#34e5d3] border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </div>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
