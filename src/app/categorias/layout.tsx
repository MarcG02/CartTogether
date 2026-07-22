import DashboardTopAppBar from "@/components/dashboard/DashboardTopAppBar";
import SideNavBar from "@/components/dashboard/SideNavBar";

export default function CategoriasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardTopAppBar />
      <div className="flex">
        <SideNavBar />
        <main className="flex-1 md:ml-64 p-margin-mobile md:p-lg mx-auto w-full max-w-[1920px]">
          {children}
        </main>
      </div>
    </>
  );
}
