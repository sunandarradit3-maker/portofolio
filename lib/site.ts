export const siteConfig = {
  name: "DiTz Store",
  owner: "Radit Sunandar",
  email: "ditzstoreofficial@gmail.com",
  whatsapp: "087739435496",
  tagline: "Solusi Website Modern Untuk UMKM, Startup & Bisnis Indonesia",
  url: process.env.SITE_URL ?? "https://ditzstore.id",
  description:
    "Website profesional untuk bisnis modern: cepat, aman, premium, dan siap menghasilkan pelanggan.",
  colors: {
    background: "#0A0F1F",
    accent: "#00D4FF",
    accent2: "#FFD700"
  }
};

export const pricingSeed = [
  {
    name: "Starter",
    slug: "starter",
    price: 1500000,
    description: "Cocok untuk validasi awal brand dan kebutuhan landing page.",
    features: ["1 halaman utama", "Desain premium", "Mobile responsive", "SEO dasar"],
    websiteType: "SOURCE_CODE_ONLY",
    featured: false
  },
  {
    name: "Business",
    slug: "business",
    price: 3500000,
    description: "Untuk bisnis yang butuh website company profile dan lead generation.",
    features: ["Multi page", "Form lead", "Blog basic", "Integrasi WhatsApp"],
    websiteType: "VERCEL_DEPLOYMENT",
    featured: true
  },
  {
    name: "Premium",
    slug: "premium",
    price: 7500000,
    description: "Untuk brand yang butuh sistem lebih kompleks dan scalable.",
    features: ["Admin panel", "CMS dinamis", "Dashboard analytics", "Cloudinary upload"],
    websiteType: "VPS_DEPLOYMENT",
    featured: false
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    price: null,
    description: "Solusi khusus dengan scope custom, support, dan maintenance.",
    features: ["Workflow custom", "SLA support", "Role-based access", "Arsitektur modular"],
    websiteType: "MAINTENANCE_MONTHLY",
    featured: false
  }
];
