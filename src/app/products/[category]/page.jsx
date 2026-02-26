import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";
import { notFound } from "next/navigation";

function money(n) {
  if (typeof n !== "number") return "";
  return `$${n.toFixed(2)}`;
}

// ✅ MUST be async in Next 16
export default async function CategoryPage({ params }) {
  // ✅ params is a Promise → await it
  const { category } = await params;

  if (!category) return notFound();

  const cat = products.categories.find((c) => c.slug === category);
  if (!cat) return notFound();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Link
            href="/products"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            ← Back to Products
          </Link>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {cat.title}
          </h1>

          <p className="mt-2 max-w-2xl text-base text-slate-600">{cat.desc}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
              {cat.items.length} items
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
              Starting from {money(cat.startingPrice)}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cat.items.map((item) => (
          <div
            key={item.itemSlug}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-[280px] w-full overflow-hidden">
              <Image
                src={item.image || "/mock.png"}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-[1.05] transition"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-extrabold text-slate-900">
                {item.label}
              </h3>

              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>

              <Link
                href={`/products/${cat.slug}/${item.itemSlug}`}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-black"
              >
                View Item
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
