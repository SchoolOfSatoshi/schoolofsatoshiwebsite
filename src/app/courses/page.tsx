import Layout from "../components/Layout";

export default function Courses() {
  return (
    <Layout title="Courses - School of Satoshi">
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Bitcoin Basics</h3>
              <p>Learn the fundamentals of Bitcoin and blockchain technology.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Advanced Blockchain</h3>
              <p>Dive deeper into smart contracts, DeFi, and more.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Mining & Security</h3>
              <p>Understand Bitcoin mining and how to secure your assets.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}