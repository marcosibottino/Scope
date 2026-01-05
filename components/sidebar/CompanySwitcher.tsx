'use client'

import { useEffect, useState } from 'react'
import { companies } from '@/lib/company'
import { getActiveCompany, setActiveCompany } from '@/lib/activeCompany'

export default function CompanySwitcher() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const stored = getActiveCompany()
    setActiveId(stored || companies[0].id)
  }, [])

  // ⛔️ ACÁ VA EL GUARD
  if (!activeId) {
    return (
      <div className="h-[56px] rounded-lg bg-white/5 animate-pulse" />
    )
  }

  const active = companies.find(c => c.id === activeId)!

  return (
    <div className="relative">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full rounded-lg border border-white/10
          bg-white/5 px-3 py-2 text-left
          hover:bg-white/10
        "
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-left">
            <span className="text-sm font-medium">
              {active.name}
            </span>
            <span className="text-xs opacity-60 capitalize">
              {active.environment}
            </span>
          </div>

          <svg
            className="h-4 w-4 opacity-50"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 7l4.5 4.5L14.5 7" />
          </svg>
        </div>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-white/10 bg-black/90">
          {companies.map(company => (
            <button
              key={company.id}
              onClick={() => {
                setActiveCompany(company.id)
                setActiveId(company.id) // ✅ SIN reload
                setOpen(false)
              }}
              className="
                w-full rounded-md px-3 py-2 text-left
                hover:bg-white/10
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {company.name}
                  </span>
                  <span className="text-xs opacity-60 capitalize">
                    {company.environment}
                  </span>
                </div>

                {company.id === activeId && (
                  <span className="text-xs opacity-60">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
