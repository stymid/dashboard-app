import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // console.log("auth", auth);
      // اینحا یه لاگ داری که باید ببینی بعدن مقایسه کنی ببینی چی داره از کجا میاد.
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      // console.log("nexturl", nextUrl);
      // اینحا یه لاگ داری که باید ببینی بعدن مقایسه کنی ببینی چی داره از کجا میاد.

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
