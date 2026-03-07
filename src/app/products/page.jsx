import data from "@/data/products.json"
import CategoryCard from "@/components/CategoryCard"

export default function ProductsPage() {

    return (

        <div className="max-w-7xl mx-auto px-6 py-12">

            <h1 className="text-4xl text-black font-bold mb-10 tracking-tight">
                Products
            </h1>

            <div className="grid md:grid-cols-3 gap-8">

                {data.categories.map((cat, idx) => (
                    <CategoryCard key={cat.id} category={cat} index={idx} />
                ))}

            </div>

        </div>

    )
}