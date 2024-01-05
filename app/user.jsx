'use client'

import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export const LoginButton = () => {
  return <button className="inline-flex text-white bg-indigo-500 border-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => signIn()}>Sign in</button>
}

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>Sign Out</button>
}

export const RegisterButton = () => {
  const router = useRouter();
  return <button className="inline-flex text-white bg-indigo-500 border-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => router.push('/register')}>Register</button>
}

export const User = () => {
  const { data: session } = useSession()
  //console.log('Client Session', session)
  return <p>{JSON.stringify(session)}</p>
}