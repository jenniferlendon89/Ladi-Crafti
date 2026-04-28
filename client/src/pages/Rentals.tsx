/*
 * Design: Dark Luxe Boutique — Art Deco Revival
 * Rentals page with party rental options
 */

import { motion } from "framer-motion";
import { Sparkles, Gift, Users, Music } from "lucide-react";

const rentalCategories = [
  {
    icon: Sparkles,
    title: "Balloon Installations",
    desc: "Custom balloon garlands, arches, backdrops, and installations for any celebration.",
  },
  {
    icon: Gift,
    title: "Decorations & Setup",
    desc: "Themed decorations, centerpieces, and full event setup and teardown.",
  },
  {
    icon: Users,
    title: "Entertainment",
    desc: "Professional face painting, glam services, and interactive entertainment.",
  },
  {
    icon: Music,
    title: "Catering Add-ons",
    desc: "Luxury treats, cupcakes, candy arrangements, and beverage service.",
  },
];

export default function Rentals() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Party Rentals
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
              Everything You Need to{" "}
              <span className="text-primary italic">Celebrate</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              From balloon installations to full event setup, we provide
              everything you need to create an unforgettable celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rental Categories */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {rentalCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/30 p-12 rounded-2xl border border-border/50"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
              Why Rent from Ladi Crafti?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Professional installation and setup",
                "Custom designs tailored to your event",
                "High-quality, premium materials",
                "Flexible rental periods and pricing",
                "Full event coordination available",
                "Cleanup and teardown included",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Event?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let's discuss your rental needs and create something spectacular
              together.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:3302771019"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Call to Discuss
              </a>
              <a
                href="mailto:ladicrafti2025@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
