/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  if (typeof color !== "string") {
    return false;
  }

  const signal = color.trim().toLowerCase();

  let simulator;

  switch (signal) {
    case "green":
      simulator = "GO";
      break;

    case "yellow":
      simulator = "SLOW DOWN";
      break;

    case "red":
      simulator = "STOP";
      break;

    case "flashing red":
      simulator = "STOP AND PROCEED WITH CAUTION";
      break;

    default:
      simulator = "INVALID SIGNAL";
  }

  return simulator;
}

console.log(getTrafficAction("green"));        
console.log(getTrafficAction("YELLOW"));       
console.log(getTrafficAction("Red"));       
console.log(getTrafficAction("Flashing Red")); 
console.log(getTrafficAction("FLASHING RED")); 
console.log(getTrafficAction(""));             