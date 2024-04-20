import { Heading } from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";

export default async function SettingsPage() {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Configurações"
        description="Aqui você pode configurar as suas preferências de usuário"
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? "Você é um usuário Pro" : "Você é um usuário Free"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
}
