"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  EXAMPLE_PRODUCTS_BY_CATEGORY,
  type ExampleCategory,
} from "@/lib/constants";

/* ─── Inner component that uses useSearchParams (needs Suspense wrapper) ─── */
function CategoriasContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategoryName = searchParams.get("categoria");

  const selectedCategory = selectedCategoryName
    ? EXAMPLE_PRODUCTS_BY_CATEGORY.find(
        (c) => c.name === selectedCategoryName,
      )
    : null;

  function handleSelectCategory(cat: ExampleCategory) {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategoryName === cat.name) {
      params.delete("categoria");
    } else {
      params.set("categoria", cat.name);
    }

    const qs = params.toString();
    router.replace(`/categorias${qs ? `?${qs}` : ""}`);
  }

  function clearSelection() {
    router.replace("/categorias");
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Header */}
      <div className="mb-lg flex items-end justify-between">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Categorías
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            {EXAMPLE_PRODUCTS_BY_CATEGORY.length} categorías &middot;{" "}
            {EXAMPLE_PRODUCTS_BY_CATEGORY.reduce(
              (acc, c) => acc + c.products.length,
              0,
            )}{" "}
            productos
          </p>
        </div>
      </div>

      {/* ── Products panel when a category is selected ── */}
      {selectedCategory && (
        <div className="bg-secondary-fixed/10 mb-lg rounded-xl border p-md">
          <div className="mb-sm flex items-center justify-between">
            <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-primary">
                {selectedCategory.icon as string}
              </span>
              {selectedCategory.name}
            </h2>
            <button
              onClick={clearSelection}
              className="text-on-surface-variant hover:text-on-surface cursor-pointer rounded-lg p-1 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">
            {selectedCategory.products.length} productos
          </p>
          <div className="flex flex-wrap gap-2">
            {selectedCategory.products.map((product) => (
              <button
                key={product.name}
                className="bg-tertiary-fixed text-on-tertiary-fixed-variant hover:bg-tertiary-fixed-dim cursor-pointer rounded-full px-4 py-2 font-label-md text-label-md transition-colors"
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

      {/* ── Categories grid ── */}
      <div className="gap-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {EXAMPLE_PRODUCTS_BY_CATEGORY.map((cat) => {
          const isSelected = selectedCategoryName === cat.name;

          return (
            <button
              key={cat.name}
              onClick={() => handleSelectCategory(cat)}
              className={`group flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 p-6 text-center transition-all ${
                isSelected
                  ? "border-primary bg-primary-fixed/20 shadow-sm"
                  : "border-surface-variant bg-surface-container-lowest hover:border-tertiary hover:bg-tertiary-fixed/10 hover:-translate-y-0.5 surface-level-2"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[40px] transition-colors ${
                  isSelected
                    ? "text-primary"
                    : "text-primary group-hover:text-tertiary"
                }`}
              >
                {cat.icon as string}
              </span>
              <span
                className={`font-label-md text-label-md font-semibold transition-colors ${
                  isSelected
                    ? "text-primary"
                    : "text-on-surface group-hover:text-tertiary"
                }`}
              >
                {cat.name}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {cat.products.length} productos
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Page export with Suspense boundary ─── */
export default function CategoriasPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-full min-h-0 flex-col">
          <div className="mb-lg">
            <div className="bg-surface-variant/50 mb-xs h-8 w-48 animate-pulse rounded" />
            <div className="bg-surface-variant/50 h-5 w-36 animate-pulse rounded" />
          </div>
          <div className="gap-md grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
            {Array.from({ length: 11 }).map((_, i) => (
              <div
                key={i}
                className="bg-surface-variant/30 h-36 animate-pulse rounded-xl"
              />
            ))}
          </div>
        </div>
      }
    >
      <CategoriasContent />
    </Suspense>
  );
}
