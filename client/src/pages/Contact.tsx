/*
 * Design: Dark Luxe Boutique — Art Deco Revival
 * Contact page with contact information and form
 */

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
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
              Get In Touch
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold leading-[1.1] mb-6">
              Let's Create Your{" "}
              <span className="text-primary italic">Masterpiece</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Have questions? Ready to book your event? We'd love to hear from
              you. Reach out today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                icon: Phone,
                title: "Phone",
                items: ["(330) 277-1019", "(619) 601-1748"],
              },
              {
                icon: Mail,
                title: "Email",
                items: ["ladicrafti2025@gmail.com"],
              },
              {
                icon: MapPin,
                title: "Location",
                items: [
                  "Canton, Ohio",
                  "Serving Stark County, Akron, Massillon, and Alliance",
                ],
              },
            ].map((contact, i) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-8 rounded-2xl bg-card border border-border/50 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <contact.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  {contact.title}
                </h3>
                <div className="space-y-2">
                  {contact.items.map((item) => (
                    <p key={item} className="text-sm text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We recommend booking 4-6 weeks in advance, but we'll do our best
              to accommodate last-minute events.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="tel:3302771019"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="mailto:ladicrafti2025@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Service Area
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We proudly serve Canton, Ohio and the surrounding Stark County
              area, including Akron, Massillon, and Alliance. Whether you're
              planning a kids' birthday party, wedding, bridal shower, corporate
              event, or special celebration, we're here to make it magical.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Contact us to discuss your event and see how Ladi Crafti can bring
              your vision to life!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
