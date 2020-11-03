class CompaniesController < ApplicationController
  before_action :find_company, only: [:show, :update, :destroy]

  def index
    @companies = Company.all
    render json: @companies, :include => [:founders, :categories]
  end

  def show
    render json: @company, include: :founders
  end

  def create
    @company = Company.new(company_params)
    if @company.valid?
      @company.save
      render json: @company
    else
      render error: { error: "Failed to add company record" }, status: 400
    end
  end

  def update
    if @company.update(company_params)
      render json: @company
    else
      render json :company.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @company.destroy
  end

  private

  def find_company
    @company = Company.find(params[:id])
  end

  def company_params
    params.require(:company).permit(
      :name,
      :description,
      :city,
      :state,
      :founded_date,
      :short_description
    )
  end
end
