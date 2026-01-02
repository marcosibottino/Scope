import Link from 'next/link'
import { ICONS } from '@/components/icons'

export default function AutomationsCard() {
  const Icon = ICONS['automations']

  return (
    <Link
      href="/dashboard/services/automations"
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
          <h3 className="text-sm font-medium">Automations</h3>
        </div>

        <span className="text-xs text-green-400">
          ● Running
        </span>
      </div>

      {/* Body */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between opacity-80">
          <span>Active workflows</span>
          <span className="font-medium">3</span>
        </div>

        <div className="flex justify-between opacity-80">
          <span>Last run</span>
          <span className="font-medium">2m ago</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs opacity-60 group-hover:opacity-100">
        View automations →
      </div>
    </Link>
  )
}
