import starterIcon from "../../../assets/starterPlanIcon.svg";
import proIcon from "../../../assets/ProfessionalPlanIcon.svg";
import enterpriseIcon from "../../../assets/EnterprisePlanIcon.svg";
export interface Plan {
  name: string;
  description: string;
  price: string;
  period: string;
  buttonText: string;
  features: string[];
  icon: string;
  highlighted?: boolean;
  badge?: string;
}
export const plans: Plan[] = [
  {
    name: "Starter Plan",
    description:
      "Get started with AI-powered lot capture and management tools for small teams.",
    price: "$0",
    period: "Per Month",
    buttonText: "Get Started For Free",
    features: [
      "Manage up to 3 active lots",
      "AI-generated titles and descriptions for each item",
      "Manual photo uploads and edits",
      "Basic reporting dashboard",
      "Access to training resources",
    ],
    icon: starterIcon,
  },
  {
    name: "Professional Plan",
    description:
      "Level up your efficiency with automation and advanced collaboration tools.",
    price: "$29",
    period: "Per Month",
    buttonText: "Start a 7 Day Free Trial",
    features: [
      "Manage up to 50 active lots",
      "Automated AI generation for titles, descriptions, and pricing",
      "Cloud photo storage with faster sync",
      "Team activity and submission tracking",
      "Priority support via chat",
      "Exportable reports and analytics",
      "Custom branding on invoices",
    ],
    icon: proIcon,
    highlighted: true,
    badge: "Preferred",
  },
  {
    name: "Enterprise Plan",
    description:
      "Unlock complete control and scalability for high-volume operations.",
    price: "$49",
    period: "Per Month",
    buttonText: "Start a 7 Day Free Trial",
    features: [
      "Unlimited lots and storage",
      "Role-based team access (Admin / Member / Reviewer)",
      "Custom workflows for approvals and submissions",
      "Integration with your auction or ERP systems",
      "Dedicated account manager & priority support",
      "Advanced reporting and white-labeling options",
      "Advanced reporting and analytics",
    ],
    icon: enterpriseIcon,
  },
];
