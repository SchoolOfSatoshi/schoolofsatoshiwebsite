// import "./globals.css";
 /* eslint-disable react/no-unescaped-entities */
import "../app/globals.css";
import Layout from "../app/components/Layout";
import AboutUs from "./components/AboutUs";
import WhyBitcoin from "./components/WhyBitcoin";
import PastCohorts from "./components/PastCohorts";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Layout>

      <Hero/>
      <AboutUs/>
      <WhyBitcoin/>
      <PastCohorts/>
      <Testimonials/>

    </Layout>
  );
}




// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
      {/* Hero Section */}
      {/* <section className="bg-custom-yellow py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Empowering Local Bitcoin Education</h2>
          <p className="text-lg mb-6">
            Learn Bitcoin and blockchain in your native language. Join the movement today!
          </p>
          <a
            href="#features"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Native Languages</h4>
              <p>
                Education in Uganda's local languages to make Bitcoin accessible for everyone.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Interactive Learning</h4>
              <p>
                Hands-on courses and workshops to help you understand blockchain concepts.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Community Support</h4>
              <p>
                Join a network of learners and mentors to grow your Bitcoin knowledge.
              </p>
            </div>
          </div>
        </div>
      </section> */}