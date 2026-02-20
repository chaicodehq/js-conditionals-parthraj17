/**
 * 🌤️ TrailBuddy - The Hiking Weather App
 *
 * You're building a weather advisory feature for TrailBuddy, a popular
 * hiking app used by thousands of outdoor enthusiasts. Based on the
 * temperature (in Celsius) and whether it's raining, the app should
 * display helpful advice to hikers.
 *
 * Advisory Rules (check in this exact order):
 *   - temp >= 35              → "Too hot for hiking - stay indoors and hydrate"
 *   - temp >= 25 and no rain  → "Great weather for hiking - don't forget sunscreen"
 *   - temp >= 25 and raining  → "Warm but rainy - consider indoor activities"
 *   - temp >= 15 and no rain  → "Perfect hiking weather - enjoy the trails"
 *   - temp >= 15 and raining  → "Cool and rainy - bring waterproof gear if hiking"
 *   - temp >= 5 and no rain   → "Chilly - wear layers for your hike"
 *   - temp >= 5 and raining   → "Cold and wet - best to stay indoors"
 *   - temp < 5                → "Too cold - stay warm indoors"
 *
 * @param {number} temperature - Temperature in Celsius
 * @param {boolean} isRaining - Whether it's currently raining
 * @returns {string} The weather advisory message
 */
export function getWeatherAdvice(temperature, isRaining) {
  // Validate input
  if (typeof temperature !== "number") {
    return "INVALID";
  }

  let msg;

  if (temperature >= 35) {
    msg = "Too hot for hiking - stay indoors and hydrate";
  } else if (temperature > 25 && !isRaining) {
    msg = "Great weather for hiking - don't forget sunscreen";
  } else if (temperature >= 25 && isRaining) {
    msg = "Warm but rainy - consider indoor activities";
  } else if (temperature >= 15 && !isRaining) {
    msg = "Perfect hiking weather - enjoy the trails";
  } else if (temperature >= 15 && isRaining) {
    msg = "Cool and rainy - bring waterproof gear if hiking";
  } else if (temperature >= 5 && !isRaining) {
    msg = "Chilly - wear layers for your hike";
  } else if (temperature >= 5 && isRaining) {
    msg = "Cold and wet - best to stay indoors";
  } else if (temperature < 5) {
    msg = "Too cold - stay warm indoors";
  } else {
    msg = "INVALID";
  }

  return msg;
}

// Example usage:
console.log(getWeatherAdvice(5, false)); // Chilly - wear layers for your hike
console.log(getWeatherAdvice(5, true));  // Cold and wet - best to stay indoors
console.log(getWeatherAdvice(30, false)); // Great weather for hiking - don't forget sunscreen
console.log(getWeatherAdvice(30, true));  // Warm but rainy - consider indoor activities