export const HOME_DATA = {
  'scope-prod': {
    automations: {
      active: 3,
      lastRun: '2m ago',
      status: 'running',
    },
    assets: {
      total: 124,
      storage: '3.4 GB',
    },
    reports: {
      generated: 18,
      trend: 'up',
    },
    integrations: {
      connected: 4,
      issues: 1,
      items: ['Slack', 'Google', 'GitHub', 'Notion'],
    },
    meetings: {
      calendars: 2,
      status: 'synced',
      next: {
        label: 'Today · 14:30',
        startsIn: '1h 12m',
      },
    },
  },

  'scope-dev': {
    automations: {
      active: 0,
      lastRun: '—',
      status: 'idle',
    },
    assets: {
      total: 12,
      storage: '120 MB',
    },
    reports: {
      generated: 2,
      trend: 'flat',
    },
    integrations: {
      connected: 1,
      issues: 0,
      items: ['Slack'],
    },
    meetings: {
      calendars: 0,
      status: 'not-synced',
      next: null,
    },
  },

  acme: {
    automations: {
      active: 5,
      lastRun: '1m ago',
      status: 'running',
    },
    assets: {
      total: 540,
      storage: '22 GB',
    },
    reports: {
      generated: 42,
      trend: 'up',
    },
    integrations: {
      connected: 6,
      issues: 2,
      items: ['Slack', 'Google', 'GitHub', 'Notion', 'Jira', 'Figma'],
    },
    meetings: {
      calendars: 3,
      status: 'synced',
      next: {
        label: 'Tomorrow · 10:00',
        startsIn: '18h',
      },
    },
  },
} as const

export type CompanyId = keyof typeof HOME_DATA
