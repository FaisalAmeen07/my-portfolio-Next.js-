"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
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
      className="absolute text-[#f4623a] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-7 peer-focus:bg-[#f4623a] peer-focus:text-white
      peer-focus:px-2 peer-focus:rounded-md"
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.message || !form.name || !form.email) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);

    emailjs
      .send(
        "service_m30hmyi",
        "template_r0sc6b9",
        {
          from_name: form.name,
          to_name: "Faisal Amin",
          from_email: form.email,
          to_email: "odeveloper56@gmail.com",
          message: form.message,
        },
        "HQ1Pj8HWe4P1zXNst"
      )
      .then(() => {
        toast.success("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);
        toast.error("Sorry, failed to send your message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="container mx-auto px-4 lg:px-20 mt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0  rounded-3xl -z-10" />

      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#e5e7eb",
            color: "#1f2937",
            boxShadow: "5px 5px 10px #1e293b, -5px -5px 10px #334155",
          },
          success: { iconTheme: { primary: "#16a34a", secondary: "#f0fdf4" } },
          error: { iconTheme: { primary: "#dc2626", secondary: "#fef2f2" } },
        }}
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          className="p-8 rounded-3xl space-y-6 bg-gray-900/35 border border-[#f38d70]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-300">
            Feel free to reach out via the form or directly through my contact
            details.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-[#f98463]" />
              <span className="text-slate-200">odeveloper56@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-[#f98463]" />
              <span className="text-slate-200">+92 3062672226</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/share/14LYnodXV7z/"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="w-7 h-7 text-[#f98463] hover:text-violet-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/faisal-ameen07/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-7 h-7 text-[#f98463] hover:text-violet-300" />
              </a>
              <a
                href="https://github.com/FaisalAmeen07/"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-7 h-7 text-[#f98463] hover:text-violet-300" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-8 rounded-3xl bg-gray-900/35  border border-[#f38d70]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-2xl border-[#f38d70]">
                <FormField
                  name="name"
                  label="Your Name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="border rounded-2xl border-[#f38d70]">
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

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Write your valuable message here..."
                className="block w-full px-4 py-3 text-white rounded-xl appearance-none peer focus:outline-none focus:ring-0 resize-none shadow-inner border border-[#f38d70] transition-shadow duration-300"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-lg text-[#f38d70] border disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 border-2 border-[#f38d70] border-t-transparent rounded-full animate-spin"></div>
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
