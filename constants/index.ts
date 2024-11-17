import { RxDashboard } from "react-icons/rx";
import {
  BriefcaseBusiness,
  FileText,
  Folder,
  PlusCircle,
  Settings,
  Sparkles,
  Trash,
  CircleHelp,
  MessageSquareMore,
} from "lucide-react";

// Navbar Links
export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Support",
    href: "/support",
  },
];

export const buttonDetails = [
  {
    name: "New Application",
    icon: PlusCircle,
  },
  {
    name: "Trash",
    icon: Trash,
  },
];

export const linkDetails = [
  {
    name: "Dashboard",
    icon: RxDashboard,
    href: "/dashboard",
  },
  {
    name: "Applications",
    icon: Folder,
    href: "/applications",
  },
  {
    name: "Manage Documents",
    icon: FileText,
    href: "/documents",
  },
  {
    name: "Search Jobs",
    icon: BriefcaseBusiness,
    href: "/search-jobs",
  },
  {
    name: "Builder",
    icon: Sparkles,
    href: "/builder",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const endButtonDetails = [
  {
    name: "Feedback",
    icon: MessageSquareMore,
  },
  {
    name: "Support",
    icon: CircleHelp,
  },
];
