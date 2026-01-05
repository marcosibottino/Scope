'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ICONS } from '@/components/icons'
import { clearSession } from '@/lib/session'
import { SIDEBAR_ITEMS } from '@/app/config/sidebar'
import CompanySwitcher from '@/components/sidebar/CompanySwitcher'

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  function isActive(href?: string) {
    if (!href) return false
    return pathname === href
  }

  function handleAction(id: string) {
    if (id === 'logout') {
      clearSession()
      router.push('/login')
    }
  }

  const topItems = SIDEBAR_ITEMS.filter(i => i.position !== 'bottom')
  const bottomItems = SIDEBAR_ITEMS.filter(i => i.position === 'bottom')

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-white/10 bg-black">
      
      {/* Company Switcher (HEADER REAL) */}
      <div className="p-4 border-b border-white/10">
        <CompanySwitcher />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2">
        {topItems.map(item => {
          const Icon = ICONS[item.icon]
          const active = isActive(item.href)

          return item.href ? (
            <Link
              key={item.id}
              href={item.href}
              className={`
                flex items-center gap-3 rounded px-3 py-2 text-sm
                ${active
                  ? 'bg-white/10 text-white'
                  : 'opacity-80 hover:opacity-100 hover:bg-white/5'}
              `}
            >
              <Icon />
              {item.label}
            </Link>
          ) : null
        })}
      </nav>

      {/* Bottom actions */}
      <div className="p-2 border-t border-white/10">
        {bottomItems.map(item => {
          const Icon = ICONS[item.icon]
          const active = item.href && pathname === item.href

          if (item.href) {
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  flex items-center gap-3 rounded px-3 py-2 text-sm
                  ${active
                    ? 'bg-white/10 text-white'
                    : 'opacity-80 hover:opacity-100 hover:bg-white/5'}
                `}
              >
                <Icon />
                {item.label}
              </Link>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => handleAction(item.id)}
              className="flex w-full items-center gap-3 rounded px-3 py-2 text-sm opacity-80 hover:opacity-100 hover:bg-white/5"
            >
              <Icon />
              {item.label}
            </button>
          )
        })}
      </div>
    </aside>
  )
}
