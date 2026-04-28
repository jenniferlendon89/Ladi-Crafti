/*
 * Design: Dark Luxe Boutique — Art Deco Revival
 * Colors: near-black bg, rose-pink primary, gold accents, cream text
 * Typography: Playfair Display (serif) + DM Sans (sans)
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { Heart, Star, Palette, Sparkles, ArrowRight, Gift, Phone, Check } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { sweetTreats, mothersDayProducts, graduationProducts } from "@/lib/products";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435458667/MjhFGKw2MXYquUAiTQcN9F/hero-banner-JM8pa7UT9bMZx6iBXDUX3P.webp";

const features = [
  {
    icon: Heart,
    title: "One-Stop Shop",
    desc: "No more driving across town. We handle balloons, cakes, rentals, and entertainment.",
  },
  {
    icon: Star,
    title: "Professional Artistry",
    desc: "High-end face painting, Instagram-ready balloon installations, and luxury design.",
  },
  {
    icon: Palette,
    title: "Custom for Every Niche",
    desc: "Specialized packages for kids, bridal showers, weddings, special needs, and even your furry friends.",
  },
  {
    icon: Sparkles,
    title: "Worry-Free Experience",
    desc: "Setup, entertainment, and cleanup handled. You stay present for your celebration.",
  },
];

const packages = [
  {
    id: "pup-ty-bash",
    name: "The Pup-ty Bash",
    subtitle: "For the member of the family with four legs",
    price: 325,
    features: ["Balloon Hoop or Arch", "12 Dog-Safe Pup-cakes", "12 Matching Cookies"],
  },
  {
    id: "sweet-social",
    name: "The Sweet & Social",
    subtitle: "Perfect for life's most intimate milestones",
    price: 375,
    features: ["8ft Organic Balloon Garland", "Customized Easel Sign", "2 Dozen Luxury Treats"],
  },
  {
    id: "fun-festivities",
    name: "The Fun & Festivities",
    subtitle: "The classic birthday, elevated",
    price: 450,
    features: ["1 Hour Professional Face Painting", "6ft Custom Balloon Backdrop", "2 Dozen Themed Cupcakes"],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="container relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Premier Event Design
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Turning Milestones
              <br />
              into{" "}
              <span className="text-primary italic">Masterpieces</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Canton's premier all-inclusive event designer for kids' birthdays,
              luxury showers, weddings, and more. We bring the decor,
              entertainment, and magic — you just bring the guests.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Gift className="w-4 h-4" />
                Shop Gifts & Treats
              </Link>
              <a
                href="tel:3302771019"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                Book Your Event
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              The <span className="text-primary italic">Ladi Crafti</span>{" "}
              Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Packages Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Event <span className="text-primary italic">Packages</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Customizable packages for every celebration. Choose from our popular options or build your own.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-serif text-lg font-bold mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {pkg.subtitle}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-serif text-2xl font-bold text-primary">
                    ${pkg.price}
                  </span>
                  <span className="text-xs text-muted-foreground">+</span>
                </div>
                <div className="space-y-2 mb-4">
                  {pkg.features.slice(0, 2).map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <Check className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sweet Treats Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Our Handcrafted Collection
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Sweet <span className="text-primary italic">Treats</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Indulgent cake pops, candy kabobs, and gummy kabobs — handcrafted with love and available year-round.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sweetTreats.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Sweet Treats
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Gifts Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Seasonal Collections
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Seasonal <span className="text-primary italic">Gifts</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Celebrate special occasions with our curated Mother's Day and Graduation gift collections.
            </p>
          </div>

          {/* Mother's Day Preview */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center">
              Mother's Day <span className="text-primary italic">Gifts</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {mothersDayProducts.slice(0, 4).map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Graduation Preview */}
          <div className="mb-10">
            <h3 className="font-serif text-2xl font-bold mb-6 text-center">
              Graduation <span className="text-primary italic">Gifts</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {graduationProducts.slice(0, 3).map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Seasonal Gifts
              <ArrowRight className="w-4 h-4" />
            </Link>
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
              Ready to Create Your{" "}
              <span className="text-primary italic">Masterpiece?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We recommend booking 4-6 weeks in advance, but we'll do our best
              to accommodate last-minute events.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Gift className="w-4 h-4" />
                Shop Now
              </Link>
              <a
                href="mailto:ladicrafti2025@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Get Your Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
