import { prisma } from '../index'
import { map } from 'lodash'

import { FounderCreateWithoutCompanyInput, CompanyUpdateInput, CompanyCreateInput } from '@prisma/client'

export const getAllCompanies = async () => {
  try {
    const result = await prisma.company.findMany({ include: { founders: true } })

    return result
  } catch (e) {
    return e
  }
}

export const getCompanyById = async (id: string) => {
  try {
    const result = await prisma.company.findOne({ where: { id }, include: { founders: true } })

    return result
  } catch (e) {
    return e
  }
}

export const updateCompany = async (company: CompanyUpdateInput, id: string) => {
  try {
    const result = await prisma.company.update({
      where: { id },
      data: {
        ...company,
      },
      include: { founders: true },
    })

    return result

  } catch (e) {
    return e
  }
}

export const addCompany = async (company: CompanyCreateInput) => {
  try {
    const result = await prisma.company.create({
      data: {
        ...company,
      },
    })

    return result
  } catch (e) {
    return e
  }
}

export const addFounderToCompany = async (founder: FounderCreateWithoutCompanyInput, id: string) => {
  try {
    const result = await prisma.company.update({
      where: { id },
      data: {
        founders: {
          create: founder,
        },
      },
      include: { founders: true },
    })

    return result
  } catch (e) {
    return e
  }
}

export const deleteCompany = async (companyId: string) => {
  // prisma v2 does not yet support onDelete: CASCADE for an auto generated relation
  // so for now we have to delete founders first
  try {
    const company = await prisma.company.findOne({ where: { id: companyId }, include: { founders: true } })

    if (company) {
      const founderIds = map(company.founders, 'id')

      for (const id of founderIds) {
        await prisma.founder.delete({ where: { id } })
      }

      const result = await prisma.company.delete({
        where: { id: companyId },
      })

      return result
    }
    return {}
  } catch (e) {
    return e
  }
}
