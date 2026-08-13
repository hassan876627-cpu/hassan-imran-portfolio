export type Category = {
  title: string;
  description: string;
  href: string;
  cover: string;
};

/** Consistent cinematic grade applied to every editorial cover. */
const grade = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1280&h=720&q=80&sat=-30&exp=-10&con=12`;

export const categories: Category[] = [
  {
    title: "Commercial & Brand Ads",
    description: "Promotional videos for brands and businesses.",
    href: "https://drive.google.com/drive/folders/1CKojyJwTsf_d_zpZSXMlhInq2WuXo-Ju?usp=drive_link",
    cover: grade("photo-1601506521937-0121a7fc2a6b"),
  },
  {
    title: "Talking Head",
    description: "Professional edits for creators and educators.",
    href: "https://drive.google.com/drive/folders/1XVVr0nloMVnoeYnDVpjxGn1sOBVNZCty?usp=drive_link",
    cover: grade("photo-1590602847861-f357a9332bbc"),
  },
  {
    title: "Gaming",
    description: "High-retention gaming edits with cinematic pacing.",
    href: "https://drive.google.com/drive/folders/1-l_6yEcfwHiuCIE3TOfjVjp7xkVXZzTZ?usp=drive_link",
    cover: grade("photo-1598550476439-6847785fcea6"),
  },
  {
    title: "Travel & Cinematic",
    description: "Story-driven travel films and cinematic edits.",
    href: "https://drive.google.com/drive/folders/1DGKwGimSTL9bobawXlBvbiDCBHyL-PRX?usp=drive_link",
    cover: grade("photo-1464822759023-fed622ff2c3b"),
  },
  {
    title: "Vlogs",
    description: "Lifestyle stories and engaging vlog edits.",
    href: "https://drive.google.com/drive/folders/1z112xVfVINLP1YfyZQUwIPJzMSS1Ljei?usp=drive_link",
    cover: grade("photo-1516035069371-29a1b244cc32"),
  },
  {
    title: "Motion Graphics",
    description: "Dynamic animations, typography and commercial motion design.",
    href: "https://drive.google.com/drive/folders/1obAxhitXKSH7KSdfxuBNA1BREaQhDywq?usp=drive_link",
    cover: grade("photo-1587440871875-191322ee64b0"),
  },
  {
    title: "Map Animations",
    description: "Animated maps for travel and visual storytelling.",
    href: "https://drive.google.com/drive/folders/17Cu3_SIVg7iq1XLJdsdb8eE3-UzHynYK?usp=drive_link",
    cover: grade("photo-1524661135-423995f22d0b"),
  },
  {
    title: "Real Estate",
    description: "Cinematic property showcases and architectural presentations.",
    href: "https://drive.google.com/drive/folders/1lKLiJIqGILMsOpb2TPmPp0hgsYy5ZeWb?usp=drive_link",
    cover: grade("photo-1512917774080-9991f1c4c750"),
  },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hassan-imran-1a2380380",
    icon: "linkedin" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/__hassan__53?igsh=cHBiNW5seHI1N3pk",
    icon: "instagram" as const,
  },
  { label: "Telegram", href: "https://t.me/hassan_3039", icon: "send" as const },
  { label: "WhatsApp", href: "https://wa.me/923367359268", icon: "whatsapp" as const },
];

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "Portfolio", id: "portfolio" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];
