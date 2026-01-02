import Link from 'next/link'
import { ICONS } from '@/components/icons'

export default function AssetsCard() {
  const Icon = ICONS['assets']

  return (
    <Link
      href="/dashboard/services/assets"
      className="
        group block rounded-xl border border-white/10
        bg-white/5 p-5 transition
        hover:bg-white/10
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <Icon />
        <div>
          <h3 className="text-sm font-medium">Assets</h3>
          <p className="text-xs opacity-60">Storage</p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between opacity-80">
          <span>Total files</span>
          <span className="font-medium">124</span>
        </div>

        <div className="flex justify-between opacity-80">
          <span>Storage used</span>
          <span className="font-medium">3.4 GB</span>
        </div>

        <div className="flex justify-between opacity-80">
          <span>Last upload</span>
          <span className="font-medium">10m ago</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs opacity-60 group-hover:opacity-100">
        View assets →
      </div>
    </Link>
  )
}
