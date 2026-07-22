"use client";

import { EXAMPLE_PRODUCTS_BY_CATEGORY } from "@/lib/constants";
import { ReactNode, useState } from "react";

type CategoryButtonProps = {
  icon: string | ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
};

/* ─── Category Button (definido antes de usarse) ─── */
function CategoryButton({ icon, label, active, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-md group flex cursor-pointer flex-col items-center justify-center rounded-xl border transition-colors ${
        active
          ? "bg-tertiary-fixed border-tertiary"
          : "hover:bg-tertiary-fixed border-surface-variant bg-[#F8F9FA]"
      }`}
    >
      <span
        className={`material-symbols-outlined mb-xs text-[32px] transition-colors ${
          active ? "text-tertiary" : "text-primary group-hover:text-tertiary"
        }`}
      >
        {icon}
      </span>
      <span
        className={`font-label-sm text-label-sm text-center transition-colors ${
          active
            ? "text-tertiary-container"
            : "text-on-surface-variant group-hover:text-tertiary-container"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

/* ─── Desktop panel ─── */
export default function QuickCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const category = selectedCategory
    ? EXAMPLE_PRODUCTS_BY_CATEGORY.find((c) => c.name === selectedCategory)
    : null;

  return (
    <div className="bg-surface-container-lowest p-md surface-level-2 flex h-full min-h-0 flex-col rounded-xl">
      <h2 className="font-headline-md text-headline-md text-on-surface mb-md shrink-0 font-semibold">
        Quick Categories
      </h2>

      {/* Scroll area de categorías — crece para llenar el espacio disponible */}
      <div className="-mr-1 min-h-0 flex-1 scrollbar-thin overflow-y-auto pr-1">
        <div className="gap-sm grid grid-cols-2">
          {EXAMPLE_PRODUCTS_BY_CATEGORY.map((cat) => (
            <CategoryButton
              key={cat.name}
              icon={cat.icon}
              label={cat.name}
              active={selectedCategory === cat.name}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === cat.name ? null : cat.name,
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Productos de la categoría seleccionada */}
      {category && (
        <div className="mt-md pt-md border-surface-variant shrink-0 border-t">
          <h3 className="font-label-md text-label-md text-on-surface-variant mb-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              {category.icon}
            </span>
            {category.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.products.map((product) => (
              <button
                key={product.name}
                className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm hover:bg-tertiary-fixed-dim cursor-pointer rounded-full px-3 py-1.5 transition-colors"
              >
                {product.name}
                {product.unit && (
                  <span className="text-on-surface-variant ml-1">
                    ({product.unit})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Mobile: scroll horizontal con chips de categoría ─── */
export function QuickCategoriesMobile() {
  return (
    <div className="flex min-w-max gap-3 pb-1">
      {EXAMPLE_PRODUCTS_BY_CATEGORY.map((cat) => (
        <button
          key={cat.name}
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
