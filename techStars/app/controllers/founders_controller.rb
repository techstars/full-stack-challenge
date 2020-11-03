class FoundersController < ApplicationController
  before_action :find_founder, only: [:show, :destroy]

  def index
    @founders = Founder.all
    render json: @founders
  end

  def show
    render json: @founder
  end

  def create
    @founder = Founder.new(founder_params)
    if @founder.valid?
      @founder.save
      render json: @founder
    else
      render error: { error: "Failed to add founder record" }, status: 400
    end
  end

  def destroy
    @founder.destroy
  end

  private

  def find_founder
    @founder = Founder.find(params[:id])
  end

  def founder_params
    params.require(:founder).permit(
      :first_name,
      :last_name,
      :title,
      :company_id
    )
  end
end
