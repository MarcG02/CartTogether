"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EXAMPLE_PRODUCTS_BY_CATEGORY } from "@/lib/constants";

export type SelectedProduct = {
  name: string;
  unit?: string;
  quantity: number;
};

type AddProductDialogProps = {
  onProductsAdd?: (products: SelectedProduct[]) => void;
};

const ALL_CATEGORIES = EXAMPLE_PRODUCTS_BY_CATEGORY;

export default function AddProductDialog({
  onProductsAdd,
}: AddProductDialogProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  /* ── Filtered categories ── */
  const visibleCategories = useMemo(() => {
    let cats = ALL_CATEGORIES;

    if (activeCategory) {
      cats = cats.filter((c) => c.name === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      cats = cats
        .map((c) => ({
          ...c,
          products: c.products.filter((p) => p.name.toLowerCase().includes(q)),
        }))
        .filter((c) => c.products.length > 0);
    }

    return cats;
  }, [search, activeCategory]);

  const totalSelected = useMemo(
    () => Object.values(quantities).reduce((sum, q) => sum + q, 0),
    [quantities],
  );

  /* ── Quantity helpers ── */
  function getQty(name: string) {
    return quantities[name] ?? 0;
  }

  function increment(name: string) {
    setQuantities((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));
  }

  function decrement(name: string) {
    setQuantities((prev) => {
      const current = prev[name] ?? 0;
      if (current <= 1) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: current - 1 };
    });
  }

  /* ── Confirm selection ── */
  function handleAdd() {
    const products: SelectedProduct[] = Object.entries(quantities)
      .filter(([_, qty]) => qty > 0)
      .map(([name, quantity]) => {
        for (const cat of ALL_CATEGORIES) {
          const found = cat.products.find((p) => p.name === name);
          if (found) return { name, unit: found.unit, quantity };
        }
        return { name, quantity };
      });

    onProductsAdd?.(products);
    resetAndClose();
  }

  function resetAndClose() {
    setQuantities({});
    setSearch("");
    setActiveCategory(null);
    setOpen(false);
  }

  /* ── Chip class helper ── */
  function chipClass(active: boolean) {
    return active
      ? "bg-primary text-on-primary"
      : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container";
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant="default"
            className="flex h-auto cursor-pointer items-center gap-2 px-4 py-2"
          />
        }
      >
        <span className="material-symbols-outlined text-[20px]">add</span>
        Añadir producto
      </DialogTrigger>

      <DialogContent className="flex max-h-[85vh] flex-col gap-0 sm:max-w-2xl">
        <DialogHeader className="pb-3">
          <DialogTitle>Añadir producto</DialogTitle>
        </DialogHeader>

        {/* ── Search ── */}
        <div className="relative mb-3">
          <span className="material-symbols-outlined text-outline pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[20px]">
            search
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar producto…"
            className="bg-surface-container-low focus:ring-primary focus:bg-surface font-body-md text-body-md text-on-surface placeholder:text-outline h-10 w-full rounded-lg border-none pr-3 pl-10 transition-colors outline-none focus:ring-2"
          />
        </div>

        {/* ── Category chips ── */}
        <div className="-mx-1 pb-2">
          <ScrollArea orientation="horizontal" className="w-full">
            <div className="flex gap-2 px-1">
              <Button
                onClick={() => setActiveCategory(null)}
                className={`font-label-sm text-label-sm shrink-0 cursor-pointer rounded-full px-3 py-1 transition-colors ${chipClass(activeCategory === null)}`}
              >
                Todas
              </Button>
              {ALL_CATEGORIES.map((cat) => (
                <Button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`font-label-sm text-label-sm flex shrink-0 cursor-pointer items-center gap-1 rounded-full px-3 py-1 transition-colors ${chipClass(activeCategory === cat.name)}`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {cat.icon}
                  </span>
                  {cat.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="flex h-[60vh] flex-col gap-3">
          {/* ── Product list ── */}
          <ScrollArea className="h-full">
            {visibleCategories.length === 0 ? (
              <p className="text-on-surface-variant font-body-md text-body-md py-12 text-center">
                No se encontraron productos
              </p>
            ) : (
              <div className="space-y-5 pb-2">
                {visibleCategories.map((cat) => (
                  <div key={cat.name}>
                    <h3 className="font-label-md text-label-md text-on-surface-variant mb-2 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">
                        {cat.icon}
                      </span>
                      {cat.name}
                    </h3>

                    <div className="space-y-0.5">
                      {cat.products.map((product) => {
                        const qty = getQty(product.name);
                        return (
                          <div
                            key={product.name}
                            className="hover:bg-surface-container-low flex items-center justify-between rounded-lg px-3 py-2 transition-colors"
                          >
                            <div className="flex min-w-0 items-center gap-3">
                              <span className="font-body-md text-body-md text-on-surface">
                                {product.name}
                              </span>
                              {product.unit && (
                                <span className="font-label-sm text-label-sm text-outline shrink-0">
                                  {product.unit}
                                </span>
                              )}
                            </div>

                            <div className="flex shrink-0 items-center gap-1">
                              {qty > 0 && (
                                <button
                                  onClick={() => decrement(product.name)}
                                  className="text-on-surface-variant hover:bg-surface-container hover:text-error flex size-7 cursor-pointer items-center justify-center rounded-md transition-colors"
                                  aria-label={`Quitar ${product.name}`}
                                >
                                  <span className="material-symbols-outlined text-[18px] select-none">
                                    remove
                                  </span>
                                </button>
                              )}
                              {qty > 0 && (
                                <span className="font-label-md text-label-md text-on-surface w-6 text-center select-none">
                                  {qty}
                                </span>
                              )}
                              <button
                                onClick={() => increment(product.name)}
                                className="text-primary hover:bg-primary-fixed/30 flex size-7 cursor-pointer items-center justify-center rounded-md transition-colors"
                                aria-label={`Agregar ${product.name}`}
                              >
                                <span className="material-symbols-outlined text-[18px] select-none">
                                  add
                                </span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>

        {/* ── Footer ── */}
        <div className="border-outline/10 -mx-4 mt-4 flex items-center justify-between border-t px-4 pt-4">
          <span className="font-label-md text-label-md text-on-surface-variant">
            {totalSelected > 0
              ? `${totalSelected} producto${totalSelected !== 1 ? "s" : ""} seleccionado${totalSelected !== 1 ? "s" : ""}`
              : "Selecciona productos"}
          </span>
          <Button
            variant="default"
            disabled={totalSelected === 0}
            onClick={handleAdd}
            className="flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">check</span>
            Añadir a la lista
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
