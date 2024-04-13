import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div>
      <Button variant={"secondary"}>DashboardPage</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
