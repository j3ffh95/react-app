// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE
const shoppingCart = [
  { id: 1, product: "HDMI Cable", price: 4 },
  { id: 2, product: "Easy Bake Oven", price: 28 },
  { id: 3, product: "Peach Pie", price: 6.5 },
];

// ADDING TO AN ARRAY
[...shoppingCart, { id: 4, product: "Coffee Mug", price: 7.99 }];
