import Link from "next/link"
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Medical Supply Partner
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Providing quality medical equipment and supplies to the Greater New Orleans area for over 20 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-white text-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Quality Guaranteed</h3>
                <p className="text-sm text-gray-600">Certified medical equipment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Expert Support</h3>
                <p className="text-sm text-gray-600">Knowledgeable staff ready to help</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Quick service throughout New Orleans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
