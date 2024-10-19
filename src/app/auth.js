import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

import { getUserByEmail } from "./data/users";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if(credentials === null) return null;
        try {
          const user = getUserByEmail(credentials?.email);

          if(user) {
            const isMatch = user?.password === credentials?.password;

            if(isMatch) {
              return user;
            } else {
              throw new Error("Invalid credentials")
            }
          } else {
            throw new Error("User Not Found")
          }
        } catch (error) {
          throw new Error("Invalid credentials")
        }
      }
    })
  ]
})