// src/components/Footer/footerData.ts
import { Facebook, Twitter, Linkedin, Send } from "lucide-react";
export interface LinkItem {
  label: string;
  href: string;
}
export const pagesLinks: LinkItem[] = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Customer Reviews", href: "#" },
  { label: "Contact", href: "#" },
];
export const utilityLinks: LinkItem[] = [
  { label: "Login", href: "#" },
  { label: "Sign Up", href: "#" },
  { label: "Reset Password", href: "#" },
  { label: "404 Not Found", href: "#" },
];
export const socialIcons = [
  { href: "#", Icon: Facebook },
  { href: "#", Icon: Twitter },
  { href: "#", Icon: Linkedin },
  { href: "#", Icon: Send },
];
