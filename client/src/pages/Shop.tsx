/*
 * Design: Dark Luxe Boutique — Art Deco Revival
 * Shop page with three product categories: Always Available, Mother's Day, Graduation
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Gift, GraduationCap, ShoppingBag } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import {
  sweetTreats,
  mothersDayProducts,
  graduationProducts,
} from "@/lib/products";

const SHOP_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435458667/MjhFGKw2MXYquUAiTQcN9F/shop-hero-MXTCTywnu3YTCBDPWmm3tM.webp";
const MOTHERS_DAY_BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435458667/MjhFGKw2MXYquUAiTQcN9F/mothers-day-banner-KgSosK8ZXg4rjy4H7A63v2.webp";
const GRADUATION_BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663435458667/MjhFGKw2MXYquUAiTQcN9F/graduation-banner-HxG6Tm8BezLwHoELjQcQnt.webp";

type Category = "all" | "sweet-treats" | "mothers-day" | "graduation";

const categories: { id: Category; label: string; icon: typeof Sparkles }[] = [
  { id: "all", label: "All Products", icon: ShoppingBag },
  { id: "sweet-treats", label: "Sweet Treats", icon: Sparkles },
  { id: "mothers-day", label: "Mother's Day", icon: Gift },
  { id: "graduation", label: "Graduation", icon: GraduationCap },
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SHOP_HERO})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

        <div className="container relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 flex items-center gap-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              The Exquisite Handcrafted Collection
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4">
              Shop <span className="text-primary italic">Ladi Crafti</span>
            </h1>
            <p className="text-muted-foreground max-w-lg text-sm md:text-base leading-relaxed">
              Handcrafted treats, luxury gift sets, and seasonal collections —
              perfect for celebrating life's sweetest moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-16 md:top-20 z-40 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.id !== "all") {
                    scrollToSection(cat.id);
                  } else {
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Always Available */}
      {(activeCategory === "all" || activeCategory === "sweet-treats") && (
        <section id="always-available" className="py-16 scroll-mt-32">
          <div className="container">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  Year-Round Favorites
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Always Available
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                Our signature handcrafted treats — available any time, for any
                occasion.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sweetTreats.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mother's Day */}
      {(activeCategory === "all" || activeCategory === "mothers-day") && (
        <section id="mothers-day" className="py-16 scroll-mt-32">
          <div className="container">
            {/* Category Banner */}
            <div className="relative rounded-2xl overflow-hidden mb-10 h-48 md:h-64">
              <img
                src={MOTHERS_DAY_BANNER}
                alt="Mother's Day Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 md:px-12">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5 text-primary" />
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                      Seasonal Collection
                    </p>
                  </div>
                  <h2 className="font-serif text-2xl md:text-4xl font-bold text-white">
                    Mother's Day Gifts
                  </h2>
                  <p className="text-sm text-white/70 mt-2 max-w-md">
                    Customizable luxury gift sets & hand-dipped treats — perfect
                    for the special moms in your life!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mothersDayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm text-primary font-medium">
                Ask about our decorative gift boxes & add-ons!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Graduation */}
      {(activeCategory === "all" || activeCategory === "graduation") && (
        <section id="graduation" className="py-16 scroll-mt-32">
          <div className="container">
            {/* Category Banner */}
            <div className="relative rounded-2xl overflow-hidden mb-10 h-48 md:h-64">
              <img
                src={GRADUATION_BANNER}
                alt="Graduation Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 md:px-12">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-[#C4A265]" />
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C4A265]">
                      Seasonal Collection
                    </p>
                  </div>
                  <h2 className="font-serif text-2xl md:text-4xl font-bold text-white">
                    Graduation Gifts
                  </h2>
                  <p className="text-sm text-white/70 mt-2 max-w-md">
                    Premier graduation gifts — unique & thoughtful keepsakes to
                    celebrate their achievement.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {graduationProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
            Questions? <span className="text-primary italic">Let's Chat!</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Custom orders, bulk pricing, and special requests — we'd love to
            help make your celebration perfect.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:ladicrafti2025@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Email Us
            </a>
            <a
              href="tel:3302771019"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              Call (330) 277-1019
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
