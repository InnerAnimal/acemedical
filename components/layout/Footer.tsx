import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import { companyInfo } from "@/lib/data/company"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              {companyInfo.name}
            </h3>
            <p className="text-sm mb-4">{companyInfo.description}</p>
            <div className="flex gap-4">
              <a href={companyInfo.social.facebook} className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={companyInfo.social.instagram} className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={companyInfo.social.linkedin} className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>
                  {companyInfo.contact.address.street}<br />
                  {companyInfo.contact.address.city}, {companyInfo.contact.address.state} {companyInfo.contact.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href={`tel:${companyInfo.contact.phone}`} className="hover:text-white transition-colors">
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-white transition-colors">
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>{companyInfo.hours.weekday}</li>
              <li>{companyInfo.hours.saturday}</li>
              <li>{companyInfo.hours.sunday}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
