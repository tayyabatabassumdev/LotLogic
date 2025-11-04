import aiIcon from "../../../assets/aiIcon.svg";
import teamIcon from "../../../assets/teamIcon.svg";
import cloudIcon from "../../../assets/cloudIcon.svg";
import imageIcon from "../../../assets/imageIcon.svg";
import exportIcon from "../../../assets/exportIcon.svg";
import platformIcon from "../../../assets/platformIcon.svg";
export interface Feature {
  icon: string;
  title: string;
  description: string;
}
export const featuresData: Feature[] = [
  {
    icon: aiIcon,
    title: "AI-Driven Listings",
    description:
      "Generate professional titles, detailed descriptions and estimates.",
  },
  {
    icon: teamIcon,
    title: "Team Collaboration",
    description:
      "Invite your team, assign roles, and review submissions together.",
  },
  {
    icon: cloudIcon,
    title: "Secure Cloud Storage",
    description:
      "All photos and data are encrypted and stored safely on AWS.",
  },
  {
    icon: imageIcon,
    title: "Multi-Image Capture",
    description:
      "Upload up to 20 photos per lot for precise item detail and visual accuracy.",
  },
  {
    icon: exportIcon,
    title: "Smart Exports",
    description:
      "Download CSV reports with all AI-generated details and image links.",
  },
  {
    icon: platformIcon,
    title: "Cross-Platform Access",
    description:
      "Use LotLogic anywhere — on the web or mobile app.",
  },
];
