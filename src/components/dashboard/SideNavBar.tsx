"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NAV_ITEMS = [
  { icon: "dashboard", label: "Dashboard", href: "/dashboard" },
  { icon: "shopping_cart", label: "Listas Activas", href: "/active-list" },
  { icon: "restaurant_menu", label: "Recetas", href: "#" },
  { icon: "category", label: "Categorías", href: "/categorias" },
  { icon: "archive", label: "Archivadas", href: "#" },
] as const;

type NavItemProps = {
  icon: string | ReactNode;
  label: string;
  href: string;
  active?: boolean;
};

export default function SideNavBar() {
  const pathname = usePathname();

  function isActive(href: string, label: string) {
    if (label === "Dashboard") {
      return pathname === "/dashboard";
    }

    if (label === "Listas Activas") {
      return (
        pathname.startsWith("/dashboard/list/") ||
        pathname.startsWith("/active-list")
      );
    }

    if (label === "Categorías") {
      return pathname.startsWith("/categorias");
    }

    return pathname === href;
  }

  return (
    <aside className="bg-surface-container-lowest dark:bg-surface-container-low fixed top-16 left-0 hidden h-[calc(100vh-64px)] w-64 flex-col justify-between p-4 md:flex">
      <div>
        <div className="mb-lg px-sm">
          <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
            Welcome back
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            Shopping ready
          </p>
        </div>

        <nav className="gap-xs flex flex-col">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={isActive(item.href, item.label)}
            />
          ))}
        </nav>

        <button className="mt-md bg-primary text-on-primary px-md font-label-md text-label-md hover:bg-surface-tint w-full cursor-pointer rounded-full py-[16px] shadow-sm transition-colors">
          Crear lista
        </button>
      </div>

      <nav className="gap-xs mt-auto flex flex-col">
        <NavItem icon="help" label="Centro de Ayuda" href="#" />
        <NavItem icon="logout" label="Cerrar sesión" href="#" />
      </nav>
    </aside>
  );
}

/* ─── Nav Item ─── */
function NavItem({ icon, label, href, active = false }: NavItemProps) {
  const base =
    "flex items-center gap-sm px-sm py-sm rounded-lg transition-all active:translate-x-1";
  const state = active
    ? "bg-secondary-container dark:bg-secondary-fixed-dim text-on-secondary-container dark:text-on-secondary-fixed-variant font-semibold"
    : "text-on-surface-variant dark:text-outline-variant hover:bg-surface-container-high";

  return (
    <a href={href} className={`${base} ${state}`}>
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-label-md text-label-md">{label}</span>
    </a>
  );
}
