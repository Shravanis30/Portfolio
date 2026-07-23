import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '/api/contact';
      const res = await axios.post(apiUrl, formData);
      setStatus({ type: 'success', msg: res.data.msg || 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      const errorMsg = err.response?.data?.msg || 'An error occurred. Please try again later.';
      setStatus({ type: 'error', msg: errorMsg });
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-4"
          >
            Say Hello
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-black tracking-tight"
          >
            <span className="text-white">Get In </span>
            <span className="text-[#e8c872]">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Let's connect & <br/><span className="text-[#e8c872]">collaborate.</span></h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-lg">
              I'm actively looking for internships, freelance projects, and full-time roles in software development. 
              Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#161616] border border-white/5 flex items-center justify-center text-[#e8c872] group-hover:border-[#e8c872]/40 transition-all duration-300">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1">Email Me</p>
                  <a href="mailto:salunkeshravani561@gmail.com" className="text-xl text-white font-bold hover:text-[#e8c872] transition-colors tracking-tight">
                    salunkeshravani561@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#161616] border border-white/5 flex items-center justify-center text-[#e8c872] group-hover:border-[#e8c872]/40 transition-all duration-300">
                  <FaPhoneAlt size={22} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1">Call Me</p>
                  <a href="tel:+918208305822" className="text-xl text-white font-bold hover:text-[#e8c872] transition-colors tracking-tight">
                    +91 8208305822
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-[#161616] border border-white/5 flex items-center justify-center text-[#e8c872] group-hover:border-[#e8c872]/40 transition-all duration-300">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1">Location</p>
                  <span className="text-xl text-white font-bold tracking-tight">Maharashtra, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#161616] border border-white/5 p-10 md:p-12 rounded-3xl shadow-2xl relative group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaPaperPlane size={100} className="text-[#e8c872]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {status.msg && (
                <div className={`p-4 rounded-xl text-xs font-bold uppercase tracking-widest ${status.type === 'success' ? 'bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                  {status.msg}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#e8c872]/50 transition-all font-semibold"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#e8c872]/50 transition-all font-semibold"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#e8c872]/50 transition-all font-semibold resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 rounded-fill bg-gradient-to-r from-[#fde047] to-[#e8c872] text-[#0d0d0d] font-black text-xs tracking-[0.2em] rounded-full hover:shadow-[0_0_20px_rgba(232,200,114,0.4)] transition-all uppercase flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? 'SENDING...' : (
                  <>
                    SEND MESSAGE <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
