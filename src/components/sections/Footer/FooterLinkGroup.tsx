import React from "react";
import type { LinkItem } from "./footerData";
interface FooterLinkGroupProps {
  title: string;
  links: LinkItem[];
}
const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-gray-900 font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-primary transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterLinkGroup;
