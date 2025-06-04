"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TokenRefresher } from "@/hooks/useTokenRefresher";
import Header from "@/components/Header";

export default function CustomLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <div className="min-h-screen bg-gray-50 ">
      <QueryClientProvider client={queryClient}>
        <TokenRefresher />
        <Header />
        {children}
      </QueryClientProvider>
    </div>
  );
}
