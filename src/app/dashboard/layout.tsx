import DashboardTopAppBar from "@/components/dashboard/DashboardTopAppBar";
import SideNavBar from "@/components/dashboard/SideNavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardTopAppBar />
      <div className="flex">
        <SideNavBar />
        <main className="flex-1 md:ml-64 p-margin-mobile md:p-lg max-w-[1920px] mx-auto w-full">
          {children}
        </main>
      </div>
    </>
  );
}
