// app/page.tsx or app/home/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white py-32"
        style={{ backgroundImage: "url('/hover1.jpg')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Empowering Your Digital Transformation</h1>
          <p className="text-xl mb-8">
            We deliver innovative software and IT solutions tailored for growth.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose UltraQuad?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div>
              <img src="/hero2.jpeg" alt="Custom Solutions" className="mx-auto mb-4 h-20" />
              <h3 className="text-xl font-semibold">Custom Solutions</h3>
              <p>We craft software that fits your business perfectly.</p>
            </div>
            <div>
              <img src="/hero-bg.jpeg" alt="Expert Team" className="mx-auto mb-4 h-20" />
              <h3 className="text-xl font-semibold">Expert Team</h3>
              <p>Our skilled developers and strategists deliver excellence.</p>
            </div>
            <div>
              <img src="/hover1.jpg" alt="Reliable Support" className="mx-auto mb-4 h-20" />
              <h3 className="text-xl font-semibold">Reliable Support</h3>
              <p>We support you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="mb-6 text-lg">Let&apos;s work together to bring your ideas to life.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100">
          Contact Us
        </button>
      </section>
      <Footer />
    </>
  );
}
