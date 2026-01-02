import Link from 'next/link'
import { ICONS } from '@/components/icons'

export default function IntegrationsCard() {
  const Icon = ICONS['integrations']

  // Fake state
  const connected = 4
  const issues = 1

  return (
    <Link
      href="/dashboard/services/integrations"
      className="
        group block rounded-xl border border-white/10
        bg-white/5 p-5 transition
        hover:bg-white/10
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon />
          <h3 className="text-sm font-medium">Integrations</h3>
        </div>

        <span className="text-xs text-yellow-400">
          ● Partial
        </span>
      </div>

      {/* Body */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between opacity-80">
          <span>Connected</span>
          <span className="font-medium">{connected}</span>
        </div>

        <div className="flex justify-between opacity-80">
          <span>Issues</span>
          <span className="font-medium">{issues}</span>
        </div>
      </div>

      {/* Integrations list */}
      <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-70">
        <span className="rounded bg-white/10 px-2 py-1">Slack</span>
        <span className="rounded bg-white/10 px-2 py-1">Google</span>
        <span className="rounded bg-white/10 px-2 py-1">GitHub</span>
        <span className="rounded bg-white/10 px-2 py-1">Notion</span>
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs opacity-60 group-hover:opacity-100">
        View integrations →
      </div>
    </Link>
  )
}
