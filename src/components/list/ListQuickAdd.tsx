"use client";

import { searchExampleProducts } from "@/lib/constants";
import { useState, useRef, useEffect } from "react";

interface ListQuickAddProps {
  listTitle: string;
}

export default function ListQuickAdd({ listTitle }: ListQuickAddProps) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const suggestions = query.trim()
    ? searchExampleProducts(query, 8)
    : [];

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
    <div className="mt-8 bg-surface-container-lowest p-4 rounded-xl shadow-[0px_4px_20px_rgba(45,106,79,0.05)] border border-transparent focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
      <div className="flex items-center gap-3 relative" ref={wrapperRef}>
        <span className="material-symbols-outlined text-primary shrink-0">
          add_circle
        </span>
        <input
          type="text"
          className="flex-1 bg-transparent border-none focus:ring-0 text-body-lg text-on-background placeholder:text-outline outline-none"
          placeholder={`Add an item to '${listTitle}'...`}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />
        <button
          type="button"
          className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-colors shrink-0 cursor-pointer"
        >
          Add
        </button>

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
    </div>
  );
}
