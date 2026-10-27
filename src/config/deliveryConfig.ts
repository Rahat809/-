/**
 * Centralized Delivery and Payment Configuration for Bangali Food
 * The owner can easily adjust delivery rates, free shipping threshold, and policies here.
 */

export const deliveryConfig = {
  // Delivery charges in BDT (৳)
  insideDhakaCharge: 70,
  outsideDhakaCharge: 130,

  // Free delivery threshold in BDT (৳)
  freeDeliveryThreshold: 1500,

  // Payment Options
  cashOnDeliveryAvailable: true,
  onlinePaymentAvailable: false,

  // Delivery timelines
  estimatedDeliveryInsideDhaka: "২৪–৪৮ ঘণ্টার মধ্যে",
  estimatedDeliveryOutsideDhaka: "২–৩ কার্যদিবসের মধ্যে",

  // Packaging and assurance note
  packagingNote: "কাঁচের বয়াম শতভাগ নিরাপদ বাবল র‍্যাপ এবং বিশেষ কার্টনে সুরক্ষিতভাবে প্যাকিং করা হয়।",
  cashOnDeliveryNote: "পণ্য হাতে পেয়ে দেখে মূল্য পরিশোধের সুবিধা (ক্যাশ অন ডেলিভারি)।",
};
