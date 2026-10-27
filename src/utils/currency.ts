import { siteConfig } from "../config/siteConfig";

const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

/**
 * Converts English number/digits string to Bengali numerals
 */
export function toBengaliNumber(num: number | string): string {
  return num
    .toString()
    .replace(/\d/g, (digit) => bengaliDigits[parseInt(digit, 10)]);
}

/**
 * Formats price in BDT (৳) with Bengali numerals or formatted number
 * Example: 1250 -> ৳ ১,২৫০
 */
export function formatBDT(amount: number, useBengaliDigits: boolean = true): string {
  const formatted = amount.toLocaleString("en-US");
  if (useBengaliDigits) {
    return `${siteConfig.currencySymbol} ${toBengaliNumber(formatted)}`;
  }
  return `${siteConfig.currencySymbol} ${formatted}`;
}
