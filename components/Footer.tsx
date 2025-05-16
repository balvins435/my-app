// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">UltraQuad</h2>
          <p className="text-sm">
            Delivering modern IT solutions to help businesses thrive through innovation and technology.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Custom Software</li>
            <li>ERP Systems</li>
            <li>Web & Mobile Apps</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@ultraquad.com</li>
            <li>Phone: +254 712 345 678</li>
            <li>Location: Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} UltraQuad. All rights reserved.
      </div>
    </footer>
  );
}
