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
    <section className="bg-surface-container-lowest rounded-xl p-4 shadow-[0px_4px_20px_rgba(45,106,79,0.05)] transition-all duration-300 hover:shadow-[0px_8px_30px_rgba(45,106,79,0.08)] md:p-6">
      {/* Category header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center gap-2 rounded-full px-3 py-1">
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
