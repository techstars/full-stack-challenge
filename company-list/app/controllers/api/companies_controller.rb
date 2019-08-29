class Api::CompaniesController < ApplicationController
  respond_to :json

  def index
    respond_with Company.all()
  end

  def show
    respond_with Company.find(params[:id])
  end

  def create
    respond_with :api, Company.create(company_params)
  end

  def destroy
    respond_with Company.destroy(params[:id])
  end

  def update
    company = Company.find(params['id'])
    company.update(company_params)
    respond_with Company, json: company
  end

  private

  def company_params
    params.require(:company).permit(
      :id,
      :name,
      :description,
      :founded_date,
      :city,
      :state
    )
  end
end