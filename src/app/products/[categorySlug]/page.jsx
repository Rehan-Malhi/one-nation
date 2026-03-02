import data from "@/data/products.json"
import ProductCard from "@/components/ProductCard"

export default async function CategoryPage({ params }) {

    const { categorySlug } = await params

    const products = data.products.filter(
        product => product.category === categorySlug
    )

    return (

        <div className="max-w-7xl mx-auto px-6 py-12">

            <h1 className="text-4xl text-black font-bold mb-10">
                {categorySlug}
            </h1>

            <div className="grid md:grid-cols-3 gap-8">

                {products.length > 0 ? (
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            category={categorySlug}
                        />
                    ))
                ) : (
                    <p>No products found</p>
                )}

            </div>

        </div>

    )
}