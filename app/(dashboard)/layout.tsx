import { NavBar } from "@/components/navBar";
import { SideBar } from "@/components/sideBar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="h-full relative">
      <div
        className="hidden h-full md:flex md:w-72 md:flex-col
        md:fixed md:inset-y-0  bg-gray-900"
      >
        <SideBar apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
      <main className="md:pl-72">
        <NavBar />
        {children}
      </main>
    </div>
  );
}
