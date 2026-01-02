'use client'

import { useRouter } from 'next/navigation'
import { setSession } from '@/lib/session'

export default function LoginPage() {
  const router = useRouter()

 function handleLogin() {
    setSession({
      user: {
        id: '1',
        email: 'demo@scope.dev',
      },
    })
    router.push('/dashboard')
  }

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-xl font-semibold mb-6">Scope</h1>

      <button
        onClick={handleLogin}
        className="w-full rounded-md bg-white text-black py-2 text-sm font-medium"
        >
        Sign in
      </button>
    </div>
  )
}
