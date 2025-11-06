"use client"

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { companyInfo } from "@/lib/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Get in touch with our team. We're here to help with all your medical supply needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
                      <p className="font-semibold">Thank you for your message!</p>
                      <p className="text-sm">We'll get back to you as soon as possible.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="quote">Request a Quote</option>
                            <option value="support">Product Support</option>
                            <option value="billing">Billing Question</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-gray-600">
                        {companyInfo.contact.address.street}<br />
                        {companyInfo.contact.address.city}, {companyInfo.contact.address.state} {companyInfo.contact.address.zip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${companyInfo.contact.phone}`} className="text-sm text-blue-600 hover:underline">
                        {companyInfo.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${companyInfo.contact.email}`} className="text-sm text-blue-600 hover:underline">
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="text-sm">
                      <p className="text-gray-700">{companyInfo.hours.weekday}</p>
                      <p className="text-gray-700">{companyInfo.hours.saturday}</p>
                      <p className="text-gray-700">{companyInfo.hours.sunday}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Emergency Contact</h3>
                  <p className="text-sm text-blue-800">
                    For urgent equipment needs or after-hours support, please call our emergency line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Our Location</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Map Placeholder</p>
                <p className="text-sm">Integrate Google Maps or Mapbox here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
