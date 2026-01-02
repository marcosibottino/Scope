import { JSX } from "react"

export function HomeIcon() {
  return <span>🏠</span>
}

export function SettingsIcon() {
  return <span>⚙️</span>
}

export function LogoutIcon() {
  return <span>🚪</span>
}

export function AutomationsIcon() {
  return <span>🔁</span>
}

export function AssetsIcon() {
  return <span>📁</span>
}

export function ReportsIcon() {
  return <span>📊</span>
}

export function IntegrationsIcon() {
  return <span>🔌</span>
}

export function UsersIcon() {
  return <span>👥</span>
}

export function NotificationsIcon() {
  return <span>🔔</span>
}

export function MeetingIcon() {
  return <span>📆</span>
}

export function AuditIcon() {
  return <span>🧾</span>
}


export const ICONS: Record<string, () => JSX.Element> = {
  home: HomeIcon,
  settings: SettingsIcon,
  logout: LogoutIcon,

  automations: AutomationsIcon,
  assets: AssetsIcon,
  reports: ReportsIcon,
  integrations: IntegrationsIcon,
  users: UsersIcon,
  notifications: NotificationsIcon,
  meeting: MeetingIcon,
  audit: AuditIcon,
}
