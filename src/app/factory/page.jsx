"use client";
import React from "react";
import Link from "next/link";

export default function FactoryPage() {
  const certificates = [
    {
      title: "ISO 9001: Quality Management",
      desc: "Standardized production workflow and quality checks.",
      fileHint: "Upload your ISO scan here",
    },
    {
      title: "OEKO-TEX / Fabric Compliance",
      desc: "Material compliance for safer textiles (if applicable).",
      fileHint: "Upload compliance doc here",
    },
    {
      title: "SGS / Third-Party Inspection",
      desc: "Optional inspection reports based on buyer request.",
      fileHint: "Upload SGS/Inspection report here",
    },
    {
      title: "Export Registration / Company Docs",
      desc: "Registered exporter documentation for international shipments.",
      fileHint: "Upload exporter docs here",
    },
  ];

  const factoryImages = [
    { src: "/factory/1.jpg", label: "Cutting & Pattern" },
    { src: "/factory/2.jpg", label: "Stitching Line" },
    { src: "/factory/3.jpg", label: "Printing / Embroidery" },
    { src: "/factory/4.jpg", label: "Quality Check" },
    { src: "/factory/5.jpg", label: "Packing & Labeling" },
    { src: "/factory/6.jpg", label: "Dispatch / Shipment" },
  ];

  const processSteps = [
    {
      title: "Inquiry & Requirements",
      desc: "You share product, quantity, sizing, logos, and destination country.",
    },
    {
      title: "Mockup / Tech Pack Confirmation",
      desc: "We confirm design placement, colors, fabric GSM, and measurements.",
    },
    {
      title: "Sampling (Optional)",
      desc: "We create a sample for approval before bulk production.",
    },
    {
      title: "Bulk Production",
      desc: "Cutting, stitching, printing/embroidery, and finishing under QC.",
    },
    {
      title: "Quality Check & Packing",
      desc: "Final inspection, size sorting, labeling, and export packing.",
    },
    {
      title: "Shipping & Tracking",
      desc: "We dispatch via DHL/air/cargo and share tracking details.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-black">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#b30f1c]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-14 sm:py-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
            <span className="h-2 w-2 rounded-full bg-[#ff2b3d]" />
            Sialkot • Sportswear & Team Uniforms • Export Ready
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
            Factory & Production
          </h1>
          <p className="mt-3 max-w-2xl text-black/70 leading-relaxed">
            We manufacture custom team uniforms, sportswear, and private-label
            apparel with clean stitching, accurate sizing, and export-grade
            packing. Below you can see our certificates, facility gallery, and
            production flow.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center rounded-2xl bg-red-400 text-gray-100 px-5 py-3 font-medium hover:rounded-3xl transition"
            >
              Start an Inquiry
            </Link>
          </div>

          {/* quick stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard label="MOQ" value="Flexible" />
            <StatCard label="Lead Time" value="2–4 Weeks" />
            <StatCard label="Branding" value="Print / Embroidery" />
            <StatCard label="Shipping" value="Worldwide" />
          </div>
        </div>
      </section>

      {/* FACTORY GALLERY (VERTICAL FLOW) */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <Header
          title="Factory Gallery"
          subtitle="One image per row + arrows pointing downward. Add images in /public/factory/ (1.jpg, 2.jpg...)"
        />

        <div className="mx-auto max-w-3xl">
          {factoryImages.map((img, idx) => (
            <React.Fragment key={idx}>
              <GalleryStepCard
                idx={idx}
                src={img.src}
                label={img.label}
              />

              {/* Down Arrow between cards */}
              {idx !== factoryImages.length - 1 && (
                <div className="flex items-center justify-center py-5">
                  <div className="flex flex-col items-center">
                    <div className="h-7 w-[2px] bg-black/20" />
                    <div className="mt-1 h-9 w-9 rounded-full border border-black/10 bg-white shadow-sm flex items-center justify-center">
                      <span className="text-black/70 text-lg">↓</span>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <Header
          title="Our Production Process"
          subtitle="Simple, transparent flow from inquiry to shipment."
        />

        <div className="rounded-2xl border border-black/10 bg-white p-5 sm:p-7 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {processSteps.map((s, idx) => (
              <div
                key={idx}
                className="flex gap-4 rounded-2xl border border-black/10 bg-[#f8fafc] p-4 hover:bg-[#f1f5f9] transition"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#b30f1c] text-white font-semibold">
                  {idx + 1}
                </div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="mt-1 text-sm text-black/70 leading-relaxed">
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-black/10 bg-gradient-to-r from-[#b30f1c]/10 to-black/5 p-5">
            <div>
              <div className="text-base font-semibold">Want a quick quote?</div>
              <div className="text-sm text-black/70">
                Send your product name + quantity + country, we’ll respond fast.
              </div>
            </div>
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-medium hover:bg-black/90 transition"
            >
              Go to Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* FOOT NOTE */}
      <footer className="border-t border-black/10 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-black/60">
          © {new Date().getFullYear()} One Nation Industry • Factory Page
        </div>
      </footer>
    </div>
  );
}

function Header({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-sm text-black/70 max-w-3xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
      <div className="text-xs text-black/50">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

/**
 * Gallery cards with "unique" styling per index
 * - changes badge position, accent bar, caption layout, etc.
 */
function GalleryStepCard({ idx, src, label }) {
  const variants = [
    {
      outer: "bg-white border-black/10",
      badge: "top-3 left-3",
      accent: "from-[#b30f1c]/20 to-transparent",
      caption: "bottom-3 left-3",
    },
    {
      outer: "bg-[#ffffff] border-black/10",
      badge: "top-3 right-3",
      accent: "from-black/10 to-transparent",
      caption: "bottom-3 right-3 text-right",
    },
    {
      outer: "bg-white border-black/10",
      badge: "bottom-3 left-3",
      accent: "from-[#ff2b3d]/15 to-transparent",
      caption: "top-3 left-3",
    },
    {
      outer: "bg-white border-black/10",
      badge: "bottom-3 right-3",
      accent: "from-[#b30f1c]/10 to-transparent",
      caption: "top-3 right-3 text-right",
    },
    {
      outer: "bg-white border-black/10",
      badge: "top-3 left-3",
      accent: "from-black/5 to-transparent",
      caption: "bottom-3 left-3",
    },
    {
      outer: "bg-white border-black/10",
      badge: "top-3 right-3",
      accent: "from-[#ff2b3d]/10 to-transparent",
      caption: "bottom-3 right-3 text-right",
    },
  ];

  const v = variants[idx % variants.length];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border ${v.outer} shadow-sm`}
    >
      {/* subtle accent gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${v.accent}`} />

      {/* optional left accent bar (unique look) */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#b30f1c]/30" />

      <div className="relative aspect-[16/9]">
        <img
          src={src}
          alt={`Factory ${idx + 1}`}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* step badge */}
        <div
          className={`absolute ${v.badge} rounded-full bg-black/70 text-white text-[11px] px-2.5 py-1 border border-white/10`}
        >
          Step {idx + 1}
        </div>

        {/* caption */}
        <div
          className={`absolute ${v.caption} max-w-[80%] rounded-2xl bg-white/90 backdrop-blur px-3 py-2 border border-black/10`}
        >
          <div className="text-xs font-semibold text-black">
            {label}
          </div>
          <div className="text-[11px] text-black/60">
            /public/factory/{idx + 1}.jpg
          </div>
        </div>
      </div>
    </div>
  );
}
