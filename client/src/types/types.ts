export interface Founder {
  id: string
  firstName: string
  lastName: string
  title: string
  companyId: number
  company?: Company
}

export interface Company {
  id: string
  city: string
  state: string
  name: string
  description: string
  founders?: Founder[]
  logoUrl?: string
  dateFounded: Date | string
}

export interface ApplicationState {
  companies: Company[]
  founders: Founder[]
  user: User | null
  status: any | null
  selectedDetailItem: Company | Founder | null
}

export interface User {
  login: string
  firstName: string
  lastName: string
  avatarUrl?: string
}

export interface ReducerAction {
  type: string
  payload: any
}
