import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400"
            >
              Have a project in mind? Let's discuss how we can work together.
            </motion.p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="email" className="flex gap-2 items-center text-gray-300 mb-2">
                <Mail size={16} />
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="flex gap-2 items-center text-gray-300 mb-2">
                <MessageSquare size={16} />
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}