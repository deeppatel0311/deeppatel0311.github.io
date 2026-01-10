"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  Sparkles,
  Linkedin,
} from "lucide-react";
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  PulseGlow,
  SlideInFromBottom,
} from "@/components/EnhancedAnimations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "deep.p0311@gmail.com",
      href: "mailto:deep.p0311@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8490919815",
      href: "tel:+918490919815",
      color: "text-green-400",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Ahmedabad, India",
      href: "#",
      color: "text-purple-400",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/deeppatel0311/",
      color: "text-blue-500",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-slate-950 relative overflow-hidden"
    >
      {/* Subtle pattern for Contact */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(244,63,94,0.06)_60deg,transparent_120deg)]"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="glass-strong p-4 rounded-2xl">
              <MessageCircle className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-strong p-8">
              <h3 className="text-3xl font-semibold mb-8 gradient-text">
                Let's Connect
              </h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center p-4 glass rounded-2xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`w-14 h-14 ${info.color} bg-white/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-strong p-10 relative overflow-hidden">
            {/* Success overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-green-500/20 backdrop-blur-sm flex items-center justify-center z-10 rounded-3xl">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/80">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center mb-8">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/90 mb-3 group-focus-within:text-blue-400 transition-colors duration-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-white/50 hover:bg-white/10"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/90 mb-3 group-focus-within:text-blue-400 transition-colors duration-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-white/50 hover:bg-white/10"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/90 mb-3 group-focus-within:text-blue-400 transition-colors duration-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-white/50 hover:bg-white/10"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary group relative overflow-hidden"
              >
                <span
                  className={`flex items-center justify-center transition-all duration-300 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Send
                    size={18}
                    className="mr-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                  Send Message
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
