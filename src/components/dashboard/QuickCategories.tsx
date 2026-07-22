import { Beef, Fish, Milk } from "lucide-react";
import { ReactNode } from "react";

type CategoryButtonProps = {
  icon: string | ReactNode;
  label: string;
};

export default function QuickCategories() {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-md surface-level-2 h-full">
      <h2 className="font-headline-md text-headline-md text-on-surface font-semibold mb-md">
        Quick Categories
      </h2>
      <div className="grid grid-cols-2 gap-sm">
        <CategoryButton icon="nutrition" label="Fruta y Verdura" />
        <CategoryButton icon={<Milk />} label="Lácteos" />
        <CategoryButton icon="cleaning_services" label="Limpieza" />
        <CategoryButton icon="bakery_dining" label="Panadería" />
        <CategoryButton icon="liquor" label="Bebidas" />
        <CategoryButton icon="icecream" label="Congelados" />
        <CategoryButton icon={<Beef />} label="Carne" />
        <CategoryButton icon={<Fish />} label="Pescado" />
      </div>
    </div>
  );
}

/* ─── Category Button ─── */
function CategoryButton({ icon, label }: CategoryButtonProps) {
  return (
    <button className="flex flex-col items-center cursor-pointer justify-center p-md rounded-xl bg-[#F8F9FA] hover:bg-tertiary-fixed transition-colors border border-surface-variant group">
      <span className="material-symbols-outlined text-[32px] text-primary group-hover:text-tertiary mb-xs transition-colors">
        {icon}
      </span>
      <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-tertiary-container text-center">
        {label}
      </span>
    </button>
  );
}
