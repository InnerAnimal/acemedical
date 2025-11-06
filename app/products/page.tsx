import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products, productCategories } from "@/lib/data/products";

export const metadata = {
  title: "Products | Ace Medical",
  description: "Browse our comprehensive selection of medical supplies and equipment including mobility aids, respiratory equipment, and more.",
};

export default function ProductsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Comprehensive medical supplies and equipment for all your healthcare needs
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {productCategories.map((category) => (
              <div
                key={category}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-blue-600"
              >
                <h3 className="font-semibold text-gray-800">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">All Products</h2>
          
          {productCategories.map((category) => {
            const categoryProducts = products.filter(p => p.category === category);
            
            return (
              <div key={category} className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProducts.map((product) => (
                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-gray-400 text-6xl">🏥</span>
                        </div>
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-500">
                          {product.category}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <Button variant="outline" className="w-full">
                          Request Quote
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don't See What You Need?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            We carry many more products than what's listed here. Contact us to discuss your specific needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
