"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch, FiMenu, FiChevronDown, FiX } from "react-icons/fi";

// ✅ Import JS data (not JSON)
import productsData from "@/data/products.json";

function money(n) {
  if (typeof n !== "number") return "";
  return `$${n.toFixed(2)}`;
}

export default function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // desktop dropdown
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(null);

  const headerRef = useRef(null);

  const NAV = useMemo(() => ["Home", "Products", "Factory", "Inquiry"], []);

  // ✅ Normalize categories from products.js
  const ALL_CATEGORIES = useMemo(() => {
  const categories = productsData?.categories ?? [];
  const products = productsData?.products ?? [];

  return categories.map((cat) => {
    const catProducts = products.filter((p) => p.category === cat.slug);

    return {
      title: cat.title,
      slug: cat.slug,
      image: cat.image || "/placeholder.png",
      href: `/products/${cat.slug}`,

      startingPrice:
        catProducts.length > 0
          ? Math.min(...catProducts.map((p) => p.price || 0))
          : null,

      items: catProducts.map((p) => ({
        label: p.title,
        href: `/products/${cat.slug}/${p.slug}`,
        image: p.image || "/placeholder.png",
        price: p.price || null,
      })),
    };
  });
}, []);

  // ✅ Navbar shows only 5 categories (featured preferred)
  const NAV_CATEGORIES = useMemo(() => {
    const featured = ALL_CATEGORIES.filter((c) => c.featured);
    const pick = featured.length ? featured.slice(0, 5) : ALL_CATEGORIES.slice(0, 5);

    return pick.map((c) => ({
      ...c,
      items: (c.items ?? []).slice(0, 8),
    }));
  }, [ALL_CATEGORIES]);

  // Scroll shrink
  useEffect(() => {
    if (mobileOpen) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;

        // ✅ hysteresis: once shrunk, don't unshrink until we're REALLY at top
        setIsShrunk((prev) => {
          const SHRINK_AT = 40;   // shrink when going down past 40px
          const EXPAND_AT = 10;   // expand back only when under 10px

          const next = prev ? y > EXPAND_AT : y > SHRINK_AT;
          return next === prev ? prev : next;
        });

        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);


  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Close on outside click (desktop)
  useEffect(() => {
    const onClick = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) {
        setProductsOpen(false);
        setActiveCat(null);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Default active category when products opens
  useEffect(() => {
    if (productsOpen && !activeCat && NAV_CATEGORIES.length) {
      setActiveCat(NAV_CATEGORIES[0]);
    }
    if (!productsOpen) setActiveCat(null);
  }, [productsOpen, activeCat, NAV_CATEGORIES]);

  // Close desktop dropdown when mobile opens
  useEffect(() => {
    if (mobileOpen) {
      setProductsOpen(false);
      setActiveCat(null);
    }
  }, [mobileOpen]);

  const headerPad = isShrunk ? "py-2" : "py-4";
  const logoW = isShrunk ? "w-36" : "w-52";
  const btnSize = isShrunk ? "h-9 w-9" : "h-10 w-10";
  const headerPosition = mobileOpen ? "relative" : "sticky";

  return (
    <>
      <header
        ref={headerRef}
        className={`${headerPosition} top-0 z-50 border-b border-white/10 bg-red-800`}
      >
        <div className={`flex items-center px-4 ${headerPad} sm:px-6 lg:px-8`}>
          {/* LEFT – NAV LINKS (desktop) */}
          <nav className="hidden flex-1 items-center gap-8 text-sm uppercase tracking-wider text-white/90 md:flex">
            {NAV.map((item) => {
              if (item !== "Products") {
                return (
                  <Link
                    key={item}
                    href={(item) === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
                  >
                    {item}
                  </Link>
                );
              }

              // ✅ SIMPLE PRODUCTS DROPDOWN
              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                >

                  <button
                    type="button"
                    className="flex items-center gap-2 pb-1 text-[14px]"
                  >
                    PRODUCTS <FiChevronDown />
                  </button>

                  {productsOpen && (

                    <div
                      className="absolute left-0 top-full mt-2 flex"
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >

                      {/* Categories */}
                      <div className="w-64 bg-red-800 border border-white/20 rounded-l-md shadow-lg">

                        <ul>

                          {ALL_CATEGORIES.map((cat) => (

                            <li
                              key={cat.slug}
                              onMouseEnter={() => setActiveCat(cat)}
                              className="cursor-pointer"
                            >

                              <Link
                                href={`/products/${cat.slug}`}
                                className="block px-4 py-3 text-sm text-white hover:bg-red-700"
                              >

                                {cat.title}

                              </Link>

                            </li>

                          ))}

                        </ul>

                      </div>

                      {/* Products */}
                      <div className="w-64 bg-red-800 border border-white/20 rounded-r-md shadow-lg">

                        <ul>

                          {activeCat?.items?.map((p) => (

                            <li key={p.label}>

                              <Link
                                href={p.href}
                                className="block px-4 py-3 text-sm text-white hover:bg-red-700"
                              >

                                {p.label}

                              </Link>

                            </li>

                          ))}

                        </ul>

                      </div>

                    </div>

                  )}

                </div>
              );
            })}
          </nav>

          {/* CENTER – LOGO */}
          <div className="flex flex-1 items-center h-full justify-center">
            <Link href={"/"} className={`flex items-center gap-3 transition-all duration-200 ${logoW}`}>
              <img
                src="/logo.png"
                alt="One Nation Industry Logo"
                className="w-full object-contain"
              />
            </Link>
            <div className="mx-4 w-1 bg-white self-stretch"></div>
            <div>
              <h1 className={`lg:text-2xl text-md font-extrabold font-poppins ${isShrunk ? "hidden" : ""}`}>One Nation Industry</h1>
              <h1 className={`lg:text-xl text-md font-bold text-center italic`}>Join The Nation</h1>
            </div>
          </div>

          {/* RIGHT – ACTIONS */}
          <div className="flex flex-1 items-center justify-end gap-3">
            <button
              aria-label="Search"
              className={`hidden sm:flex ${btnSize} cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20`}
            >
              <FiSearch size={18} />
            </button>

            <button
              aria-label="Menu"
              className={`flex ${btnSize} items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20 md:hidden`}
              onClick={() => setMobileOpen(true)}
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div >
      </header >

      {/* ✅ MOBILE OVERLAY MENU (scrollable) */}
      {
        mobileOpen && (
          <div className="fixed inset-0 z-99 md:hidden">
            {/* Backdrop */}
            <button
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />

            <div className="absolute inset-x-0 top-0 h-screen bg-red-800">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <div className="w-40">
                  <img
                    src="/logo.png"
                    alt="One Nation Industry Logo"
                    className="w-full object-contain"
                  />
                </div>

                <button
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
                  onClick={() => setMobileOpen(false)}
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="h-[calc(100vh-73px)] overflow-y-auto overscroll-contain px-4 py-4">
                <div className="flex flex-col gap-2 text-sm uppercase tracking-wider text-white/90">
                  <Link
                    href="#"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    About
                  </Link>

                  {/* ✅ Products (only 5 categories + each nested 8 items) */}
                  <div className="rounded-xl border border-white/10 bg-white/5">
                    <div className="flex items-center justify-between px-4 py-3">
                      <span>Products</span>
                      <Link
                        href="/products"
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/90"
                        onClick={() => setMobileOpen(false)}
                      >
                        View All
                      </Link>
                    </div>

                    <div className="px-3 pb-3">
                      <div className="grid gap-2">
                        {NAV_CATEGORIES.map((cat) => (
                          <details open 
                            key={cat.title}
                            className="rounded-xl border border-white/10 bg-white/5"
                          >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-3">
                              <span className="flex items-center gap-3">
                                <span className="relative h-9 w-9 overflow-hidden rounded-lg border border-white/10">
                                  <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover"
                                    sizes="36px"
                                  />
                                </span>
                                <span className="text-[13px]">{cat.title}</span>
                              </span>

                              <span className="flex items-center gap-3">
                                {typeof cat.startingPrice === "number" ? (
                                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/90">
                                    From {money(cat.startingPrice)}
                                  </span>
                                ) : null}
                                <FiChevronDown className="opacity-90" />
                              </span>
                            </summary>

                            <div className="px-2 pb-2">
                              {(cat.items ?? []).slice(0, 8).map((it) => (
                                <Link
                                  key={it.href}
                                  href={it.href}
                                  className="flex items-center justify-between rounded-lg px-3 py-2 text-[13px] text-white/90 hover:bg-white/10"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <span className="flex items-center gap-3">
                                    <span className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/10">
                                      <Image
                                        src={it.image}
                                        alt={it.label}
                                        fill
                                        className="object-cover"
                                        sizes="32px"
                                      />
                                    </span>
                                    {it.label}
                                  </span>

                                  {typeof it.price === "number" ? (
                                    <span className="text-[12px] font-semibold text-white/70">
                                      {money(it.price)}
                                    </span>
                                  ) : null}
                                </Link>
                              ))}

                              <div className="px-2 pb-2 pt-1">
                                <Link
                                  href={`/products/${cat.slug}`}
                                  className="block rounded-lg px-3 py-2 text-[12px] text-white/70 hover:bg-white/10"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  View {cat.title} →
                                </Link>
                              </div>
                            </div>
                          </details>
                        ))}
                      </div>
                    </div>
                  </div>
                     <Link
                    href="/factory"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    Factory
                  </Link>
                  <Link
                    href="/inquiry"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    Inquiry
                  </Link>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs tracking-widest text-white/60">
                      © {new Date().getFullYear()} One Nation Industry
                    </p>
                    <p className="mt-1 text-[12px] normal-case tracking-normal text-white/70">
                      Showing <span className="text-white/90">5 featured</span> categories here.
                      Full list is on <span className="text-white/90">/products</span>.
                    </p>
                  </div>

                  <div className="h-6" />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}
