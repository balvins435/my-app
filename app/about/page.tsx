import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Github, Linkedin } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a dynamic IT company committed to delivering innovative digital solutions that help businesses thrive in the modern world.
            With a team of passionate professionals, we specialize in software development, enterprise systems, and digital transformation services.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our mission is to empower organizations with scalable, efficient, and secure solutions tailored to meet their unique challenges.
            Whether it’s a startup or an enterprise, we partner with our clients to turn ideas into impactful technology.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Kiplangat',
                title: 'Lead Developer',
                image: '/team1.jpg',
                desc: 'Full-stack developer passionate about clean code and innovation.',
                linkedin: 'https://linkedin.com/in/kiplangat',
                github: 'https://github.com/kiplangat',
              },
              {
                name: 'Mark',
                title: 'UI/UX Designer',
                image: '/team2.jpg',
                desc: 'Designs intuitive interfaces that elevate user experience.',
                linkedin: 'https://linkedin.com/in/brian',
                github: 'https://github.com/brian',
              },
              {
                name: 'Frank',
                title: 'Project Manager',
                image: '/team3.jpg',
                desc: 'Ensures smooth execution and timely delivery of all our projects.',
                linkedin: 'https://linkedin.com/in/sharon',
                github: 'https://github.com/sharon',
              },
              {
                name: 'Jethro',
                title: 'QA Engineer',
                image: '/team4.jpg',
                desc: 'Passionate about quality and breaking bugs before users do.',
                linkedin: 'https://linkedin.com/in/linda',
                github: 'https://github.com/linda',
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-xl text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600">{member.title}</p>
                <p className="text-sm text-gray-600 mt-2">{member.desc}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-gray-700 hover:text-black" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
