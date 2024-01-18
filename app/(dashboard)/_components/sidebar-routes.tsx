"use client";

import { Compass, Layout, LucideIcon } from "lucide-react";
import SidebarItem from "./sidebar-item";

type Route = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const mockRoutes: Route[] = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

export default function SidebarRoutes() {
  const routes = mockRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}
