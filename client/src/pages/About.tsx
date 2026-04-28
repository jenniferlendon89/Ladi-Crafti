/*
 * Design: Dark Luxe Boutique — Art Deco Revival
 * About page with company story and values
 */

import { motion } from "framer-motion";
import { Heart, Sparkles, Award } from "lucide-react";

export default function About() {
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
              About Us
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
              Turning Milestones into{" "}
              <span className="text-primary italic">Masterpieces</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Ladi Crafti is Canton's premier all-inclusive event designer,
              bringing joy, artistry, and magic to celebrations across Stark
              County.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ladi Crafti was founded with a simple mission: to take the
                stress out of event planning and replace it with joy, creativity,
                and professional artistry. We believe every celebration deserves
                to be special, and every guest should feel the magic.
              </p>
              <p>
                From kids' birthday parties to luxury weddings, from intimate
                baby showers to corporate events, we handle every detail so you
                can focus on what matters most — being present with your loved
                ones.
              </p>
              <p>
                Our team is passionate about creating Instagram-worthy moments,
                delivering exceptional entertainment, and ensuring every event
                runs flawlessly from setup to cleanup.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Our <span className="text-primary italic">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Passion",
                desc: "We pour our hearts into every event, treating your celebration as if it were our own.",
              },
              {
                icon: Sparkles,
                title: "Artistry",
                desc: "High-end design, professional face painting, and Instagram-worthy installations.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Attention to detail, reliability, and commitment to exceeding expectations.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-background border border-border/50 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              Why Choose Ladi Crafti?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    One-Stop Shop
                  </h3>
                  <p>
                    No more coordinating with multiple vendors. We handle
                    balloons, cakes, rentals, entertainment, and cleanup.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Specialized Services
                  </h3>
                  <p>
                    We specialize in kids' parties, weddings, bridal showers,
                    special needs events, and even pet celebrations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Professional Team
                  </h3>
                  <p>
                    Trained, compassionate, and experienced in creating
                    inclusive, welcoming events for all families.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold shrink-0 mt-1">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Community Trusted
                  </h3>
                  <p>
                    Canton Chamber of Commerce Member, serving Stark County
                    since 2025, and featured in Uniquely You Magazine.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
