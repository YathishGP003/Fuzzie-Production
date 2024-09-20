import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"; 
import { ClerkMiddlewareOptions } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/form(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if(isProtectedRoute(req)) auth().protect();
}); 

// export default clerkMiddleware(
//     publicRoutes: [
//         '/',
//         '/api/clerk-webhook',
//         '/api/drive-activity/notification',
//         '/api/payment/success',
//     ],
//     ignoredRoutes: [
//         '/api/auth/callback/discord',
//         '/api/auth/callback/notion',
//         '/api/auth/callback/slack',
//         '/api/flow',
//         '/api/cron/wait',
//       ],
// );

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};