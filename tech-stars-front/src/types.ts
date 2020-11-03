import { AxiosPromise, AxiosRequestConfig } from 'axios'

export interface Toasty {
  description: string
}

export interface Company {
  categories: Categories[] | null
  city: string | null
  created_at: string | null
  description: string | null
  founded_date: string | null
  founders: Founders[]
  id: number
  name: string | null
  short_description: string | null
  state: string | null
  updated_at: string | null
}

export interface Founders {
  company_id: number
  created_at: string | null
  first_name: string | null
  id: number
  last_name: string | null
  title: string | null
  updated_at: string | null
}

export interface Categories {
  company_id: number
  created_at: string | null
  id: number
  name: string | null
  updated_at: string | null
}

export interface CompaniesPayload {
  config: AxiosRequestConfig
  data: Company[]
  headers: any
  request: AxiosPromise
  status: number
  statusText: string
}

export interface CompanyPayload {
  config: AxiosRequestConfig
  data: Company
  headers: any
  request: AxiosPromise
  status: number
  statusText: string
}
