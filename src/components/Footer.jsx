"use client";

import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaComments,
} from "react-icons/fa";


const MAIN_CATEGORIES = [
  "Team Wear",
  "Clothing & Apparel",
  "Accessories",
  "Fight Wear",
  "Fan-Store",
  "Fitness Wear",
  "Softboy Wear",
];

const QUICK_LINKS = [
  "About us",
  "Size Reference",
  "Manufacturing process",
  "Fabric",
  "Accessories",
  "Resource",
  "Contact us",
];

const cert = [
  { label: "CE", src: "/footer/cert/cert.jpg" },
];

const PAYMENTS = [
  { label: "PayPal", src: "/footer/payments/1.jpeg" },
  { label: "Zelle", src: "/footer/payments/2.jpeg" },
  { label: "Cash App", src: "/footer/payments/3.jpeg" },
  { label: "Venmo", src: "/footer/payments/4.jpeg" },
  { label: "VISA", src: "/footer/payments/5.jpeg" },
  { label: "Mastercard", src: "/footer/payments/6.jpeg" },
];

export default function FooterProsixStyle() {
  return (
    <footer className="w-full bg-[#1f1f1f] text-white">
      {/* TOP */}
      <div className="mx-auto w-full max-w-[1700px] px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* MAIN CATEGORIES */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold tracking-widest text-white/90">
              MAIN CATEGORIES
            </h3>
            <div className="mt-6 h-px w-full bg-white/10" />
            <ul className="mt-6 space-y-3 text-[13px] text-white/70">
              {MAIN_CATEGORIES.map((t) => (
                <li key={t}>
                  <a
                    href="#"
                    className="transition hover:text-white hover:underline"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10">
            <h3 className="text-sm font-bold tracking-widest text-white/90">
              QUICK LINKS
            </h3>
            <div className="mt-6 h-px w-full bg-white/10" />
            <ul className="mt-6 space-y-3 text-[13px] text-white/70">
              {QUICK_LINKS.map((t) => (
                <li key={t}>
                  <a
                    href="#"
                    className="transition hover:text-white hover:underline"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT US */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-10">
            <h3 className="text-sm font-bold tracking-widest text-white/90">
              CONTACT US
            </h3>
            <div className="mt-6 h-px w-full bg-white/10" />

            <div className="mt-6 grid gap-8 md:grid-cols-2">

              {/* UK */}
              <div className="space-y-4 text-[13px] text-white/70">
                <div className="flex hover:text-red-300 items-start gap-3">
                  <FaPhoneAlt className="mt-[2px] h-4 w-4 text-white/60" />
                  <Link href="wa.me/923036835366">+92 303 6835366</Link>
                </div>
                <div className="flex hover:text-red-300 items-start gap-3">
                  <FaEnvelope className="mt-[2px] h-4 w-4 text-white/60" />
                  <Link href={"/"}>business@onenationindustry.com</Link>
                </div>
                <div className="flex hover:text-red-300 items-start gap-3">
                  <FaMapMarkerAlt className="mt-[2px] h-4 w-4 text-white/60" />
                  <span>
                    Choty jhody wali khurd Sialkot 51310
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW (cert / payments / newsletter) */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* cert */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold text-white/90">
                Our Certificates
              </h4>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                {cert.map((c) => (
                  <div
                    key={c.label}
                    className="flex h-10 items-center justify-center"
                    title={c.label}
                  >
                    {/* Replace with your images; these are optional */}
                    <img
                      src={c.src}
                      alt={c.label}
                      className="h-18 w-auto opacity-90"
                      onError={(e) => {
                        // fallback to text if image missing
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="hidden text-xs text-white/60">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PAYMENTS */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold text-white/90">
                Payment Methods
              </h4>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {PAYMENTS.map((p) => (
                  <div
                    key={p.label}
                    className="flex h-7 items-center justify-center rounded px-2"
                    title={p.label}
                  >
                    <img
                      src={p.src}
                      alt={p.label}
                      className="h-12 w-auto opacity-90"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-semibold text-white/90">
                Enter your email address to get $20 off your first order
              </h4>

              <div className="mt-5">
                <div className="flex w-full items-stretch gap-3">
                  <input
                    type="email"
                    placeholder=""
                    className="h-11 w-full rounded-md border border-white/10 bg-[#2a2a2a] px-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/25"
                  />
                  <button className="h-11 shrink-0 rounded-md bg-[#d24a4a] px-6 text-sm font-semibold text-white transition hover:opacity-90">
                    Subscribe
                  </button>
                </div>

                <label className="mt-3 flex items-center gap-3 text-[12px] text-white/60">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/20 bg-transparent"
                  />
                  <span>I accept the privacy policy</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BAR */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-xs text-white/50">
              Copyright © 2009 - {new Date().getFullYear()}. All Rights Reserved
            </div>

            <div className="flex items-center gap-4 text-white/60">
              <a
                href="#"
                className="rounded-full p-2 transition hover:bg-white/10 hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 transition hover:bg-white/10 hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="rounded-full p-2 transition hover:bg-white/10 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
