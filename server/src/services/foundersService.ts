import { prisma } from '../index'
import { FounderCreateInput, FounderUpdateInput } from '@prisma/client'

export const getAllFounders = async () => {
  try {
    const result = await prisma.founder.findMany({ include: { company: true } })

    return result

  } catch (e) {
    return e
  }
}

export const getFounderById = async (id: string) => {
  try {
    const result = await prisma.founder.findOne({ where: { id }, include: { company: true } })

    return result
  } catch (e) {
    return e
  }
}

export const addFounder = async (founder: FounderCreateInput & { companyId: string }) => {
  try {
    const { firstName, lastName, title, companyId } = founder
    const result = await prisma.founder.create({
      data: {
        firstName,
        lastName,
        title,
        company: {
          connect: { id: companyId },
        },
      },
    })

    return result
  } catch (e) {
    return e
  }
}

export const updateFounder = async (founder: FounderUpdateInput, id: string) => {
  try {
    const result = await prisma.founder.update({
      where: { id },
      data: {
        ...founder,
      },
    })

    return result
  } catch (e) {
    return e
  }
}
export const deleteFounder = async (id: string) => {
  try {
    const result = await prisma.founder.delete({
      where: { id },
    })

    return result
  } catch (e) {
    return e
  }
}
