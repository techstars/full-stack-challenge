class Api::FoundersController < ApplicationController
  respond_to :json

  def index
    respond_with Founder.all()
  end


  def show
    respond_with Founder.find(params[:id])
  end

  def create
    respond_with :api, Founder.create(founder_params)
  end

  def destroy
    respond_with Founder.destroy(params[:id])
  end

  def update
    company = Founder.find(params['id'])
    company.update(founder_params)
    respond_with Founder, json: founder
  end

  private

  def founder_params
    params.require(:founder).permit(
      :id,
      :name,
      :title,
      :company_id
    )
  end
end