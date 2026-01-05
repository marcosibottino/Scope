'use client'

import AssetsCard from "@/components/dashboard/AssetsCard";
import AutomationsCard from "@/components/dashboard/AutomationsCard";
import IntegrationsCard from "@/components/dashboard/IntegrationsCard";
import ReportsCard from "@/components/dashboard/ReportsCard";
import MeetingsCard from "@/components/dashboard/MeetingsCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import { HOME_DATA, type CompanyId } from '@/lib/homeData'
import { useEffect, useState } from "react";
import { getActiveCompany } from "@/lib/activeCompany";


export default function DashboardPage() {

  const [companyId, setCompanyId] = useState<CompanyId | null>(null)

    useEffect(() => {
      const stored = getActiveCompany() as CompanyId | null
      setCompanyId(stored)
    }, [])

    if (!companyId) {
      return <div className="p-8 opacity-50">Loading dashboard…</div>
    }

    const data = HOME_DATA[companyId]

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 opacity-70">
        Workspace status
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ActivityCard
          items={[
            {
              id: 1,
              label: 'Automation "Sync CRM" ran',
              time: '2m ago',
            },
            {
              id: 2,
              label: 'Asset "logo.png" uploaded',
              time: '10m ago',
            },
            {
              id: 3,
              label: 'Google Calendar synced',
              time: '1h ago',
            },
            {
              id: 4,
              label: 'Report generated',
              time: '2h ago',
            },
          ]}
        />
        <AutomationsCard
          active={data.automations.active}
          lastRun={data.automations.lastRun}
          status={data.automations.status}
        />
        <AssetsCard
          total={data.assets.total}
          storage={data.assets.storage}
          lastUpload="10m ago"
        />
        <ReportsCard
          series={[2, 4, 3, 6, 5, 7, 6, 9, 8, 11, 10, 14]}
          generated={data.reports.generated}
          lastReport="1h ago"
        />

        <IntegrationsCard
          connected={data.integrations.connected}
          issues={data.integrations.issues}
          items={data.integrations.items}
        />

        <MeetingsCard
          calendars={data.meetings.calendars}
          status={data.meetings.status}
          next={data.meetings.next}
        />
      </div>
    </div>
  )
}
