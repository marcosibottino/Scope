import Link from 'next/link'
import { ICONS } from '@/components/icons'

type MeetingsCardProps = {
  calendars: number
  status: 'synced' | 'not-synced'
  next?: {
    label: string
    startsIn: string
  } | null
}

export default function MeetingsCard({
  calendars,
  status,
  next,
}: MeetingsCardProps) {
  const Icon = ICONS['meetings']

  const statusColor =
    status === 'synced'
      ? 'text-green-400'
      : 'text-yellow-400'

  const statusLabel =
    status === 'synced' ? '● Synced' : '● Not synced'

  return (
    <Link
      href="/dashboard/services/meetings"
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
          <h3 className="text-sm font-medium">Meetings</h3>
        </div>

        <span className={`text-xs ${statusColor}`}>
          {statusLabel}
        </span>
      </div>

      {/* Body */}
      <div className="mt-4 space-y-3 text-sm">
        <div className="flex justify-between opacity-80">
          <span>Connected calendars</span>
          <span className="font-medium">{calendars}</span>
        </div>

        {next ? (
          <div className="rounded-md bg-white/5 p-3">
            <p className="text-xs opacity-60">Next meeting</p>
            <p className="mt-1 font-medium">{next.label}</p>
            <p className="mt-1 text-xs opacity-70">
              Starts in {next.startsIn}
            </p>
          </div>
        ) : (
          <div className="rounded-md bg-white/5 p-3 text-xs opacity-60">
            No upcoming meetings
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs opacity-60 group-hover:opacity-100">
        View meetings →
      </div>
    </Link>
  )
}
