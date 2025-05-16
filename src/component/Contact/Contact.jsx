import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init("yvWd1LOmDczF0qLHF"); // ✅ Your EmailJS public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      await emailjs.send("service_zp3xqtf", "template_7h6ed92", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Email send error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="pt-15">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-amber-400 mb-8 text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <ContactInfo
                icon={<MapPin />}
                title="Our Location"
                text="123 Business Avenue, Suite 500, San Francisco, CA 94107"
              />
              <ContactInfo
                icon={<Phone />}
                title="Phone Number"
                text="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<Mail />}
                title="Email Address"
                text="Tacticaltitans127@gmail.com"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Business Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <TimeSlot day="Monday - Friday" time="9:00 AM - 6:00 PM" />
                <TimeSlot day="Saturday" time="10:00 AM - 4:00 PM" />
                <TimeSlot day="Sunday" time="Closed" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            {submitted ? (
              <div className="bg-green-100 border border-green-200 text-green-700 p-4 rounded-md flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-100 border border-red-200 text-red-700 p-4 rounded-md mb-4">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {["name", "email", "subject"].map((field) => (
                    <InputField
                      key={field}
                      id={field}
                      label={
                        field === "name"
                          ? "Full Name"
                          : field[0].toUpperCase() + field.slice(1)
                      }
                      type={field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className={`flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-md transition duration-300 ${
                      sending ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable components
const ContactInfo = ({ icon, title, text }) => (
  <div className="flex items-start">
    <div className="text-amber-500 mt-1">{icon}</div>
    <div className="ml-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

const TimeSlot = ({ day, time }) => (
  <div>
    <p className="font-medium">{day}:</p>
    <p>{time}</p>
  </div>
);

const InputField = ({ id, label, type, value, onChange }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
    />
  </div>
);

export default Contact;
