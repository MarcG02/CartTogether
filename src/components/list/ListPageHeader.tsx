import AddProductDialog from "./AddProductDialog";

interface ListPageHeaderProps {
  title: string;
  date: string;
  remainingItems: number;
  estimatedCost: number;
}

export default function ListPageHeader({
  title,
  date,
  remainingItems,
  estimatedCost,
}: ListPageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-2 text-on-surface-variant mb-2">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider">
            {date}
          </span>
        </div>
        <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-background">
          {title}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          {remainingItems} items remaining &bull; Estimated ${estimatedCost.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <AddProductDialog />
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary-fixed-dim/20 transition-colors font-label-md text-label-md cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">share</span>
          Share List
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed transition-colors font-label-md text-label-md cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">print</span>
          Print
        </button>
      </div>
    </div>
  );
}
