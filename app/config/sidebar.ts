export type SidebarItem = {
  id: string
  label: string
  href?: string
  icon: string
  position?: 'top' | 'bottom'
  section?: 'services'
  status?: 'core' | 'later'
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  // ===== Top =====
  {
    id: 'home',
    label: 'Home',
    href: '/dashboard',
    icon: 'home',
    position: 'top',
  },

  // ===== Services =====
  {
    id: 'automations',
    label: 'Automations',
    href: '/dashboard/services/automations',
    icon: 'automations',
    section: 'services',
    status: 'core',
  },
  {
    id: 'assets',
    label: 'Assets',
    href: '/dashboard/services/assets',
    icon: 'assets',
    section: 'services',
    status: 'core',
  },
  {
    id: 'reports',
    label: 'Reports',
    href: '/dashboard/services/reports',
    icon: 'reports',
    section: 'services',
    status: 'core',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    href: '/dashboard/services/integrations',
    icon: 'integrations',
    section: 'services',
    status: 'core',
  },
  {
    id: 'users',
    label: 'Users & Roles',
    href: '/dashboard/services/users',
    icon: 'users',
    section: 'services',
    status: 'later',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    href: '/dashboard/services/notifications',
    icon: 'notifications',
    section: 'services',
    status: 'later',
  },
  {
    id: 'meetings',
    label: 'Meetings',
    href: '/dashboard/services/meeting',
    icon: 'meeting',
    section: 'services',
    status: 'later',
  },
  {
    id: 'audit',
    label: 'Audit Logs',
    href: '/dashboard/services/audit-logs',
    icon: 'audit',
    section: 'services',
    status: 'later',
  },
  
  // ===== Bottom =====
  {
    id: 'settings',
    label: 'Settings',
    href: '/dashboard/settings',
    icon: 'settings',
    position: 'bottom',
  },
  {
    id: 'logout',
    label: 'Logout',
    icon: 'logout',
    position: 'bottom',
  },
]
