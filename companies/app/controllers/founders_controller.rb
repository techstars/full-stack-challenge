class FoundersController < ApplicationController
  def new
    @company = Company.find(params[:company_id])
    @founder = Founder.new
  end

  def create
    @company = Company.find(params[:company_id])
    @founder = Founder.new(founder_params)
    @founder.company = @company

    if @founder.save
      redirect_to company_path(@company)
    else
      render "new"
    end

  end

  private

  def founder_params
    params.require(:founder).permit(:name, :title)
  end
end