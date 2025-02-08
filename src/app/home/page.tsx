 /* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-yellow-300 py-20">
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
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
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
      </section>
    </Layout>
  );
}















// import Head from "next/head";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>School of Satoshi</title>
//         <meta name="description" content="Empowering local Bitcoin education" />
//       </Head>
//       <main className="min-h-screen bg-gray-100">
//         {/* Header Section */}
//         <header className="bg-blue-900 text-white py-6">
//           <div className="container mx-auto px-4 flex justify-between items-center">
//             <h1 className="text-3xl font-bold">School of Satoshi</h1>
//             <nav>
//               <ul className="flex space-x-6">
//                 <li>
//                   <a href="#about" className="hover:underline">
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#features" className="hover:underline">
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#contact" className="hover:underline">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </header>

//         {/* Hero Section */}
//         <section className="bg-yellow-300 py-20">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-4xl font-bold mb-4">Empowering Local Bitcoin Education</h2>
//             <p className="text-lg mb-6">
//               Learn Bitcoin and blockchain in your native language. Join the movement today!
//             </p>
//             <a
//               href="#features"
//               className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
//             >
//               Get Started
//             </a>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="py-16 bg-gray-100">
//           <div className="container mx-auto px-4">
//             <h3 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//                 <h4 className="text-xl font-bold mb-2">Native Languages</h4>
//                 <p>
//                   Education in Uganda's local languages to make Bitcoin accessible for everyone.
//                 </p>
//               </div>
//               <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//                 <h4 className="text-xl font-bold mb-2">Interactive Learning</h4>
//                 <p>
//                   Hands-on courses and workshops to help you understand blockchain concepts.
//                 </p>
//               </div>
//               <div className="bg-white shadow-lg rounded-lg p-6 text-center">
//                 <h4 className="text-xl font-bold mb-2">Community Support</h4>
//                 <p>
//                   Join a network of learners and mentors to grow your Bitcoin knowledge.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section id="contact" className="py-16 bg-blue-900 text-white">
//           <div className="container mx-auto px-4 text-center">
//             <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
//             <p className="mb-6">Have questions? We're here to help.</p>
//             <a
//               href="mailto:info@schoolofsatoshi.com"
//               className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500"
//             >
//               Contact Us
//             </a>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-4 text-center">
//         <p>© 2025 School of Satoshi. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }
