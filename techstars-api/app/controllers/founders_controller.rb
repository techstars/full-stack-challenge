class FoundersController < ApplicationController
  before_action :set_company
  before_action :set_company_founder, only: [:show]

  # GET /companies/:company_id/founders
  def index
    json_response(@company.founders)
  end

  # POST /companies/:company_id/founders
  def create
    @company.founders.create!(founder_params)
    json_response(@todo, :created)
  end

  private

  def founder_params
    params.permit(:name, :title)
  end

  def set_company
    @company = Company.find(params[:company_id])
  end

  def set_company_founder
    @founder = @company.founders.find_by!(id: params[:id]) if @company
  end
end
