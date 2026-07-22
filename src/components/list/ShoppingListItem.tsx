export interface ShoppingListItemData {
  id: string;
  title: string;
  notes?: string;
  quantity: number;
  unit?: string;
  checked: boolean;
  photoUrl?: string;
}

interface ShoppingListItemProps {
  item: ShoppingListItemData;
}

export default function ShoppingListItem({ item }: ShoppingListItemProps) {
  return (
    <li className="group flex items-start sm:items-center justify-between min-h-[64px] bg-background rounded-lg p-3 hover:bg-surface-container-low transition-colors border border-transparent hover:border-surface-variant cursor-move flex-col sm:flex-row gap-3 sm:gap-0">
      {/* Left: drag + checkbox + label */}
      <div className="flex items-start sm:items-center gap-4 flex-1 w-full">
        {/* Drag handle */}
        <span className="material-symbols-outlined text-outline-variant cursor-grab active:cursor-grabbing opacity-50 group-hover:opacity-100 transition-opacity mt-1 sm:mt-0 select-none">
          drag_indicator
        </span>

        {/* Checkbox */}
        <label className="relative flex items-center cursor-pointer mt-1 sm:mt-0">
          <input
            type="checkbox"
            defaultChecked={item.checked}
            className="list-item-checkbox sr-only peer"
          />
          <div className="w-6 h-6 border-2 border-outline-variant rounded-[6px] flex items-center justify-center transition-colors peer-checked:bg-primary peer-checked:border-primary">
            <span className="material-symbols-outlined text-on-primary text-[18px] opacity-0 peer-checked:opacity-100 transition-opacity font-bold">
              check
            </span>
          </div>
        </label>

        {/* Labels */}
        <div className="flex-1 min-w-0">
          <p
            className={`font-body-lg text-body-lg transition-all truncate ${
              item.checked
                ? "line-through text-on-surface-variant"
                : "text-on-background"
            }`}
          >
            {item.title}
          </p>
          {item.notes && (
            <p className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
              <span className="material-symbols-outlined text-[14px] shrink-0">
                notes
              </span>
              <span className="truncate">{item.notes}</span>
            </p>
          )}
          {item.photoUrl && (
            <div className="flex items-center gap-2 mt-2">
              <img
                src={item.photoUrl}
                alt={`Foto de ${item.title}`}
                className="w-10 h-10 rounded-md object-cover border border-outline-variant/30"
              />
            </div>
          )}
        </div>
      </div>

      {/* Right: quantity controls + more */}
      <div className="flex items-center gap-3 self-end sm:self-auto w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-surface-variant pt-3 sm:pt-0">
        {item.unit ? (
          <span className="font-body-md text-body-md text-on-surface-variant mr-4">
            {item.unit}
          </span>
        ) : (
          <div className="flex items-center bg-[#EDF2F4] rounded-md px-2 py-1">
            <button
              type="button"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                remove
              </span>
            </button>
            <span className="font-label-md text-label-md mx-3 w-4 text-center min-w-[1rem] select-none">
              {item.quantity}
            </span>
            <button
              type="button"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
          </div>
        )}
        <button
          type="button"
          className="text-outline-variant hover:text-primary transition-colors p-2 hidden sm:block"
          title="Más opciones"
        >
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
    </li>
  );
}
