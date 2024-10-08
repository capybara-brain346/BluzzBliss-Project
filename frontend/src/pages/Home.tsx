
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <section className="text-center mb-16 py-12">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to BuzzBliss</h1>
          <p className="text-2xl text-gray-300 mb-8">Join us on this exciting journey.</p>
          <div className="space-x-4">
            <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
              Get Started
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center py-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">About BuzzBliss</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              BuzzBliss is an engaging platform designed for blogging enthusiasts to share their thoughts, ideas, and stories with a vibrant community. It offers a seamless experience for posting and discovering a variety of blog content. With an intuitive interface and powerful features, BuzzBliss enables users to create, edit, and publish their blogs effortlessly, while also interacting with fellow bloggers through comments and shares. Whether you're a seasoned writer or a casual blogger, BuzzBliss is your go-to space for expressing yourself and connecting with others who share your passion for writing.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
