import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function Component() {
  const { data: session } = useSession()
  const router = useRouter();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        {/* <button onClick={() => router.push('/auth/signout')}>Sign out</button> */}
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}