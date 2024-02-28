import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {

  },
  {
    callbacks: {
      authorized: ({ token }) => token?.email === "j3261221@gmail.com",
    },
  }
)

export const config = { matcher: ["/admin"] }