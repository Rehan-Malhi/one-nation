import data from "@/data/products.json"
import ImageModal from "./ImageModal"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ProductPage({ params }) {

    const { categorySlug, productSlug } = await params

    const product = data.products.find(
        p =>
            p.slug === productSlug &&
            p.category === categorySlug
    )

    if (!product) {
        return notFound()
    }

    return (

        <div className="max-w-6xl mx-auto bg-white px-6 py-12">

            <h1 className="text-4xl text-black font-bold mb-6">
                {product.title}
            </h1>

            <div className="grid md:grid-cols-2 gap-10 mt-16">

                <ImageModal image={product.image} />

                <div>

                    <h2 className="text-3xl text-black font-semibold mb-4">
                        Product Details
                    </h2>

                    <p className="text-gray-600 text-lg">
                        {product.description}
                    </p>
                    <div className="flex gap-4 mt-8">
                        <a
                            className="bg-green-500 text-white px-6 py-3 rounded-lg"
                            href="https://wa.me/923036835366?text=I%20want%20to%20order%20this%20product"
                        >
                            WhatsApp
                        </a>

                        <Link
                        href={"/inquiry"}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                        >
                            Get Quote
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    )
}