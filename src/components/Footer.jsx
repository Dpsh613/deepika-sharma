import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Switched to FaInstagram for a cleaner look
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const neobrutaContainer =
  "border-2 border-slate-900 rounded-2xl shadow-[6px_6px_0px_#0f172a]";
const neobrutaBtn =
  "border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:shadow-inner";

const socialLinks = [
  {
    name: "GitHub",
    handle: "Dpsh613",
    icon: <FaGithub size={22} />,
    link: "https://github.com/Dpsh613",
    hoverBg: "#fdf4ff", // fuchsia-50
    accent: "#d946ef", // fuchsia-500
  },
  {
    name: "LinkedIn",
    handle: "deepika-sharma",
    icon: <FaLinkedin size={22} />,
    link: "https://www.linkedin.com/in/deepika-sharma-a55753409",
    hoverBg: "#ecfeff", // cyan-50
    accent: "#06b6d4", // cyan-500
  },
  {
    name: "Instagram",
    handle: "@_ds_7420",
    icon: <FaInstagram size={22} />,
    link: "https://instagram.com/_ds_7420",
    hoverBg: "#fff1f2", // rose-50
    accent: "#f43f5e", // rose-500
  },
];

export default function Footer() {
  return (
    <footer className="pt-24 bg-rose-300 border-t-4 border-slate-900 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 pb-20 border-b-2 border-slate-900/20">
          {/* Left Side: The Hook */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-slate-900 mb-8">
              Let's build <br />
              <span className="text-white drop-shadow-[3px_3px_0px_rgba(15,23,42,1)]">
                amazing
              </span>
              <br /> stuff.
            </h2>

            <motion.p
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="text-xl md:text-2xl font-bold bg-white px-6 py-4 border-2 border-slate-900 rounded-2xl w-fit shadow-[6px_6px_0px_#0f172a] -rotate-1 cursor-default transition-transform"
            >
              Open to collaborations & roles.
            </motion.p>

            <p className="font-bold text-lg mt-10 text-rose-950 max-w-md leading-relaxed">
              Have a project in mind? Drop me a line — I usually reply faster
              than a hot-reload. ⚡
            </p>
          </motion.div>

          {/* Right Side: The Interactive Board */}
          <div className="flex flex-col gap-6">
            {/* Giant Email CTA */}
            <motion.a
              href="mailto:dpsh07@gmail.com"
              whileHover={{ scale: 1.02, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className={`block bg-yellow-200 text-center py-8 text-3xl font-black uppercase tracking-tight group relative ${neobrutaBtn}`}
            >
              <span className="relative z-10">Say hello</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity" />
            </motion.a>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <div
                className={`p-4 bg-white font-bold flex flex-col justify-between h-32 ${neobrutaContainer} shadow-none`}
              >
                <span className="text-slate-400 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                  <Mail size={14} strokeWidth={3} /> Email
                </span>
                <span className="text-lg break-all text-slate-900">
                  dpsh07@gmail.com
                </span>
              </div>

              {/* Location Card */}
              <div
                className={`p-4 bg-white font-bold flex flex-col justify-between h-32 ${neobrutaContainer} shadow-none`}
              >
                <span className="text-slate-400 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                  <MapPin size={14} strokeWidth={3} /> Location
                </span>
                <span className="text-lg text-slate-900">Delhi, India 🇮🇳</span>
              </div>

              {/* Social Links Mapping */}
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ backgroundColor: "#ffffff" }}
                  whileHover={{
                    backgroundColor: social.hoverBg,
                    rotate: i % 2 === 0 ? 2 : -2,
                    y: -5,
                    boxShadow: "8px 8px 0px #0f172a",
                  }}
                  className="p-4 font-bold flex flex-col justify-between h-32 border-2 border-slate-900 rounded-2xl transition-shadow group shadow-none"
                >
                  <div className="flex justify-between items-start text-slate-400 group-hover:text-slate-900 transition-colors">
                    <span className="uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                      {social.icon} {social.name}
                    </span>
                    <ArrowUpRight size={18} strokeWidth={3} />
                  </div>
                  <span className="text-lg text-slate-900">
                    {social.handle}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center font-bold text-rose-950 gap-8">
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-black shrink-0 border-2 border-white">
              D.
            </div>
            <div className="text-xs md:text-sm uppercase tracking-wider leading-tight">
              Junior Web Developer crafting AI experiences from <br />
              <span className="bg-white text-slate-900 px-1 italic">
                Delhi, India.
              </span>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-1 opacity-70">
            <p className="text-xs uppercase tracking-[0.2em]">
              © 2026 Deepika Sharma
            </p>
            <p className="text-sm italic">
              Powered by caffeine and questionable decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
