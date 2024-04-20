"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export function CrispChat() {
  useEffect(() => {
    Crisp.configure("d79ca77a-da7b-474d-9a01-08dc064569ae");
  }, []);

  return null;
}
