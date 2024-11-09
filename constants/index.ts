import {
  BriefcaseBusiness,
  FileText,
  Folder,
  PlusCircle,
  Settings,
  Trash,
  CircleHelp,
  MessageSquareMore,
} from "lucide-react";
import { RxDashboard } from "react-icons/rx";

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
    name: "Settings",
    icon: Settings,
  },

  {
    name: "Trash",
    icon: Trash,
  },

  {
    name: "New Application",
    icon: PlusCircle,
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
];

export const endButtonDetails = [
  {
    name: "Support",
    icon: CircleHelp,
  },

  {
    name: "Feedback",
    icon: MessageSquareMore,
  },
];
