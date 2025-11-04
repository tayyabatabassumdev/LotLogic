import React from "react";
interface SocialIconProps {
  href: string;
  Icon: React.ElementType;
}
const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon }) => {
  return (
    <a
      href={href}
      className="w-9 h-9 flex items-center justify-center bg-primary text-white rounded-md hover:bg-[#335d99] transition"
    >
      <Icon size={16} />
    </a>
  );
};
export default SocialIcon;
