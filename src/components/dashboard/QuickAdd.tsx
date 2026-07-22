"use client";

import { searchExampleProducts } from "@/lib/constants";
import { useState, useRef, useEffect } from "react";

export default function QuickAdd() {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const suggestions = query.trim()
    ? searchExampleProducts(query, 8)
    : [];

  // Cerrar sugerencias al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="mb-xl w-full">
      <div className="bg-surface-container-lowest rounded-xl p-md surface-level-2">
        <h2 className="font-headline-md text-headline-md text-on-surface font-semibold mb-sm">
          Quick Add
        </h2>
        <div className="flex flex-col md:flex-row gap-sm">
          <div className="flex-1 relative" ref={wrapperRef}>
            <input
              className="w-full h-14 pl-sm pr-sm rounded-lg bg-[#EDF2F4] border-2 border-transparent focus:bg-surface-container-lowest focus:border-primary transition-all font-body-md text-body-md text-on-surface placeholder:text-outline outline-none surface-level-2"
              placeholder="e.g. 2L Milk, Apples..."
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
              <div className="absolute z-50 left-0 right-0 top-full mt-1 bg-surface-container-lowest rounded-lg shadow-lg border border-surface-variant overflow-hidden">
                {suggestions.map((product) => (
                  <button
                    key={product.name}
                    className="w-full text-left px-4 py-2.5 font-body-md text-body-md text-on-surface hover:bg-tertiary-fixed transition-colors cursor-pointer flex items-center gap-3"
                    onClick={() => {
                      setQuery(product.name);
                      setShowSuggestions(false);
                    }}
                  >
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
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
          <div className="flex gap-sm">
            <select className="h-14 px-sm rounded-lg bg-[#EDF2F4] border-2 border-transparent focus:bg-surface-container-lowest focus:border-primary transition-all font-body-md text-body-md text-on-surface outline-none cursor-pointer hidden md:block">
              <option>Compra Semanal</option>
              <option>Cena Viernes</option>
              <option>Barbacoa</option>
            </select>
            <button className="h-14 cursor-pointer px-md bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-colors flex items-center gap-xs">
              <span className="material-symbols-outlined">add</span>
              Añadir producto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
