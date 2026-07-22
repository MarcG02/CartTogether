import ShoppingListItem, {
  type ShoppingListItemData,
} from "./ShoppingListItem";

export interface ListCategoryData {
  name: string;
  icon: string;
  items: ShoppingListItemData[];
}

interface ListCategoryGroupProps {
  category: ListCategoryData;
}

export default function ListCategoryGroup({
  category,
}: ListCategoryGroupProps) {
  return (
    <section className="bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(45,106,79,0.05)] p-4 md:p-6 transition-all duration-300 hover:shadow-[0px_8px_30px_rgba(45,106,79,0.08)]">
      {/* Category header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">
            {category.icon}
          </span>
          <span className="font-label-md text-label-md">{category.name}</span>
        </div>
      </div>

      {/* Items list */}
      <ul className="space-y-2">
        {category.items.map((item) => (
          <ShoppingListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
