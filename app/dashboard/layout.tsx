import { CompanyProvider } from '@/components/company/CompanyProvider'
import Sidebar from '@/components/sidebar/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CompanyProvider>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </CompanyProvider>
  )
}
