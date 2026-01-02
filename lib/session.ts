export const SESSION_KEY = 'scope_session'

export type Session = {
  user: {
    id: string
    email: string
  }
}

// 👉 Leer cookie en el browser
export function getSession(): Session | null {
  if (typeof document === 'undefined') return null

  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${SESSION_KEY}=`))

  if (!match) return null

  try {
    return JSON.parse(decodeURIComponent(match.split('=')[1]))
  } catch {
    return null
  }
}

// 👉 Setear cookie
export function setSession(session: Session) {
  document.cookie = `${SESSION_KEY}=${encodeURIComponent(
    JSON.stringify(session)
  )}; path=/`
}

// 👉 Limpiar cookie
export function clearSession() {
  document.cookie = `${SESSION_KEY}=; Max-Age=0; path=/`
}
