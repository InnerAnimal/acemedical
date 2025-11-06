import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      
      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Contact us today to discuss your medical supply needs. Our expert team is ready to help you find the right solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </a>
            <a
              href="tel:(504)XXX-XXXX"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
