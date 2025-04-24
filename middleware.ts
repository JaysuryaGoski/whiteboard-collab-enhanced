import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/login", "/signup"], // Allow public access to login and signup pages
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // Protect all routes except static files
    "/(api|trpc)(.*)",        // Protect API routes
  ],
};
