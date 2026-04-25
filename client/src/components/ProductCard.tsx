import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/lib/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]
  );
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    const variant = selectedVariant || {
      id: product.id,
      name: product.name,
      price: product.price,
    };
    addItem({
      id: variant.id,
      name: product.name,
      price: variant.price,
      image: product.image,
      variant: product.variants ? variant.name : undefined,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const displayPrice = selectedVariant
    ? selectedVariant.price
    : product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-serif text-base font-semibold text-foreground leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price */}
        <div>
          {product.priceLabel ? (
            <p className="text-xs font-medium text-primary/80">
              {product.priceLabel}
            </p>
          ) : (
            <p className="text-lg font-bold text-primary font-serif">
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>

        {/* Variants */}
        {product.variants && (
          <div className="flex flex-wrap gap-1.5">
            {product.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariant(v)}
                className={`text-[11px] px-2.5 py-1 rounded-full border transition-colors ${
                  selectedVariant?.id === v.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {v.name} — ${v.price}
              </button>
            ))}
          </div>
        )}

        {/* Add to Cart */}
        <button
          onClick={handleAdd}
          disabled={justAdded}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
            justAdded
              ? "bg-green-600/20 text-green-400 border border-green-600/30"
              : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart — ${displayPrice.toFixed(2)}
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
