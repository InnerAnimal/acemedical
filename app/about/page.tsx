import { Award, Heart, Target, Users } from "lucide-react";
import { companyInfo } from "@/lib/data/company";

export const metadata = {
  title: "About Us | Ace Medical",
  description: "Learn about Ace Medical, our mission, and our commitment to providing quality medical supplies to the Greater New Orleans area.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Ace Medical</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Serving the Greater New Orleans community with quality medical supplies and exceptional service.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-4">
                Founded by Les Kittrel, Ace Medical has been a trusted provider of medical supplies and equipment 
                in the Greater New Orleans area for over two decades. Our commitment to quality products and 
                exceptional customer service has made us a preferred partner for individuals, healthcare facilities, 
                and medical professionals throughout the region.
              </p>
              <p className="text-gray-700 mb-4">
                We understand that medical equipment and supplies are more than just products – they're essential 
                tools that improve quality of life and enable independence. That's why we take the time to 
                understand each customer's unique needs and provide personalized recommendations and support.
              </p>
              <p className="text-gray-700">
                Based in Metairie, Louisiana, we're proud to serve the entire Greater New Orleans metro area, 
                including Jefferson Parish and Orleans Parish. Our local presence means fast delivery, 
                personalized service, and a deep understanding of our community's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">
                We care deeply about the wellbeing of every customer we serve
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We provide only the highest quality medical equipment and supplies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-gray-600">
                Exceptional customer service is at the heart of everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our dealings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-6xl">👤</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Meet Les Kittrel</h2>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Owner & Founder</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  Les Kittrel founded Ace Medical with a vision to provide the Greater New Orleans 
                  community with access to quality medical supplies and personalized service. With 
                  decades of experience in the medical supply industry, Les brings deep expertise 
                  and a genuine commitment to helping people improve their quality of life.
                </p>
                <p className="text-gray-700">
                  Under Les's leadership, Ace Medical has grown to become a trusted name in medical 
                  supplies throughout the region, known for reliability, quality products, and 
                  exceptional customer care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Service Area</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Proudly serving the Greater New Orleans metropolitan area
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {companyInfo.serviceArea.map((area) => (
              <span
                key={area}
                className="bg-white px-6 py-3 rounded-full text-gray-700 font-medium shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
