import Link from 'next/link'
import { ICONS } from '@/components/icons'

type ReportsCardProps = {
  series: number[]
  generated: number
  lastReport: string
}

export default function ReportsCard({
  series,
  generated,
  lastReport,
}: ReportsCardProps) {
  const Icon = ICONS['reports']

  const width = 260
  const height = 90
  const padding = 8

  const max = Math.max(...series, 1)

  const points = series
    .map((value, index) => {
      const x =
        padding +
        (index / (series.length - 1)) * (width - padding * 2)

      const y =
        height -
        padding -
        (value / max) * (height - padding * 2)

      return `${x},${y}`
    })
    .join(' ')

  const areaPath = `
    M ${padding},${height - padding}
    L ${points}
    L ${width - padding},${height - padding}
    Z
  `

  const lastPoint = points.split(' ').pop()

  return (
    <Link
      href="/dashboard/services/reports"
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
          <h3 className="text-sm font-medium">Reports</h3>
          <p className="text-xs opacity-60">Analytics</p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="overflow-visible"
        >
          <defs>
            <linearGradient
              id="reportsGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#60a5fa"
                stopOpacity="0.4"
              />
              <stop
                offset="100%"
                stopColor="#60a5fa"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {/* Area */}
          <path d={areaPath} fill="url(#reportsGradient)" />

          {/* Line */}
          <polyline
            points={points}
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Last point */}
          {lastPoint && (
            <circle
              cx={lastPoint.split(',')[0]}
              cy={lastPoint.split(',')[1]}
              r="4"
              fill="#60a5fa"
            />
          )}
        </svg>
      </div>

      {/* Metrics */}
      <div className="mt-3 space-y-1 text-sm">
        <div className="flex justify-between opacity-80">
          <span>Reports generated</span>
          <span className="font-medium">{generated}</span>
        </div>

        <div className="flex justify-between opacity-80">
          <span>Last report</span>
          <span className="font-medium">{lastReport}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-xs opacity-60 group-hover:opacity-100">
        View reports →
      </div>
    </Link>
  )
}
