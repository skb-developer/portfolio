/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  CheckCircle2,
  Database,
  Store,
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  MapPin,
  ClipboardCheck,
  Bell,
  Monitor,
  Zap,
  Globe,
  Settings,
  ChevronRight,
  Menu,
  X,
  ShieldCheck
} from "lucide-react";
import { PROJECTS, CORE_AREAS, ARCHITECTURE_FLOW } from "./constants.js";

const IconMap = {
  Store, ShoppingCart, CreditCard, Package, Truck, MapPin, ClipboardCheck, Bell, Database
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle sticky header and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['stack', 'systems', 'work', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Stack", id: "stack" },
    { name: "Systems", id: "systems" },
    { name: "Portfolio", id: "work" },
    { name: "Process", id: "process" }
  ];

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary/20 flex flex-col font-sans bg-[#f8f9fa] text-[#1a1a1a] scroll-smooth">
      {/* Navigation / Header */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white border-b border-border py-3 shadow-md' : 'bg-white/70 backdrop-blur-md py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={(e) => smoothScroll(e, 'root')}>
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
              SK
            </div>
            <div>
              <div className="font-bold text-base leading-none">Shishant Kumar</div>
              <div className="text-[10px] text-muted font-bold uppercase tracking-widest mt-1 opacity-70">Infrastructure Specialist</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex gap-10 text-[11px] font-bold uppercase tracking-widest text-muted">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => smoothScroll(e, link.id)}
                  className={`transition-all relative py-1 hover:text-primary ${activeSection === link.id ? 'text-primary' : ''}`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </a>
              ))}
            </nav>
            <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="cta-btn !px-7 !py-3 shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-95 transition-all">
              Work With Me
            </a>
          </div>

          <button className="lg:hidden text-ink p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden overflow-hidden"
          >
            <div className="h-full flex flex-col pt-32 px-10 gap-10">
              <div className="text-[10px] font-bold text-muted uppercase tracking-[0.3em] mb-4">Navigation</div>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => smoothScroll(e, link.id)}
                  className="text-4xl font-bold tracking-tighter hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" size={32} />
                </a>
              ))}
              <div className="mt-auto pb-20">
                <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="cta-btn w-full text-center block !py-5 text-lg">
                  Hire Me Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24 md:pt-32">
        {/* Section 1: Hero */}
        <section id="root" className="max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-[1.2]"
            >
              <span className="accent-tag !px-4 !py-1.5 !rounded-full">Real Systems • No Fluff</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                The Complete <br />
                <span className="text-primary italic font-medium">Technical Backbone</span> <br />
                for D2C Scale
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10 opacity-80">
                Enterprise-grade Shopify infrastructure, automated supply chain integrations, and bulletproof payment workflows. Engineered for 99.9% operational stability.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#work" onClick={(e) => smoothScroll(e, 'work')} className="cta-btn flex items-center gap-3 !px-8 !py-4 shadow-xl shadow-primary/10 hover:shadow-primary/30 group">
                  Systems Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="cta-outline !px-8 !py-4 hover:border-primary/40">Audit My Store</a>
              </div>
            </motion.div>

            <div className="flex-1 hidden lg:grid grid-cols-2 gap-6 relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <motion.div
                whileHover={{ y: -5 }}
                className="card bg-white border-2 border-border/50 p-8"
              >
                <div className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-4">Infrastructure Needs</div>
                <div className="space-y-4">
                  {['Zero to One Setup', 'System Audit', 'API Cleanup', 'Automation'].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-semibold">
                      <CheckCircle2 size={16} className="text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="card border-primary/20 bg-primary/5 p-8 flex flex-col justify-end"
              >
                <Database className="text-primary mb-4" size={32} />
                <div className="text-xl font-bold mb-2">99.9% Uptime</div>
                <p className="text-xs text-muted leading-relaxed font-medium">Failsafe delivery integrations and automated backend loops.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Layout Mix - Stack & Systems */}
        <section id="stack" className="bg-white border-y border-border py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* Stack Detail */}
              <div className="lg:col-span-4 self-start lg:sticky lg:top-32">
                <h3 className="text-3xl font-bold mb-8">Deployment <br />Capabilities</h3>
                <p className="text-muted text-sm mb-10 leading-relaxed max-w-sm">Every brand needs a robust engine. I implement the following system components with absolute precision.</p>
                <div className="space-y-1">
                  {CORE_AREAS.map((area, idx) => (
                    <div key={idx} className="stack-item !py-3 font-semibold hover:pl-2 transition-all">
                      <div className="stack-dot !w-2 !h-2"></div>
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Flow */}
              <div id="systems" className="lg:col-span-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-12 gap-4">
                  <h3 className="text-3xl font-bold">The Infrastructure Lifecycle</h3>
                  <div className="px-4 py-1 bg-[#f1f5f9] rounded-full text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Operational Blueprint</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ARCHITECTURE_FLOW.map((item, idx) => {
                    const Icon = IconMap[item.icon];
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-[#f8f9fa] border border-border p-5 rounded-xl flex items-center gap-5 group hover:border-primary transition-all relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-12 -translate-y-12 shrink-0 group-hover:scale-110 transition-transform"></div>
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-muted uppercase tracking-[0.1em] mb-0.5">{item.step}</div>
                          <div className="font-bold text-sm">{item.desc}</div>
                        </div>
                        {idx < ARCHITECTURE_FLOW.length - 1 && (
                          <div className="hidden lg:block absolute -bottom-2 -right-2 text-border">
                            <ChevronRight size={24} />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-12 p-8 bg-ink rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Need a Custom Interface?</h4>
                    <p className="text-white/60 text-sm">I develop headless Shopify front-ends using Hydrogen / Oxygen for peak performance.</p>
                  </div>
                  <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="cta-btn !bg-white !text-ink whitespace-nowrap !px-8">Get Expert Advice</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Portfolio */}
        <section id="work" className="py-24 md:py-32 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-4xl font-bold mb-3 tracking-tighter">Production-Grade Implementations</h3>
                <p className="text-muted font-medium">Real stores. Real traffic. Real stability.</p>
              </div>
              <div className="flex justify-center gap-3">
                <span className="flex items-center gap-2 text-xs font-bold text-muted bg-white border border-border px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> INFRASTRUCTURE VERIFIED
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-border p-8 rounded-2xl group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">{project.name}</span>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-50 rounded-lg group-hover:text-primary transition-all">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <div className="font-bold text-xl mb-4 group-hover:text-primary transition-colors h-14 overflow-hidden line-clamp-2 leading-tight">
                    {project.url.replace('https://', '').replace('/', '')}
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-10 opacity-80 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-bold text-muted bg-[#f1f5f9] px-2 py-1 rounded tracking-widest uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Process */}
        <section id="process" className="py-24 bg-white border-y border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-20">
              <span className="accent-tag !mx-auto">Engineering Phase</span>
              <h3 className="text-4xl font-bold mt-4">Calculated Execution</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              <div className="hidden lg:block absolute top-[25px] left-32 right-32 h-[1px] bg-border -z-10"></div>
              {[
                { title: "Audit", desc: "Technical system mapping" },
                { title: "Blueprint", desc: "Scalable architecture plan" },
                { title: "Deploy", desc: "Production implementation" },
                { title: "Stabilize", desc: "Failsafe testing & handover" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-border flex items-center justify-center font-bold text-lg group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-xs text-muted uppercase font-bold tracking-widest">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Final CTA & Contact */}
        <section id="contact" className="py-24 md:py-40 bg-[#f8f9fa] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 origin-top"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="accent-tag">Deployment Window Open</span>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter">Ready for a <br /> System Upgrade?</h2>
                <p className="text-xl text-muted leading-relaxed mb-12 max-w-lg">
                  Submit your brand details for a complimentary 15-minute infrastructure audit. Let's find your technical roadblocks.
                </p>

                <div className="flex gap-12">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">5+</div>
                    <div className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Years Deep</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">11+</div>
                    <div className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Core Systems</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Stability Target</div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5 border border-border"
              >
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Audit scheduled. Systems audit will be sent to your email.");
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2.5">Brand Name</label>
                      <input type="text" required className="w-full bg-[#f8f9fa] border-2 border-transparent rounded-xl px-5 py-4 text-sm font-semibold focus:border-primary focus:bg-white outline-none transition-all" placeholder="Enter Brand" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2.5">Email</label>
                      <input type="email" required className="w-full bg-[#f8f9fa] border-2 border-transparent rounded-xl px-5 py-4 text-sm font-semibold focus:border-primary focus:bg-white outline-none transition-all" placeholder="founder@brand.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-2.5">What's the Current Stack?</label>
                    <textarea className="w-full bg-[#f8f9fa] border-2 border-transparent rounded-xl px-5 py-4 text-sm font-semibold focus:border-primary focus:bg-white outline-none transition-all min-h-[120px] resize-none" placeholder="e.g. Shopify, Shiprocket, Klaviyo..."></textarea>
                  </div>
                  <button type="submit" className="w-full cta-btn !py-5 text-base shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                    Send Audit Request
                  </button>
                  <div className="text-center">
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest inline-flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> System check passing
                    </span>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl">SK</div>
              <div>
                <div className="font-bold text-lg leading-none">Shishant Kumar</div>
                <div className="text-[10px] text-muted font-bold uppercase tracking-widest mt-1 opacity-70">Infrastructure Specialist</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-4 text-[11px] font-bold text-muted uppercase tracking-[0.3em]">
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            </div>

            <div className="text-[10px] font-bold text-muted opacity-50 uppercase tracking-[0.3em]">
              &copy; 2024 Build Engine
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
