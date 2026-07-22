interface ListQuickAddProps {
  listTitle: string;
}

export default function ListQuickAdd({ listTitle }: ListQuickAddProps) {
  return (
    <div className="mt-8 bg-surface-container-lowest p-4 rounded-xl shadow-[0px_4px_20px_rgba(45,106,79,0.05)] border border-transparent focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary shrink-0">
          add_circle
        </span>
        <input
          type="text"
          className="flex-1 bg-transparent border-none focus:ring-0 text-body-lg text-on-background placeholder:text-outline outline-none"
          placeholder={`Add an item to '${listTitle}'...`}
        />
        <button
          type="button"
          className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-tint transition-colors shrink-0"
        >
          Add
        </button>
      </div>
    </div>
  );
}
