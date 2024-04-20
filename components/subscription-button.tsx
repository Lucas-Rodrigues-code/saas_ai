"use client";

import { useState } from "react";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";

interface SubscriptionButtonProps {
  isPro: boolean;
}
export function SubscriptionButton({ isPro = false }: SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubscription() {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error: any) {
      console.log("BILLING_ERROR", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      disabled={loading}
      variant={isPro ? "default" : "pro"}
      onClick={handleSubscription}
    >
      {isPro ? "Gerenciar assinatura" : "Tornar-se PRO"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
}
