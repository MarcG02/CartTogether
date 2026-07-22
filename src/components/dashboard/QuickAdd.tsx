import { Plus } from "lucide-react";

export default function QuickAdd() {
  return (
    <section className="mb-xl w-full">
      <div className="bg-surface-container-lowest rounded-xl p-md surface-level-2">
        <h2 className="font-headline-md text-headline-md text-on-surface font-semibold mb-sm">
          Quick Add
        </h2>
        <div className="flex flex-col md:flex-row gap-sm">
          <div className="flex-1 relative">
            <input
              className="w-full h-14 pl-sm pr-sm rounded-lg bg-[#EDF2F4] border-2 border-transparent focus:bg-surface-container-lowest focus:border-primary transition-all font-body-md text-body-md text-on-surface placeholder:text-outline outline-none surface-level-2"
              placeholder="e.g. 2L Milk, Apples..."
              type="text"
            />
          </div>
          <div className="flex gap-sm">
            <select className="h-14 px-sm rounded-lg bg-[#EDF2F4] border-2 border-transparent focus:bg-surface-container-lowest focus:border-primary transition-all font-body-md text-body-md text-on-surface outline-none cursor-pointer hidden md:block">
              <option>Compra Semanal</option>
              <option>Cena Viernes</option>
              <option>Barbacoa</option>
            </select>
            <button className="h-14 cursor-pointer px-md bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-colors flex items-center gap-xs">
              <span className="material-symbols-outlined">
                <Plus />
              </span>
              Añadir producto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
