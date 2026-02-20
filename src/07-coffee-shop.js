/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Normalize inputs to lowercase for consistent matching
  size = size.toLowerCase();
  type = type.toLowerCase();

  // Base prices by size
  const sizePrices = {
    small: 3.00,
    medium: 4.00,
    large: 5.00
  };

  // Add-ons by coffee type
  const typeAddons = {
    regular: 0.00,
    latte: 1.00,
    cappuccino: 1.50,
    mocha: 2.00
  };

  // Validate size
  if (!Object.keys(sizePrices).includes(size)) {
    return -1;
  }

  // Validate type
  if (!Object.keys(typeAddons).includes(type)) {
    return -1;
  }

  // Calculate total
  let total = sizePrices[size] + typeAddons[type];

  if (extras.whippedCream) {
    total += 0.50;
  }
  if (extras.extraShot) {
    total += 0.75;
  }

  // Round to 2 decimal places
  return Number(total.toFixed(2));
}

console.log(calculateCoffeePrice("small", "regular", { whippedCream: true }));
// 3.50 ✅

console.log(calculateCoffeePrice("medium", "latte", { extraShot: true }));
// 5.75 ✅

console.log(calculateCoffeePrice("large", "mocha", { whippedCream: true, extraShot: true }));
// 8.25 ✅

console.log(calculateCoffeePrice("medium", "cappuccino"));
// 5.50 ✅