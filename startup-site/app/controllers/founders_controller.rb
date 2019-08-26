require 'pry'
class FoundersController < ApplicationController
  protect_from_forgery with: :null_session

  def index
  end

  def create
    p "hitting the create route"
    @founder = Founder.new(founder_params)
    @founder.save
    render 'companies/home'
  end 

  private 

  def founder_params
    params.require(:new_founder).permit(:id, :full_name, :bio, :image_url, :company_id)
  end 
end