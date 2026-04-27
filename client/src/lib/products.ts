export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "always-available" | "mothers-day" | "graduation";
  variants?: { id: string; name: string; price: number }[];
  priceLabel?: string;
}

// Real individual product photos provided by the owner
const IMG = {
  // Always Available
  cakePops: "/manus-storage/cake-pops_77fc4a1d.jpg", // No individual photo provided — keeping cropped flyer image
  grapeCandyKabobs: "/manus-storage/photo_AQADjgxrGwHkgEd-_49bb75a2.jpg",
  artisanalGummyKabobs: "/manus-storage/photo_AQADfwxrGwHkgEd-_2c0c2852.jpg",
  // Mother's Day
  momMugBerryBouquet: "/manus-storage/photo_AQADjwxrGwHkgEd-_cf8a812b.jpg",
  pictureFrameBouquet: "/manus-storage/photo_AQADkQxrGwHkgEd-_f76a936e.jpg",
  globeBouquet: "/manus-storage/photo_AQADkgxrGwHkgEd-_1a829bbf.jpg",
  letterMBasket: "/manus-storage/photo_AQADkAxrGwHkgEd-_96d2ee17.jpg",
  tootieFruityCandyBox: "/manus-storage/photo_AQADhwxrGwHkgEd-_7b13b326.jpg",
  teddyBearBalloonBoxes: "/manus-storage/photo_AQADkwxrGwHkgEd-_184ce9f7.jpg",
  realFlowerBalloonBox: "/manus-storage/photo_AQADhgxrGwHkgEd-_c1f988e9.jpg",
  heartBalloonFlower: "/manus-storage/photo_AQADhQxrGwHkgEd-_b1b371a9.jpg",
  flowerTumblerGiftSet: "/manus-storage/photo_AQADhAxrGwHkgEd-_93771798.jpg",
  fieraRochaBouquet: "/manus-storage/photo_AQADgwxrGwHkgEd-_a644b4c0.jpg",
  kinderFlowerBox: "/manus-storage/photo_AQADggxrGwHkgEd-_f439419f.jpg",
  deluxeTeddyBearGiftSet: "/manus-storage/photo_AQADgQxrGwHkgEd-_0e3d960d.jpg",
  airBalloonBouquetBox: "/manus-storage/photo_AQADgAxrGwHkgEd-_d28876a0.jpg",
  // Graduation
  candyBouquetBalloons: "/manus-storage/photo_AQADjQxrGwHkgEd-_aeee4239.jpg",
  moneyCake: "/manus-storage/photo_AQADjAxrGwHkgEd-_9cfd5a52.jpg",
  graduationBouquet: "/manus-storage/photo_AQADiwxrGwHkgEd-_224f72c1.jpg",
  candyJar: "/manus-storage/photo_AQADigxrGwHkgEd-_99d103d1.jpg",
  candyGradNecklace: "/manus-storage/photo_AQADiQxrGwHkgEd-_3e021b19.jpg",
  grandRibbonMoneyNecklace: "/manus-storage/photo_AQADiAxrGwHkgEd-_4ed9e38c.jpg",
};

