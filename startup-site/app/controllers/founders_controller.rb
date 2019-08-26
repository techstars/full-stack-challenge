require 'pry'
class CompaniesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @founders = Founders.all
    render 'index'
  end

  def create
    p "hitting the create route"
    @company = Company.new(company_params)
    @company.save
    render 'index'
  end 

  private 

  def founder_params
    params.require(:new_founder).permit(:id, :full_name, :bio, :image_url)
  end 
end