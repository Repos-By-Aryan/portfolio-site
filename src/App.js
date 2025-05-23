import React from "react";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "IconicFeed",
    description:
      "A near-complete property finder app built using Flutter, Firebase, and Provider state management. Features Firebase Auth, Realtime DB, search & filter functionality, and modular architecture.",
    status: "90% complete – testing phase",
    link: "https://github.com/Repos-By-Aryan/IconicFeed",
  },
  {
    title: "WhatsApp UI Clone",
    description:
      "A simple WhatsApp UI clone built in Flutter, demonstrating tab navigation, ListTiles, and status layout. Great for showcasing UI/UX skills.",
    status: "Completed (UI only)",
    link: "https://github.com/Repos-By-Aryan/whatsapp-ui",
  },
  {
    title: "E-Commerce App",
    description:
      "A cleanly structured e-commerce app using GetX state management. Built with reusable components, scalable architecture, and professional code practices.",
    status: "30% complete – in development",
    link: "https://github.com/Repos-By-Aryan/ecommerce-app",
  },
  {
    title: "Calculator App",
    description:
      "A basic calculator app built with Flutter supporting simple arithmetic operations. Emphasizes clean UI and Flutter layout skills.",
    status: "Completed",
    link: "https://github.com/Repos-By-Aryan/Calculator",
  },
];

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-purple-800">Aryan Kumar</h1>
        <p className="text-lg text-gray-700">
          Hi, I’m Aryan — a self-taught Flutter developer and BCA graduate from GGSIPU.
          I’ve worked on freelance projects, contributed to startups, and built apps like IconicFeed,
          WhatsApp UI Clone, and an E-commerce app using GetX. I specialize in scalable architecture,
          clean UI/UX, and state management using both Provider and GetX. With strong experience in Firebase
          integration, reusable components, and modular code, I focus on solving real-world problems through
          efficient and maintainable apps.
        </p>
      </motion.section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-5 shadow-xl hover:shadow-2xl transition duration-300 border border-purple-200 rounded-xl"
            >
              <h3 className="text-xl font-semibold text-purple-800">{project.title}</h3>
              <p className="text-gray-700 text-sm">{project.description}</p>
              <p className="text-xs text-green-600 font-medium">{project.status}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-2 w-full flex justify-center items-center border border-purple-300 text-purple-800 py-2 rounded-md hover:bg-purple-50 transition">
                  <Github className="w-4 h-4 mr-2" /> View on GitHub
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center pt-10"
      >
        <p className="text-sm text-gray-600">
          Made with ❤️ by Aryan Kumar • <a href="mailto:aryan@example.com" className="underline text-purple-700">Email Me</a>
        </p>
      </motion.section>
    </div>
  );
}