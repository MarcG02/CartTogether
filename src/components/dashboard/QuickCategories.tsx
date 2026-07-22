"use client";

import { EXAMPLE_PRODUCTS_BY_CATEGORY } from "@/lib/constants";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ScrollArea } from "../ui/scroll-area";

type CategoryButtonProps = {
  icon: string | ReactNode;
  label: string;
  onClick: () => void;
};

/* ─── Category Button ─── */
function CategoryButton({ icon, label, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border border-surface-variant bg-[#F8F9FA] p-4 transition-colors hover:bg-tertiary-fixed"
    >
      <span className="material-symbols-outlined mb-xs text-[32px] text-primary transition-colors group-hover:text-tertiary">
        {icon}
      </span>
      <span className="font-label-sm text-label-sm text-center text-on-surface-variant transition-colors group-hover:text-tertiary-container">
        {label}
      </span>
    </button>
  );
}

/* ─── Desktop panel ─── */
export default function QuickCategories() {
  const router = useRouter();

  function handleCategoryClick(categoryName: string) {
    router.push(
      `/categorias?categoria=${encodeURIComponent(categoryName)}`,
    );
  }

  return (
    <div className="bg-surface-container-lowest p-md surface-level-2 flex h-full max-h-134 min-h-0 flex-col rounded-xl shadow">
      {/* Título fijo arriba */}
      <h2 className="font-headline-md text-headline-md text-on-surface mb-md shrink-0 font-semibold">
        Quick Categories
      </h2>

      {/* Scroll area vertical de categorías — ocupa el espacio restante */}
      <ScrollArea className="-mr-1 min-h-0 flex-1 px-4">
        <div className="gap-sm grid grid-cols-2">
          {EXAMPLE_PRODUCTS_BY_CATEGORY.map((cat) => (
            <CategoryButton
              key={cat.name}
              icon={cat.icon}
              label={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

/* ─── Mobile: scroll horizontal con chips de categoría ─── */
export function QuickCategoriesMobile() {
  const router = useRouter();

  function handleCategoryClick(categoryName: string) {
    router.push(
      `/categorias?categoria=${encodeURIComponent(categoryName)}`,
    );
  }

  return (
    <div className="flex min-w-max gap-3 pb-1">
      {EXAMPLE_PRODUCTS_BY_CATEGORY.map((cat) => (
        <button
          key={cat.name}
          onClick={() => handleCategoryClick(cat.name)}
          className="bg-surface-container-lowest border-surface-variant hover:bg-tertiary-fixed hover:border-tertiary surface-level-2 flex h-24 w-24 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border transition-colors"
        >
          <span className="material-symbols-outlined text-primary text-[28px]">
            {cat.icon}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant px-1 text-center leading-tight">
            {cat.name}
          </span>
        </button>
      ))}
    </div>
  );
}
