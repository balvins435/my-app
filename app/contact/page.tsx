import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <p className="mb-4 text-lg">We’d love to hear from you. Reach out through any of the channels below:</p>

        <ul className="text-lg space-y-2">
          <li><strong>Email:</strong> info@yourstartup.com</li>
          <li><strong>Phone:</strong> +254 712 345 678</li>
          <li><strong>Address:</strong> Tech Hub Building, Nairobi, Kenya</li>
        </ul>

        <form className="mt-8 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-2 rounded h-32" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
