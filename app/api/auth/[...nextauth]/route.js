import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from 'next-auth/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../../lib/prismadb'
import bcrypt from 'bcrypt'

export const authOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  database: process.env.DATABASE_URL,
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      credentials: {
        // username: {
        //   label: 'User Name',
        //   placeholder: 'Enter Username'
        // },
        // password: { label: 'Password', type: 'password' }

        email: { label: "Email", type: "text", placeholder: "yourName@xyz.com" },
        password: { label: "Password", type: "password" },
        // username: { label: "UserName", type: "text", placeholder: "John Smith" },
      },
      async authorize(credentials) {

        //const user = {id : "1", name: "omer", email : "omer@gmail.com",  username : "omer", password: "123" }

        // if(credentials?.username === user.username && credentials?.password === user.password){
        //     return user
        // }
        // else{
        //     return null
        // }

        // check to see if email and password is there
        if(!credentials.email || !credentials.password) {
          throw new Error('Please enter an Username and password')
      }

      // check to see if user exists
      const user = await prisma.user.findUnique({
          where: {
              email: credentials.email
          }
      });


      // // check to see if password matches
      // if(user != null){
      // const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
      // }    

      if(user != null && credentials?.email === user.email){
        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
        if(passwordMatch)  
          return user
      }
      else{
          return null
      }  

      return user;
      }
    }
    ),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ]

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }