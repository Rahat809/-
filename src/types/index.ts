export interface PackageSize {
  id: string;
  sizeLabel: string; // e.g. "৫০০ গ্রাম" or "১ কেজি"
  weightInGrams: number;
  price: number;
  previousPrice?: number; // genuine discount
  inStock: boolean;
  sku: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  englishName: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  packageSizes: PackageSize[];
  isFeatured: boolean;
  isBestSeller: boolean;
  tags: string[];
  weightAndPackaging: string;
  storageInstructions: string;
  deliveryInfo: string;
  seoTitle: string;
  seoDescription: string;
}

export interface CartItem {
  id: string; // composite key: productId + "-" + packageSizeId
  productId: string;
  productName: string;
  productImage: string;
  categoryName: string;
  packageSizeId: string;
  packageSizeLabel: string;
  unitPrice: number;
  previousPrice?: number;
  quantity: number;
}

export interface CheckoutFormData {
  customerName: string;
  mobileNumber: string;
  district: "dhaka" | "outside_dhaka";
  thana: string;
  deliveryAddress: string;
  deliveryNotes?: string;
  email?: string;
}

export type PageView =
  | { type: "home" }
  | { type: "products"; categorySlug?: string }
  | { type: "product_detail"; slug: string }
  | { type: "cart" }
  | { type: "checkout" }
  | { type: "about" }
  | { type: "contact" }
  | { type: "policy"; policyType: "privacy" | "terms" | "delivery" | "refund" | "faq" };
