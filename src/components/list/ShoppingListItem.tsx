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
    <li className="group bg-background hover:bg-surface-container-low hover:border-surface-variant flex min-h-[64px] cursor-move flex-col items-start justify-between gap-3 rounded-lg border border-transparent p-3 transition-colors sm:flex-row sm:items-center sm:gap-0">
      {/* Left: drag + checkbox + label */}
      <div className="flex w-full flex-1 items-start gap-4 sm:items-center">
        {/* Drag handle */}
        <span className="material-symbols-outlined text-outline-variant mt-1 cursor-grab opacity-50 transition-opacity select-none group-hover:opacity-100 active:cursor-grabbing sm:mt-0">
          drag_indicator
        </span>

        {/* Checkbox */}
        <label className="relative mt-1 flex cursor-pointer items-center sm:mt-0">
          <input
            type="checkbox"
            defaultChecked={item.checked}
            className="list-item-checkbox peer sr-only"
          />
          <div className="border-outline-variant peer-checked:bg-primary peer-checked:border-primary flex h-6 w-6 items-center justify-center rounded-[6px] border-2 transition-colors">
            <span className="material-symbols-outlined text-on-primary text-[18px] font-bold opacity-0 transition-opacity peer-checked:opacity-100">
              check
            </span>
          </div>
        </label>

        {/* Labels */}
        <div className="min-w-0 flex-1">
          <p
            className={`font-body-lg text-body-lg truncate transition-all ${
              item.checked
                ? "text-on-surface-variant line-through"
                : "text-on-background"
            }`}
          >
            {item.title}
          </p>
          {item.notes && (
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined shrink-0 text-[14px]">
                notes
              </span>
              <span className="truncate">{item.notes}</span>
            </p>
          )}
          {item.photoUrl && (
            <div className="mt-2 flex items-center gap-2">
              <img
                src={item.photoUrl}
                alt={`Foto de ${item.title}`}
                className="border-outline-variant/30 h-10 w-10 rounded-md border object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Right: quantity controls + more */}
      <div className="border-surface-variant flex w-full items-center justify-between gap-3 self-end border-t pt-3 sm:w-auto sm:justify-end sm:self-auto sm:border-t-0 sm:pt-0">
        {item.unit ? (
          <span className="font-body-md text-body-md text-on-surface-variant mr-4">
            {item.unit}
          </span>
        ) : (
          <div className="flex items-center rounded-md bg-[#EDF2F4] px-2 py-1">
            <button
              type="button"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                remove
              </span>
            </button>
            <span className="font-label-md text-label-md mx-3 w-4 min-w-[1rem] text-center select-none">
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
          className="text-outline-variant hover:text-primary hidden p-2 transition-colors sm:block"
          title="Más opciones"
        >
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
    </li>
  );
}
