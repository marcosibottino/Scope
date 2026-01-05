'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { companies } from '@/lib/company'
import { getActiveCompany, setActiveCompany } from '@/lib/activeCompany'
import type { CompanyId } from '@/lib/homeData'

type CompanyContextType = {
  companyId: CompanyId
  setCompanyId: (id: CompanyId) => void
}

const CompanyContext = createContext<CompanyContextType | null>(null)

export function CompanyProvider({ children }: { children: React.ReactNode }) {
  const [companyId, setCompanyIdState] = useState<CompanyId>('scope-prod')

  useEffect(() => {
    const stored = getActiveCompany()
    if (stored) setCompanyIdState(stored as CompanyId)
  }, [])

  function setCompanyId(id: CompanyId) {
    setCompanyIdState(id)
    setActiveCompany(id)
  }

  return (
    <CompanyContext.Provider value={{ companyId, setCompanyId }}>
      {children}
    </CompanyContext.Provider>
  )
}

export function useCompany() {
  const ctx = useContext(CompanyContext)
  if (!ctx) {
    throw new Error('useCompany must be used within CompanyProvider')
  }
  return ctx
}