export const products: Product[] = [
  // Always Available
  {
    id: "cake-pop-single",
    name: "Indulgent Cake Pops",
    description: "A Heavenly Treat, Elegant & Delicious. Classic Vanilla with white chocolate & gold sprinkles, or Classic Chocolate with dark chocolate & elegant gold sprinkles.",
    price: 5,
    image: IMG.cakePops,
    category: "always-available",
    priceLabel: "Single: $5 | Pair: $9",
    variants: [
      { id: "cake-pop-single", name: "Single Cake Pop", price: 5 },
      { id: "cake-pop-pair", name: "Pair of Cake Pops", price: 9 },
    ],
  },
  {
    id: "grape-candy-kabob-single",
    name: "Grape Candy Kabobs",
    description: "Tangy grapes coated in a sweet, crunchy blue raspberry & cherry candy shell.",
    price: 5,
    image: IMG.grapeCandyKabobs,
    category: "always-available",
    priceLabel: "Single: $5 | Trio: $13",
    variants: [
      { id: "grape-candy-kabob-single", name: "Single Sweet", price: 5 },
      { id: "grape-candy-kabob-trio", name: "Gourmet Trio (3)", price: 13 },
    ],
  },
  {
    id: "gummy-kabob-single",
    name: "Artisanal Gummy Kabobs",
    description: "A playful assortment of premium gummy candies on a skewer.",
    price: 4,
    image: IMG.artisanalGummyKabobs,
    category: "always-available",
    priceLabel: "Single: $4 | Trio: $10",
    variants: [
      { id: "gummy-kabob-single", name: "Single Kabob", price: 4 },
      { id: "gummy-kabob-trio", name: "Special Trio (3)", price: 10 },
    ],
  },
  // Mother's Day
  {
    id: "mom-mug-berry",
    name: "MOM Mug Berry Bouquet",
    description: 'A mug with "MOM" written on it filled with pink chocolate-dipped strawberries.',
    price: 45,
    image: IMG.momMugBerryBouquet,
    category: "mothers-day",
  },
  {
    id: "picture-frame-bouquet",
    name: "Picture Frame Bouquet",
    description: "A picture frame box with purple roses and a Mother's Day balloon, includes photo frames.",
    price: 45,
    image: IMG.pictureFrameBouquet,
    category: "mothers-day",
  },
  {
    id: "globe-bouquet",
    name: "Globe Bouquet",
    description: 'A clear globe/balloon with a "MOM" heart balloon, filled with treats, on a bed of red decorative filling.',
    price: 60,
    image: IMG.globeBouquet,
    category: "mothers-day",
  },
  {
    id: "letter-m-basket",
    name: 'Letter "M" Basket',
    description: 'A gift basket with sunflowers, letter "M" decoration, and wrapped gift items.',
    price: 55,
    image: IMG.letterMBasket,
    category: "mothers-day",
  },
  {
    id: "tootie-fruity-candy-box",
    name: "Tootie Fruity Candy Box",
    description: "Colorful candy box arrangement — a sweet surprise for Mom!",
    price: 50,
    image: IMG.tootieFruityCandyBox,
    category: "mothers-day",
  },
  {
    id: "teddy-bear-balloon-boxes",
    name: "Teddy Bear Balloon Boxes",
    description: "Gift box with teddy bear and Mother's Day balloons.",
    price: 45,
    image: IMG.teddyBearBalloonBoxes,
    category: "mothers-day",
  },
  {
    id: "real-flower-balloon-box",
    name: "Real Flower Balloon Box",
    description: "Real flowers with heart-shaped balloons in a box.",
    price: 65,
    image: IMG.realFlowerBalloonBox,
    category: "mothers-day",
  },
  {
    id: "heart-balloon-flower",
    name: "Heart Balloon Flower",
    description: "Heart-shaped pink balloons with flower arrangement.",
    price: 40,
    image: IMG.heartBalloonFlower,
    category: "mothers-day",
  },
  {
    id: "flower-tumbler-gift-set",
    name: "Flower Tumbler Gift Set",
    description: "Tumbler with flower and candy arrangement.",
    price: 50,
    image: IMG.flowerTumblerGiftSet,
    category: "mothers-day",
  },
  {
    id: "fiera-rocha-bouquet",
    name: "Fiera Rocha Bouquet",
    description: "Ferrero Rocher chocolate bouquet with roses.",
    price: 55,
    image: IMG.fieraRochaBouquet,
    category: "mothers-day",
  },
  {
    id: "kinder-flower-box",
    name: "Kinder Flower Box",
    description: "Kinder chocolate with flower arrangement in a box.",
    price: 50,
    image: IMG.kinderFlowerBox,
    category: "mothers-day",
  },
  {
    id: "deluxe-teddy-bear-gift-set",
    name: "Deluxe Teddy Bear Gift Set",
    description: "Teddy bear with balloons and premium gift items.",
    price: 65,
    image: IMG.deluxeTeddyBearGiftSet,
    category: "mothers-day",
  },
  {
    id: "air-balloon-bouquet-box",
    name: "Air Balloon Bouquet Box",
    description: "Balloon bouquet with flowers in a box.",
    price: 45,
    image: IMG.airBalloonBouquetBox,
    category: "mothers-day",
  },
  // Graduation
  {
    id: "candy-bouquet-balloons",
    name: "Candy Bouquet with Balloons",
    description: "Luxurious basket with gourmet snacks, personalized 'The Best is Yet to Come' tumbler, gold stars, and a 'Congrats GRAD' sign.",
    price: 50,
    image: IMG.candyBouquetBalloons,
    category: "graduation",
  },
  {
    id: "money-cake",
    name: "Money Cake",
    description: "Multi-tiered cake of tightly rolled currency, adorned with black, gold, and silver ribbons and a cap topper.",
    price: 50,
    image: IMG.moneyCake,
    category: "graduation",
  },
  {
    id: "graduation-bouquet",
    name: "Graduation Bouquet",
    description: "Striking mix of folded dollar bills and elegant red and white roses, beautifully wrapped.",
    price: 40,
    image: IMG.graduationBouquet,
    category: "graduation",
  },
  {
    id: "candy-jar",
    name: "Candy Jar",
    description: "Decorative glass jar brimming with premium candies and a custom-labeled graduation cap and tassel.",
    price: 40,
    image: IMG.candyJar,
    category: "graduation",
  },
  {
    id: "candy-grad-necklace",
    name: "Candy Grad Necklace",
    description: "Vibrant, hand-braided candy lei with dollar bills, paw prints, and custom charms.",
    price: 45,
    image: IMG.candyGradNecklace,
    category: "graduation",
  },
  {
    id: "grand-ribbon-money-necklace",
    name: "Grand Ribbon Money Necklace",
    description: "Prestigious ribbon sash with clear currency tubes and large, celebratory bows.",
    price: 40,
    image: IMG.grandRibbonMoneyNecklace,
    category: "graduation",
  },
];

export const alwaysAvailable = products.filter(
  (p) => p.category === "always-available"
);
export const mothersDayProducts = products.filter(
  (p) => p.category === "mothers-day"
);
export const graduationProducts = products.filter(
  (p) => p.category === "graduation"
);
