import QuickAdd from "@/components/dashboard/QuickAdd";
import QuickCategories from "@/components/dashboard/QuickCategories";
import ActiveLists from "@/components/dashboard/ActiveLists";

export default function DashboardPage() {
  return (
    <>
      <QuickAdd />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        {/* Left: Quick Categories — desktop only */}
        <section className="lg:col-span-4 hidden lg:block">
          <QuickCategories />
        </section>

        {/* Right: Listas Activas */}
        <section className="lg:col-span-8">
          <ActiveLists />
        </section>
      </div>
    </>
  );
}
