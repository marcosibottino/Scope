const KEY = 'scope_active_company'

export function getActiveCompany() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(KEY)
}

export function setActiveCompany(id: string) {
  localStorage.setItem(KEY, id)
}
