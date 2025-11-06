import { Zap, Settings, Wrench, GraduationCap, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Technology & Services | Ace Medical",
  description: "Advanced medical technology solutions, equipment installation, maintenance services, and training programs.",
};

export default function TechnologyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Technology Solutions</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl">
            Advanced equipment and comprehensive support services for healthcare providers
          </p>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Advanced Diagnostics</CardTitle>
                <CardDescription>State-of-the-art diagnostic equipment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Digital blood pressure monitors</li>
                  <li>• Pulse oximeters</li>
                  <li>• Glucose monitoring systems</li>
                  <li>• Thermometry equipment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Respiratory Technology</CardTitle>
                <CardDescription>Advanced breathing support systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• CPAP/BiPAP machines</li>
                  <li>• Oxygen concentrators</li>
                  <li>• Nebulizer systems</li>
                  <li>• Ventilators</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Mobility Solutions</CardTitle>
                <CardDescription>Cutting-edge mobility technology</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Power wheelchairs</li>
                  <li>• Motorized scooters</li>
                  <li>• Stair lifts</li>
                  <li>• Patient lift systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Settings className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Installation</h3>
              <p className="text-gray-600">
                Professional setup and installation of all medical equipment to ensure proper function and safety
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Wrench className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
              <p className="text-gray-600">
                Regular maintenance and repair services to keep your equipment running smoothly and safely
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <GraduationCap className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Training</h3>
              <p className="text-gray-600">
                Comprehensive training programs for patients, caregivers, and healthcare professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Technology Partnerships</h2>
            <p className="text-lg text-gray-700 mb-8">
              We partner with leading medical equipment manufacturers to bring you the latest 
              innovations in healthcare technology. Our partnerships ensure you receive:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Latest Technology</h4>
                  <p className="text-gray-600">Access to cutting-edge medical equipment and innovations</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Manufacturer Support</h4>
                  <p className="text-gray-600">Direct support and warranty coverage from manufacturers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-gray-600">Certified equipment meeting all safety and quality standards</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Expert Training</h4>
                  <p className="text-gray-600">Manufacturer-certified training and support programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Upgrade Your Medical Technology?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let's discuss how our technology solutions can improve patient care and outcomes
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="/contact">Schedule a Consultation</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
