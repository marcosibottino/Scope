import AssetsCard from "@/components/dashboard/AssetsCard";
import AutomationsCard from "@/components/dashboard/AutomationsCard";
import IntegrationsCard from "@/components/dashboard/IntegrationsCard";
import ReportsCard from "@/components/dashboard/ReportsCard";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 opacity-70">
        Workspace status
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AutomationsCard />
        <AssetsCard/>
        <ReportsCard/>
        <IntegrationsCard/>
      </div>
    </div>
  )
}
