"use client";

import { searchExampleProducts } from "@/lib/constants";
import { useState, useRef, useEffect } from "react";

export default function QuickAdd() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const suggestions = query.trim() ? searchExampleProducts(query, 8) : [];

  // Cerrar sugerencias al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="mb-xl w-full">
      <div className="bg-surface-container-lowest p-md surface-level-2 rounded-xl">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-sm font-semibold">
          Añadir productos rápidamente
        </h2>
        <div className="gap-sm flex flex-col md:flex-row">
          <div className="relative flex-1" ref={wrapperRef}>
            <input
              className="pl-sm pr-sm focus:bg-surface-container-lowest focus:border-primary font-body-md text-body-md text-on-surface placeholder:text-outline surface-level-2 h-14 w-full rounded-lg border-2 border-transparent bg-[#EDF2F4] transition-all outline-none"
              placeholder="e.g. 2L Leche, Manzanas..."
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />

            {/* Sugerencias */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="bg-surface-container-lowest border-surface-variant absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-lg border shadow-lg">
                {suggestions.map((product) => (
                  <button
                    key={product.name}
                    className="font-body-md text-body-md text-on-surface hover:bg-tertiary-fixed flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left transition-colors"
                    onClick={() => {
                      setQuery(product.name);
                      setShowSuggestions(false);
                    }}
                  >
                    <span className="material-symbols-outlined text-primary shrink-0 text-[18px]">
                      add_circle
                    </span>
                    <span>{product.name}</span>
                    {product.unit && (
                      <span className="text-label-sm text-on-surface-variant ml-auto">
                        {product.unit}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="gap-sm flex">
            <select className="px-sm focus:bg-surface-container-lowest focus:border-primary font-body-md text-body-md text-on-surface hidden h-14 cursor-pointer rounded-lg border-2 border-transparent bg-[#EDF2F4] transition-all outline-none md:block">
              <option>Compra Semanal</option>
              <option>Cena Viernes</option>
              <option>Barbacoa</option>
            </select>
            <button className="px-md bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint gap-xs flex h-14 cursor-pointer items-center rounded-lg transition-colors">
              <span className="material-symbols-outlined">add</span>
              Añadir producto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
