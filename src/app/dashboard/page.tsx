import QuickAdd from "@/components/dashboard/QuickAdd";
import QuickCategories, {
  QuickCategoriesMobile,
} from "@/components/dashboard/QuickCategories";
import ActiveLists from "@/components/dashboard/ActiveLists";

export default function DashboardPage() {
  return (
    <>
      <QuickAdd />

      <div className="gap-lg grid grid-cols-1 lg:grid-cols-12">
        {/* Quick Categories — mobile: scroll horizontal, desktop: panel lateral */}
        <section className="lg:col-span-4 min-h-0">
          {/* Mobile: scroll horizontal */}
          <div className="-mx-margin-mobile px-margin-mobile scrollbar-thin overflow-x-auto pb-2 md:-mx-0 md:px-0 lg:hidden">
            <QuickCategoriesMobile />
          </div>

          {/* Desktop: panel lateral — se estira al alto de ActiveLists */}
          <div className="hidden h-full lg:block">
            <QuickCategories />
          </div>
        </section>

        {/* Right: Listas Activas */}
        <section className="lg:col-span-8">
          <ActiveLists />
        </section>
      </div>
    </>
  );
}
