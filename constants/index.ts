import {
  BriefcaseBusiness,
  FileText,
  Folder,
  PlusCircle,
  Settings,
  Trash,
  Search,
  CircleHelp,
  MessageSquareMore,
} from "lucide-react";
import { LayoutDashboard } from "lucide-react";

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
    name: "Search",
    icon: Search,
  },
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
    icon: LayoutDashboard,
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
    name: "Feedback",
    icon: MessageSquareMore,
  },
  {
    name: "Support",
    icon: CircleHelp,
  },
];
