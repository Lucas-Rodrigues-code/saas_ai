import { NavBar } from "@/components/navBar";
import { SideBar } from "@/components/sideBar";
import { getApiLimitCount } from "@/lib/api-limit";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <div
        className="hidden h-full md:flex md:w-72 md:flex-col
        md:fixed md:inset-y-0 z-[80] bg-gray-900"
      >
        <SideBar apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <NavBar />
        {children}
      </main>
    </div>
  );
}
