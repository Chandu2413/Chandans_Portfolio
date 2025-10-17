import React from "react";

function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">Contact Me</h2>
      <form className="max-w-3xl mx-auto flex flex-col space-y-6">
        <input type="text" placeholder="Name" className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"/>
        <input type="email" placeholder="Email" className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"/>
        <textarea placeholder="Message" rows="5" className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-400"/>
        <button type="submit" className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-semibold">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
