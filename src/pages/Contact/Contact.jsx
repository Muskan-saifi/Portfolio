
import React, { useState } from "react";
import {
  Send,
  Phone,
  MapPin,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus(
        "Contact form setup is incomplete. Please email me directly."
      );
      return;
    }

    const form = new FormData();
    form.append("access_key", accessKey);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      setIsSubmitting(true);

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setErrors({});
      } else {
        setStatus(
          result.message || "Unable to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen">
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>

                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop me a message!
                </p>
              </div>

              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:muskansaifisaifi100@gmail.com"
                      className="text-gray-400 hover:text-purple-400 transition-colors break-all"
                    >
                      muskansaifisaifi100@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Delhi, India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a
                      href="tel:+919818612034"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      +91 98186 12034
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Github className="w-6 h-6 text-purple-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <a
                      href="https://github.com/Muskan-saifi"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      github.com/Muskan-saifi
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/muskan-saifi-679999435/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      View LinkedIn Profile
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 gap-6">

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      aria-label="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        setErrors({ ...errors, name: "" });
                      }}
                    />

                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      aria-label="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setErrors({ ...errors, email: "" });
                      }}
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      aria-label="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.subject ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        setErrors({ ...errors, subject: "" });
                      }}
                    />

                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      placeholder="Your Message"
                      aria-label="Your Message"
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        setErrors({ ...errors, message: "" });
                      }}
                    />

                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Form Status */}
              {status && (
                <div
                  role="status"
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}