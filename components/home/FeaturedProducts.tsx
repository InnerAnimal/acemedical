import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getFeaturedProducts } from "@/lib/data/products"

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Medical Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our most popular medical supplies and equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-50 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-blue-600 text-6xl">🏥</span>
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {product.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
