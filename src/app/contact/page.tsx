/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact Us - School of Satoshi">
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-6">Have questions? We're here to help.</p>
          <a
            href="mailto:info@schoolofsatoshi.com"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500"
          >
            Email Us
          </a>
        </div>
      </section>
    </Layout>
  );
}