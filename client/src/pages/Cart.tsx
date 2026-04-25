/*
 * Design: Dark Luxe Boutique — Art Deco Revival
 * Cart page with order summary and PayPal checkout
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useCart } from "@/contexts/CartContext";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function Cart() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();
  const paypalRef = useRef<HTMLDivElement>(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Load PayPal SDK
  useEffect(() => {
    if (document.getElementById("paypal-sdk")) {
      if (window.paypal) setPaypalLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=sb&currency=USD&intent=capture";
    script.async = true;
    script.onload = () => setPaypalLoaded(true);
    document.head.appendChild(script);
  }, []);

  // Render PayPal buttons
  useEffect(() => {
    if (
      !paypalLoaded ||
      !window.paypal ||
      !paypalRef.current ||
      items.length === 0
    )
      return;

    // Clear previous buttons
    paypalRef.current.innerHTML = "";

    window.paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "gold",
          shape: "pill",
          label: "paypal",
        },
        createOrder: (_data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Ladi Crafti Order",
                amount: {
                  value: totalPrice.toFixed(2),
                  breakdown: {
                    item_total: {
                      currency_code: "USD",
                      value: totalPrice.toFixed(2),
                    },
                  },
                },
                items: items.map((item) => ({
                  name: item.variant
                    ? `${item.name} (${item.variant})`
                    : item.name,
                  unit_amount: {
                    currency_code: "USD",
                    value: item.price.toFixed(2),
                  },
                  quantity: item.quantity.toString(),
                })),
              },
            ],
          });
        },
        onApprove: async (_data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log("PayPal order captured:", order);
          setOrderComplete(true);
          clearCart();
        },
        onError: (err: any) => {
          console.error("PayPal error:", err);
        },
      })
      .render(paypalRef.current);
  }, [paypalLoaded, items, totalPrice, clearCart]);

  if (orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-600/20 flex items-center justify-center">
            <ShieldCheck className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="font-serif text-3xl font-bold mb-3">
            Order Confirmed!
          </h1>
          <p className="text-muted-foreground mb-2">
            Thank you for your order! We'll be in touch shortly to confirm
            details and arrange delivery or pickup.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            Questions? Contact us at{" "}
            <a
              href="mailto:ladicrafti2025@gmail.com"
              className="text-primary hover:underline"
            >
              ladicrafti2025@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:3302771019" className="text-primary hover:underline">
              (330) 277-1019
            </a>
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground/20 mb-6" />
          <h1 className="font-serif text-3xl font-bold mb-3">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Browse our handcrafted treats and luxury gift sets to find the
            perfect item.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Your <span className="text-primary italic">Cart</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 p-4 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-muted shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif font-semibold text-foreground">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {item.variant}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-lg font-bold text-primary font-serif mt-2">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="ml-auto text-sm font-semibold text-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary & Checkout */}
          <div className="lg:col-span-1">
            <div className="sticky top-36 space-y-6">
              {/* Summary */}
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h2 className="font-serif text-lg font-semibold mb-4">
                  Order Summary
                </h2>
                <div className="space-y-2 mb-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground truncate mr-2">
                        {item.name}
                        {item.variant ? ` (${item.variant})` : ""} x
                        {item.quantity}
                      </span>
                      <span className="text-foreground font-medium shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold font-serif text-primary">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h2 className="font-serif text-lg font-semibold mb-4">
                  Your Information
                </h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={customerInfo.email}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <textarea
                    placeholder="Special instructions or notes (optional)"
                    value={customerInfo.notes}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        notes: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
              </div>

              {/* PayPal Checkout */}
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h2 className="font-serif text-lg font-semibold">
                    Checkout
                  </h2>
                </div>
                <div ref={paypalRef} className="min-h-[50px]">
                  {!paypalLoaded && (
                    <div className="flex items-center justify-center py-4">
                      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <span className="ml-2 text-sm text-muted-foreground">
                        Loading PayPal...
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  Secure checkout powered by PayPal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
