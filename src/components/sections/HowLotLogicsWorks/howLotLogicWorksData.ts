import installIcon from "../../../assets/InstallIcon.svg";
import generateIcon from "../../../assets/EnterprisePlanIcon.svg";
import reviewIcon from "../../../assets/reviewIcon.svg";
export interface Step {
  icon: string;
  title: string;
  description: string;
}
export const stepsData: Step[] = [
  {
    icon: installIcon,
    title: "Install the App",
    description:
      "Use the LotLogic mobile app to snap or upload up to 20 photos per lot. Each image is uploaded to your company workspace in seconds.",
  },
  {
    icon: generateIcon,
    title: "Generate with AI",
    description:
      "Let LotLogic’s AI instantly create accurate titles, detailed descriptions, and real-time price estimates — all based on your uploaded images.",
  },
  {
    icon: reviewIcon,
    title: "Review & Publish",
    description:
      "Admins can review, edit, and approve every lot from the web dashboard. Export your data in CSV format or sync it.",
  },
];
