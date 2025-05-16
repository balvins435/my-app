"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software solutions for businesses — from idea to deployment.",
    image: "/services/software.jpg",
  },
  {
    title: "Web & Mobile Applications",
    description: "Building responsive, high-performance applications that scale with your business.",
    image: "/services/webapp.jpg",
  },
  {
    title: "IT Consulting",
    description: "Strategic guidance to help you leverage technology for business growth.",
    image: "/services/consulting.jpg",
  },
  {
    title: "Cybersecurity Services",
    description: "Secure your digital infrastructure with our comprehensive protection solutions.",
    image: "/services/cybersecurity.jpg",
  },
  {
    title: "Cloud Integration & Hosting",
    description: "Modernize with cloud-based platforms for efficiency, scalability, and agility.",
    image: "/services/cloud.jpg",
  },
  {
    title: "ERP System Implementation",
    description: "Streamline operations with integrated enterprise resource planning tools.",
    image: "/services/erp.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Header />

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="rounded"
                />
                <h2 className="text-xl font-semibold mt-4">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">Need a tailored IT solution?</h2>
        <p className="mt-2">We’re here to help you plan, build, and grow your digital presence.</p>
        <button className="mt-4 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
          Get In Touch
        </button>
      </section>

      <Footer />
    </div>
  );
}
