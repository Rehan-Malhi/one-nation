import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";
import { notFound } from "next/navigation";

function money(n) {
  return `$${n.toFixed(2)}`;
}

export default async function ItemPage({ params }) {
  // ✅ params is a Promise
  const { category, item } = await params;

  const cat = products.categories.find((c) => c.slug === category);
  if (!cat) return notFound();

  const it = cat.items.find((i) => i.itemSlug === item);
  if (!it) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      <Link href={`/products/${cat.slug}`} className="text-sm text-slate-600">
        ← Back to {cat.title}
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src={it.image} alt={it.label} fill className="object-cover" />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold">{it.label}</h1>
          <p className="mt-3 text-slate-600">{it.desc}</p>

          <p className="mt-4 text-lg font-bold">{money(it.price)}</p>

          <Link
            href="/get-a-quote"
            className="mt-6 inline-flex rounded-xl bg-black px-6 py-3 text-white font-bold"
          >
            Customize & Get Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
