import { authMiddleware, clerkClient } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  async afterAuth(auth, req, evt) {
    // Check if the user is an admin for protected routes
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');

    if (isAdminRoute) {
      if (!auth.userId) {
        // If there's no userId, return a 403 response (unauthenticated)
        return new Response('Not authorized', { status: 403 });
      }

      const user = await clerkClient.users.getUser(auth.userId);

      if (user?.publicMetadata?.role !== 'admin') {
        // Redirect non-admin users to homepage if they try to access admin pages
        return new Response('Not authorized', { status: 403 });
      }
    }
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
