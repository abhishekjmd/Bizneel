"use client";
import { useState } from "react";
import type { ContactFormData } from "@/lib/validations";

/**
 * Contact form component - Client Component
 * Redirects to WhatsApp with pre-filled message
 */
export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        productInterest: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let whatsappMessage = `*New Enquiry from BIZNEEL Website*\n\n`;
        whatsappMessage += `*Name:* ${formData.name}\n`;
        whatsappMessage += `*Email:* ${formData.email}\n`;

        if (formData.phone) whatsappMessage += `*Phone:* ${formData.phone}\n`;
        if (formData.company) whatsappMessage += `*Company:* ${formData.company}\n`;
        if (formData.productInterest)
            whatsappMessage += `*Product Interest:* ${formData.productInterest}\n`;

        whatsappMessage += `\n*Message:*\n${formData.message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = "919104221284";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    };

    const inputClass =
        "w-full px-4 py-3 bg-purple-50 border border-purple-200 text-purple-800 placeholder:text-purple-500 focus:border-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors text-sm font-light";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
                        Full Name *
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
                        Email Address *
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-light text-gray-700 mb-2">
                        Company / Salon Name
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your Business Name"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="productInterest" className="block text-sm font-light text-gray-700 mb-2">
                    Enquiry Type
                </label>
                <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={(e) =>
                        setFormData({ ...formData, productInterest: e.target.value })
                    }
                    className={inputClass}
                >
                    <option value="">Select enquiry type</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Salon Partnership">Salon Partnership</option>
                    <option value="Distributor Enquiry">Distributor Enquiry</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`${inputClass} resize-none`}
                />
            </div>

            <button
                type="submit"
                className="w-full px-8 py-4 bg-purple-600 text-white text-sm tracking-widest uppercase font-light hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-3"
            >
                Send via WhatsApp
            </button>

            <p className="text-xs text-center text-gray-500 font-light">
                Your message will open in WhatsApp. Make sure you have WhatsApp installed.
            </p>
        </form>
    );
}
