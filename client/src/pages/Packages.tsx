/*
 * Design: Dark Luxe Boutique — Art Deco Revival
 * Packages page with all event packages
 */

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const packages = [
  {
    id: "pup-ty-bash",
    name: "The Pup-ty Bash",
    subtitle: "For the member of the family with four legs",
    price: 325,
    features: [
      "Balloon Hoop or Arch",
      "12 Dog-Safe Pup-cakes",
      "12 Matching Cookies",
    ],
  },
  {
    id: "sweet-social",
    name: "The Sweet & Social",
    subtitle: "Perfect for life's most intimate milestones",
    price: 375,
    features: [
      "8ft Organic Balloon Garland",
      "Customized Easel Sign",
      "2 Dozen Luxury Treats",
    ],
  },
  {
    id: "fun-festivities",
    name: "The Fun & Festivities",
    subtitle: "The classic birthday, elevated",
    price: 450,
    features: [
      "1 Hour Professional Face Painting",
      "6ft Custom Balloon Backdrop",
      "2 Dozen Themed Cupcakes",
    ],
  },
  {
    id: "glam-glow-spa",
    name: "The Glam & Glow Spa",
    subtitle: "A boutique spa experience brought to your door",
    price: 550,
    features: [
      "Mini-Mani Station",
      "Glam Bar for Hair & Glitter",
      "Pink Lemonade Service",
    ],
  },
];

export default function Packages() {
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
              Our Packages
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
              Customizable <span className="text-primary italic">Packages</span>{" "}
              for Every Celebration
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Each package is customizable to match your vision. Choose from our
              popular options or build your own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pkg.subtitle}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-primary">
                      ${pkg.price}
                    </span>
                    <span className="text-sm text-muted-foreground">+</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:ladicrafti2025@gmail.com"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Book This Package
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Don't see what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We specialize in custom packages tailored to your unique needs and
              vision.
            </p>
            <a
              href="mailto:ladicrafti2025@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get Your Free Quote
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
