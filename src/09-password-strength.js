/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */

export function checkPasswordStrength(password) {
  if (typeof password !== "string" || password.length === 0) {
    return "weak";
  }

  let passed = 0;

  if (password.length >= 8) {
    passed++;
  }

  let hasUppercase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") {
      hasUppercase = true;
      break;
    }
  }
  if (hasUppercase) {
    passed++;
  }

  let hasLowercase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "a" && password[i] <= "z") {
      hasLowercase = true;
      break;
    }
  }
  if (hasLowercase) {
    passed++;
  }

  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      hasNumber = true;
      break;
    }
  }
  if (hasNumber) {
    passed++;
  }

  const specials = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let hasSpecial = false;
  for (let i = 0; i < password.length; i++) {
    if (specials.includes(password[i])) {
      hasSpecial = true;
      break;
    }
  }
  if (hasSpecial) {
    passed++;
  }

  if (passed <= 1) return "weak";
  if (passed <= 3) return "medium";
  if (passed === 4) return "strong";
  if (passed === 5) return "very strong";
}

