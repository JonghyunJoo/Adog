import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import bcrypt from "bcrypt";
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let db = (await connectDB).db('adog');
        if (!credentials?.email || !credentials?.password) {
          throw new Error('이메일과 비밀번호를 입력하세요');
        }

        let user = await db.collection('user_cred').findOne({ email: credentials.email })
        if (!user) {
          throw new Error('해당 이메일은 없음');
        }

        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          throw new Error('비번틀림');
        }
        console.log(user)
        return {
          id: user.id + '',
          email: user.email,
          name: user.name,
          randomKey: 'Hey cool'
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 //30일
  },


  callbacks: {

    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {
          name: user.name,
          email: user.email,
        };
      }
      return token;
    },

    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },

  adapter: MongoDBAdapter(connectDB),
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/",
  },
};
export default NextAuth(authOptions)
