import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

function money(n) {
  if (typeof n !== "number") return "";
  return `$${n.toFixed(2)}`;
}

export default function ProductsPage() {
  const categories = products?.categories ?? [];

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Products
        </h1>
        <p className="mt-2 max-w-2xl text-base text-slate-600">
          Browse all categories. Click any category to view all items and pricing.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.slug || cat.href || cat.title}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-[320px] w-full overflow-hidden">
              <Image
                src={cat.image || "/mock.png"}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                {cat.items?.length || 0} items
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold text-slate-900">
                  {cat.title}
                </h3>

                {typeof cat.startingPrice === "number" ? (
                  <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    From {money(cat.startingPrice)}
                  </span>
                ) : null}
              </div>

              <p className="mt-2 text-sm text-slate-600">{cat.desc}</p>

              <Link
                href={`/products/${cat.slug}`}
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-black"
              >
                View Category
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
