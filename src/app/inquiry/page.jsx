"use client";

import React, { useMemo, useState } from "react";

export default function InquiryPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  });

  const WHATSAPP_NUMBER = "923036835366";

  const MAP_EMBED_URL = useMemo(() => {
    return "https://www.google.com/maps?q=Sialkot%20Pakistan&output=embed";
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "📩 *Export Inquiry*",
      "",
      `👤 Name: ${form.name || "-"}`,
      `📧 Email: ${form.email || "-"}`,
      `🧵 Product: ${form.product || "-"}`,
      "",
      "📝 Message:",
      `${form.message || "-"}`,
    ];
    return lines.join("\n");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = buildWhatsAppMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const disabled =
    !form.name.trim() || !form.email.trim() || !form.product.trim() || !form.message.trim();

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#121212]">
      {/* MAP */}
      <div className="w-full">
        <div className="relative w-full h-[280px] sm:h-[360px]">
          <iframe
            title="Company Location"
            src={MAP_EMBED_URL}
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            allowFullScreen
          />
          {/* subtle overlay to match brand */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#9b0b12]/15 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-[#9b0b12]" />
            Export Inquiry • Reply on WhatsApp
          </div>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
            Send an Inquiry
          </h1>
          <p className="mt-2 text-black/70">
            Tell us what you need and we’ll respond on WhatsApp with details.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white border border-black/10 rounded-2xl p-5 sm:p-7 shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your full name"
              required
            />

            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@company.com"
              required
            />
          </div>

          <div className="mt-4">
            <Field
              label="Product Buyer Wants"
              name="product"
              value={form.product}
              onChange={onChange}
              placeholder="e.g., Cotton Terry Hoodie, Football Kits, Workwear…"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-black/80 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Add quantity, GSM, fabric type, sizing, color, printing, delivery country, etc."
              className="w-full min-h-[140px] rounded-xl bg-white border border-black/10 px-4 py-3 outline-none
                         focus:border-[#9b0b12]/40 focus:ring-4 focus:ring-[#9b0b12]/10 transition"
              required
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-xs text-black/60">
              By submitting, WhatsApp will open with your inquiry message pre-filled.
            </p>

            <button
              type="submit"
              disabled={disabled}
              className={`rounded-xl px-5 py-3 font-semibold transition ${
                disabled
                  ? "bg-black/10 text-black/40 cursor-not-allowed"
                  : "bg-[#9b0b12] text-white hover:bg-[#7f090f] shadow-[0_10px_25px_rgba(155,11,18,0.25)]"
              }`}
            >
              Send on WhatsApp
            </button>
          </div>
        </form>

        <div className="mt-6 text-sm text-black/70">
          Prefer email?{" "}
          <span className="text-black font-semibold">business@onenationindustry.com</span>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-black/80 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-white border border-black/10 px-4 py-3 outline-none
                   focus:border-[#9b0b12]/40 focus:ring-4 focus:ring-[#9b0b12]/10 transition"
      />
    </div>
  );
}
