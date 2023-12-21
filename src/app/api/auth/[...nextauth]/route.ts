import NextAuth from "next-auth";
import { AuthOptions } from "@/app/auth";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };



// import { NextApiRequest, NextApiResponse } from "next";
// import GithubProvider from "next-auth/providers/github";
// import { CredentialsProvider } from "next-auth/providers/credentials";
// import { signIn } from "next-auth/react";

// export const authOptions = {
//     providers: [
//       GithubProvider({
//         clientId: process.env.GITHUB_ID,
//         clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       }),
//     ],
//     callbacks: {
//       async signIn(user, account, profile){
//         return true;
//       },
//       async jwt(token, user, account, profile, isNewUser){
//         return token;
//       },
//       async session(session, user){
//         return session
//       }
//     }

// }

// export default (req: NextApiRequest, res: NextApiResponse) =>  NextAuth(req, res, authOptions);