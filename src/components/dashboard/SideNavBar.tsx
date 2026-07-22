"use client";

import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { icon: "dashboard", label: "Dashboard", href: "/dashboard" },
  { icon: "shopping_cart", label: "Listas Activas", href: "/active-list" },
  { icon: "restaurant_menu", label: "Recetas", href: "#" },
  { icon: "category", label: "Categorías", href: "#" },
  { icon: "archive", label: "Archivadas", href: "#" },
] as const;

export default function SideNavBar() {
  const pathname = usePathname();

  function isActive(href: string, label: string) {
    if (href === "#") return false;

    if (label === "Dashboard") {
      return pathname === "/dashboard";
    }

    if (label === "Listas Activas") {
      return (
        pathname.startsWith("/dashboard/list/") ||
        pathname.startsWith("/active-list")
      );
    }

    return pathname === href;
  }

  return (
    <aside className="hidden md:flex flex-col justify-between fixed left-0 top-16 h-[calc(100vh-64px)] w-64 p-4 bg-surface-container-lowest dark:bg-surface-container-low">
      <div>
        <div className="mb-lg px-sm">
          <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
            Welcome back
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            Shopping ready
          </p>
        </div>

        <nav className="flex flex-col gap-xs">
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

        <button className="cursor-pointer mt-md w-full bg-primary text-on-primary py-[16px] px-md rounded-full font-label-md text-label-md hover:bg-surface-tint transition-colors shadow-sm">
          Crear lista
        </button>
      </div>

      <nav className="flex flex-col gap-xs mt-auto">
        <NavItem icon="help" label="Centro de Ayuda" href="#" />
        <NavItem icon="logout" label="Cerrar sesión" href="#" />
      </nav>
    </aside>
  );
}

/* ─── Nav Item ─── */
function NavItem({
  icon,
  label,
  href,
  active = false,
}: {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}) {
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
