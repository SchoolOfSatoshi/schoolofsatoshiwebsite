import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About Us - School of Satoshi">
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-center">
            The School of Satoshi is dedicated to making Bitcoin education accessible to everyone,
            especially in local languages. Our mission is to empower communities through blockchain
            knowledge.
          </p>
        </div>
      </section>
    </Layout>
  );
}