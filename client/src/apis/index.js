import axios from 'axios';
import { 
  createCompany, 
  getCompanyById, 
  getAllCompanies, 
  updateCompanyById, 
  deleteCompanyById 
} from './company';
import {
  createFounder,
  getFoundersByCompanyId
} from './founder';
import {
  getCompanyAndFoundersByCompanyId
} from './common';

export default class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL
    })
  }

  //Company Functions
  async createCompany(obj) {
    return (await createCompany(this.instance, obj)).data;
  }

  async getCompanyById(id) {
    return (await getCompanyById(this.instance, id)).data;
  }

  async getAllCompanies() {
    return (await getAllCompanies(this.instance)).data;
  }

  async updateCompanyById(id, obj) {
    return (await updateCompanyById(this.instance, id, obj)).data;
  }

  async deleteCompanyById(id) {
    return (await deleteCompanyById(this.instance, id)).data;
  }

  //Founder Functions
  async createFounder(obj) {
    return (await createFounder(this.instance, obj)).data;
  }

  async getFoundersByCompanyId(companyId) {
    return (await getFoundersByCompanyId(this.instance, companyId)).data;
  }

  //Common Function
  async getCompanyAndFoundersByCompanyId(id) {
    return (await getCompanyAndFoundersByCompanyId(this.instance, id)).data
  }
}