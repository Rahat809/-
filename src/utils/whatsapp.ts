import { CartItem, CheckoutFormData } from "../types";
import { siteConfig } from "../config/siteConfig";

/**
 * Validates Bangladeshi 11-digit mobile number (e.g., 01712345678, 01949075850)
 */
export function validateBangladeshiPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\+]/g, "");
  // Matches 013, 014, 015, 016, 017, 018, 019 followed by 8 digits
  const regex = /^(?:(?:\+|00)88|01)?([3-9]\d{8})$/;
  return regex.test(cleaned);
}

/**
 * Normalizes phone number to standard 11 digits format (e.g., 01949075850)
 */
export function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/[\s\-\+]/g, "");
  if (cleaned.startsWith("880")) {
    return "0" + cleaned.slice(3);
  }
  return cleaned;
}

/**
 * Generates WhatsApp Click-to-Chat URL
 * Target number: 01949075850 -> international: 8801949075850 (no leading 0 after country code)
 */
export function getWhatsAppClickUrl(messageText: string): string {
  const countryCode = siteConfig.whatsappCountryCode || "880";
  const rawNumber = siteConfig.whatsappNumber.replace(/^0+/, ""); // strip leading zero
  const fullInternationalNumber = `${countryCode}${rawNumber}`;
  const encodedMessage = encodeURIComponent(messageText);
  return `https://wa.me/${fullInternationalNumber}?text=${encodedMessage}`;
}

/**
 * Universal helper accepting either (phone, message) or (message)
 */
export function buildWhatsAppUrl(target: string, maybeMessage?: string): string {
  if (maybeMessage !== undefined) {
    const rawNumber = target.replace(/[\s\-\+]/g, "").replace(/^880/, "").replace(/^0+/, "");
    const fullNumber = `880${rawNumber}`;
    return `https://wa.me/${fullNumber}?text=${encodeURIComponent(maybeMessage)}`;
  }
  return getWhatsAppClickUrl(target);
}

/**
 * Generates prefilled order text for WhatsApp checkout as specified in requirements:
 * 
 * আসসালামু আলাইকুম, আমি বাঙালী ফুড থেকে অর্ডার করতে চাই।
 * নাম: [Customer Name]
 * মোবাইল: [Customer Phone]
 * ঠিকানা: [Delivery Address]
 * অর্ডার:
 * 1. [Product Name] — [Package Size] × [Quantity]
 * মূল্য: ৳[Subtotal]
 * ডেলিভারি চার্জ: ৳[Delivery Charge]
 * সর্বমোট: ৳[Grand Total]
 * অনুগ্রহ করে আমার অর্ডারটি নিশ্চিত করুন।
 */
export function generateWhatsAppOrderMessage(
  formData: CheckoutFormData,
  items: CartItem[],
  subtotal: number,
  deliveryCharge: number,
  grandTotal: number
): string {
  let orderItemsText = "";
  items.forEach((item, index) => {
    orderItemsText += `${index + 1}. ${item.productName} — ${item.packageSizeLabel} × ${item.quantity} = ৳${item.unitPrice * item.quantity}\n`;
  });

  const districtLabel = formData.district === "dhaka" ? "ঢাকা সিটি" : "ঢাকার বাইরে";
  const thanaText = formData.thana ? ` (থানা/এলাকা: ${formData.thana})` : "";
  const fullAddressLine = `${formData.deliveryAddress}, ${districtLabel}${thanaText}`;

  let message = `আসসালামু আলাইকুম, আমি বাঙালী ফুড থেকে অর্ডার করতে চাই।\n`;
  message += `নাম: ${formData.customerName.trim()}\n`;
  message += `মোবাইল: ${formData.mobileNumber.trim()}\n`;
  message += `ঠিকানা: ${fullAddressLine}\n`;
  if (formData.deliveryNotes && formData.deliveryNotes.trim()) {
    message += `বিশেষ নির্দেশনা: ${formData.deliveryNotes.trim()}\n`;
  }
  message += `অর্ডার:\n${orderItemsText}`;
  message += `মূল্য: ৳${subtotal}\n`;
  message += `ডেলিভারি চার্জ: ৳${deliveryCharge}\n`;
  message += `সর্বমোট: ৳${grandTotal}\n`;
  message += `অনুগ্রহ করে আমার অর্ডারটি নিশ্চিত করুন।`;

  return message;
}

/**
 * Generates single-product WhatsApp inquiry/order message
 */
export function generateSingleProductInquiryMessage(
  productName: string,
  sizeLabel: string,
  price: number
): string {
  return `আসসালামু আলাইকুম, আমি বাঙালী ফুড থেকে "${productName}" (${sizeLabel} — ৳${price}) সম্পর্কে জানতে ও সরাসরি অর্ডার করতে আগ্রহী।`;
}
