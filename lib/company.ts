export type Company = {
  id: string
  name: string
  environment: 'production' | 'staging' | 'development'
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
