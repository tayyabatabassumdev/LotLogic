
import { Facebook, Twitter, Linkedin, Send } from "lucide-react";

export interface LinkItem {
  label: string;
  to?: string;
  path?:string;
}
export const pagesLinks: LinkItem[] = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Pricing", to: "pricing" },
  { label: "How it Works", to: "how-it-works" },
  { label: "Contact", path: "/contact" },
];
export const utilityLinks: LinkItem[] = [
   { label: "Terms & Conditions", path: "/termsandconditions" },
  { label: "Privacy Policy", path: "/privacypolicy" },
  { label: "Login", path: "" },
  { label: "Sign Up", path: "" },
];
export const socialIcons = [
  { href: "/#", Icon: Facebook },
  { href: "/#", Icon: Twitter },
  { href: "/#", Icon: Linkedin },
  { href: "/#", Icon: Send },
];
