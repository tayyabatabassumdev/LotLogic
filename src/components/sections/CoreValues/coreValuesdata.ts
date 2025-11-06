import aiIcon from "../../../assets/aiIcon.svg";
import teamIcon from "../../../assets/teamIcon.svg";
import cloudIcon from "../../../assets/cloudIcon.svg";
import imageIcon from "../../../assets/imageIcon.svg";
import exportIcon from "../../../assets/exportIcon.svg";
import platformIcon from "../../../assets/platformIcon.svg";
export interface Value {
  icon: string;
  title: string;
  description: string;
}
export const coreValuesdata: Value[] = [
  {
    icon: aiIcon,
    title: " Innovation Through AI",
    description:
      "LotLogic is designed for teams. From invites to approvals, every feature connects people and data for a seamless, unified workflow.",
  },
  {
    icon: teamIcon,
    title: "Collaboration First",
    description:
      "Your security is our priority. All images, user data, and listings are fully encrypted and safely stored on AWS infrastructure.",
  },
  {
    icon: cloudIcon,
    title: "Data You Can Trust",
    description:
      "Capture up to 20 photos per lot to ensure clarity and accuracy. LotLogic’s AI adapts to every image for the best results possible.",
  },
  {
    icon: imageIcon,
    title: "Precision ",
    description:
      "Capture up to 20 photos per lot to ensure clarity and accuracy. LotLogic’s AI adapts to every image for the best results possible.",
  },
  {
    icon: exportIcon,
    title: "Transparency",
    description:
      "Access clear analytics, exports, and reports that make reviewing performance simple and decision-making smarter",
  },
  {
    icon: platformIcon,
    title: " Flexibility Everywhere",
    description:
      "Work your way — on the web or mobile. LotLogic keeps your data synced, secure, and accessible across all your devices.",
  },
];
