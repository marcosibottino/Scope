import type { CompanyId } from '@/lib/homeData'

export type Company = {
  id: CompanyId
  name: string
  environment: 'production' | 'development'
}

export const companies: Company[] = [
  {
    id: 'scope-prod',
    name: 'Scope',
    environment: 'production',
  },
  {
    id: 'scope-dev',
    name: 'Scope',
    environment: 'development',
  },
  {
    id: 'acme',
    name: 'Acme Inc',
    environment: 'production',
  },
]

