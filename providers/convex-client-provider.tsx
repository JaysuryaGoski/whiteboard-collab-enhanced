"use client";

import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

// Create Convex client instance using environment variable
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      {/* Use Authenticated component to check if user is logged in */}
      <Authenticated>
        {children}
      </Authenticated>
      {/* Display loading state when user authentication is being checked */}
      <Loading />
    </ConvexProviderWithClerk>
  );
};
