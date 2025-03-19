import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <h3 className="text-2xl text-gray-400 mb-12">Get In Touch</h3>
      <div className="max-w-xl">
        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
