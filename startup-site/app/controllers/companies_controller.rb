require 'pry'
class CompaniesController < ApplicationController
  protect_from_forgery with: :null_session

  def index   
    @companies = Company.all
    render 'index'
  end

  def create
    p "hitting the create route"
    @company = Company.new(company_params)
    @company.save
    render 'home'
  end 

  def update
    Company.update(params[:id], company_params)
    render 'home'
  end 

  def destroy
    Company.destroy(params[:id])
    render 'home'
  end 

  private 

  def company_params
    params.require(:new_company).permit(:id, :name, :city, :state, :short_description, :long_description, :logo_url)
  end 
end