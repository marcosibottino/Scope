import Link from 'next/link'

export type ActivityItem = {
  id: number
  label: string
  time: string
}

type ActivityCardProps = {
  items: ActivityItem[]
}

export default function ActivityCard({ items }: ActivityCardProps) {
  return (
    <Link
      href="/dashboard/services/audit-logs"
      className="
        group block rounded-xl border border-white/10
        bg-white/5 p-5 transition
        hover:bg-white/10
      "
    >
      {/* Header */}
      <h3 className="text-sm font-medium">Recent activity</h3>

      {/* Timeline */}
      <div className="mt-4 space-y-3 text-sm">
        {items.length === 0 && (
          <div className="text-xs opacity-60">
            No recent activity
          </div>
        )}

        {items.map(item => (
          <div
            key={item.id}
            className="flex items-start justify-between gap-3"
          >
            <div className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="opacity-80">{item.label}</span>
            </div>

            <span className="shrink-0 text-xs opacity-50">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs opacity-60 group-hover:opacity-100">
        View audit logs →
      </div>
    </Link>
  )
}
